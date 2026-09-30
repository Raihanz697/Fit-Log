
"use client";

import React, { createContext, useState, type ReactNode } from "react";

export const FitlogContext = createContext({});

const FitlogProvider = ({ children }: { children: ReactNode }) => {
  const [todayWorkouts, setTodayWorkouts] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  const sharedData = {
    todayWorkouts,
    setTodayWorkouts,
    savedWorkouts,
    setSavedWorkouts,
  };
  console.log(sharedData);

  return (
    <FitlogContext.Provider value={sharedData}>
      {children}
    </FitlogContext.Provider>
  );
};

export default FitlogProvider;