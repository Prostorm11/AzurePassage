// src/hooks/useCountdownTimer.js
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useCountdownTimer = (initialTime, duration) => {
  const [remainingTime, setRemainingTime] = useState("");

  useEffect(() => {
    const calculateRemainingTime = async () => {
      let startTime = await AsyncStorage.getItem("startTime");
      if (!startTime) {
        const newStartTime = new Date().getTime();
        await AsyncStorage.setItem("startTime", newStartTime.toString());
        startTime = newStartTime;
      } else {
        startTime = parseInt(startTime);
      }

      const endDate = new Date(startTime + duration);

      const updateRemainingTime = () => {
        const now = new Date();
        const diffTime = endDate - now;

        if (diffTime <= 0) {
          setRemainingTime("Deal Ended");
          clearInterval(interval);
          return;
        }

        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
        const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

        setRemainingTime(`${diffDays}: ${diffHours}: ${diffMinutes}: ${diffSeconds} `);
      };

      updateRemainingTime();
      const interval = setInterval(updateRemainingTime, 1000); // Update every second

      return () => clearInterval(interval); // Clear interval on component unmount
    };

    calculateRemainingTime();
  }, [duration]);

  return remainingTime;
};

export default useCountdownTimer;
