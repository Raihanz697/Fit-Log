
// "use client";

// import { IFitlog } from "@/types/work.typs";
// import React, { createContext, useState, type ReactNode } from "react";

// export const FitlogContext = createContext({});

// const FitlogProvider = ({ children }: { children: ReactNode }) => {
//   const [todayWorkouts, setTodayWorkouts] = useState<IFitlog[]>([]);
//   const [savedWorkouts, setSavedWorkouts] = useState<IFitlog[]>([]);

//   const sharedData = {
//     todayWorkouts,
//     setTodayWorkouts,
//     savedWorkouts,
//     setSavedWorkouts,
//   };
//   // console.log(sharedData);

// //   return (
// //     <FitlogContext.Provider value={sharedData}>
// //       {children}
// //     </FitlogContext.Provider>
// //   );
// // };

// // export default FitlogProvider;
//  return (
//     <FitlogContext.Provider
//       value={{
//         todayWorkouts,
//         setTodayWorkouts,
//         savedWorkouts,
//         setSavedWorkouts,
//       }}
//     >
//       {children}
//     </FitlogContext.Provider>
//   );
// };

// export default FitlogProvider;


"use client";

import React, {
  createContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

import type { IFitlog } from "@/types/work.typs";

interface IFitlogContext {
  todayWorkouts: IFitlog[];
  setTodayWorkouts: Dispatch<SetStateAction<IFitlog[]>>;
  savedWorkouts: IFitlog[];
  setSavedWorkouts: Dispatch<SetStateAction<IFitlog[]>>;
}

export const FitlogContext = createContext<IFitlogContext>({
  todayWorkouts: [],
  setTodayWorkouts: () => {},
  savedWorkouts: [],
  setSavedWorkouts: () => {},
});

const FitlogProvider = ({ children }: { children: ReactNode }) => {
  const [todayWorkouts, setTodayWorkouts] = useState<IFitlog[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<IFitlog[]>([]);

  return (
    <FitlogContext.Provider
      value={{
        todayWorkouts,
        setTodayWorkouts,
        savedWorkouts,
        setSavedWorkouts,
      }}
    >
      {children}
    </FitlogContext.Provider>
  );
};

export default FitlogProvider;
