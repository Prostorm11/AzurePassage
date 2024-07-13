import React, { createContext, useState, useEffect } from "react";
import { auth, firestore } from "./firebaseConfig";
import { doc, onSnapshot } from "firebase/firestore";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const docRef = doc(firestore, "Profiles", user.uid);
        const unsub = onSnapshot(docRef, (docSnap) => {
          if (docSnap.exists()) {
            setUserProfile(docSnap.data());
          } else {
            setUserProfile(null);
          }
          setLoading(false);
        });

        return () => unsub();
      } else {
        setUserProfile(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ userProfile, loading }}>
      {children}
    </UserContext.Provider>
  );
};
