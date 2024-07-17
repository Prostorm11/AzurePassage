/* 


import React, { createContext, useState, useEffect } from "react";
import { auth, firestore } from "./firebaseConfig";
import { doc, getDocs, collection, onSnapshot } from "firebase/firestore";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productsData, setProductsData] = useState([]);

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

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(firestore, "Products");
        const querySnapshot = await getDocs(productsCollection);
        const products = [];
        querySnapshot.forEach((doc) => {
          products.push(doc.data());
        });
        setProductsData(products);
      } catch (error) {
        console.log("Failed to get products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <UserContext.Provider value={{ userProfile, loading, productsData }}>
      {children}
    </UserContext.Provider>
  );
};

 */

import React, { createContext, useState, useEffect } from 'react';
import { auth, firestore } from './firebaseConfig';
import { doc, getDocs, collection, onSnapshot } from 'firebase/firestore';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productsData, setProductsData] = useState([]);
  const [Firestoreproducts, setFirestoreProducts] = useState([]);
  const [language, setLanguage] = useState('English');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const docRef = doc(firestore, 'Profiles', user.uid);
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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'Products'));
        const productsArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductsData(productsArray);
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (productsData.length > 0) {
      const productsArray = productsData.map((item) => ({
        id: item.id,
        title: item.name,
        oldprice: item.originalprice||"N/A",
        newprice: item.price,
        sold: 77,
        image: item.images[0],
        carouselImages: item.images,
        description: item.name,
        addons: item.returnable,
        more:item.variants && item.variants[0] && item.variants[0].options
        ? item.variants[0].options.map(option => option.image)
        : [],
      }));
      setFirestoreProducts(productsArray);
    }
  }, [productsData]);

  return (
    <UserContext.Provider value={{ userProfile, loading, productsData, Firestoreproducts,language }}>
      {children}
    </UserContext.Provider>
  );
};
