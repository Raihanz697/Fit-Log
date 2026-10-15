// "use client";
// import { FitlogContext } from '@/context/FitlogContext';
// import { IFitlog } from '@/types/work.typs';
// import React, { useContext } from 'react';
// import toast from 'react-hot-toast';

// //     const TodaysPlanButton =({fitlog}:{fitlog:IFitlog})=>{

// //         const { todayWorkouts,setTodayWorkouts
// //  } = useContext(FitlogContext)

// //     const fitlogsProvider= useContext(FitlogContext)
// //     console.log(fitlogsProvider);

// // const handleTodaysPlan = () => {
// //     console.log("today plan kam korer");

// //     setTodayWorkouts((prev) => {  const updatedWorkouts = fitlog;
// //         console.log("Updated workouts:", updatedWorkouts);  return 
// //         updatedWorkouts;  
// //     });

// const TodaysPlanButton = ({ fitlog }: { fitlog: IFitlog }) => {
//   const { todayWorkouts, setTodayWorkouts } =
//     useContext(FitlogContext);

//   const handleTodaysPlan = () => {
//     setTodayWorkouts((prev) => [...prev, fitlog]);
//     toast.success("Added to today's plan! 💪");

// }
//     return (
//         <button className="flex items-center gap-2 rounded-lg bg-[#baff00] px-5 py-3 text-sm font-bold text-black hover:bg-[#c8ff33]" onClick={()=> handleTodaysPlan()}>
//                             Add to today's plan
//                         </button>
//     );
// };

// export default TodaysPlanButton;


"use client";

import React, { useContext } from "react";
import toast from "react-hot-toast";

import { FitlogContext } from "@/context/FitlogContext";
import type { IFitlog } from "@/types/work.typs";

const MAX_WORKOUTS = 5;

const TodaysPlanButton = ({ fitlog }: { fitlog: IFitlog }) => {
  const { todayWorkouts, setTodayWorkouts } =
    useContext(FitlogContext);

  const isPlanFull = todayWorkouts.length >= MAX_WORKOUTS;

  const handleTodaysPlan = () => {
    if (todayWorkouts.length >= MAX_WORKOUTS) {
      toast.error("Today's plan is full! Maximum 5 workouts.");
      return;
    }

    if (todayWorkouts.some((workout) => workout.id === fitlog.id)) {
      toast.error("This workout is already in your plan.");
      return;
    }

    setTodayWorkouts((prev) => {
      if (prev.length >= MAX_WORKOUTS) return prev;

      if (prev.some((workout) => workout.id === fitlog.id)) {
        return prev;
      }

      return [...prev, fitlog];
    });

    toast.success("Added to today's plan! 💪");
  };

  return (
    <button
      onClick={handleTodaysPlan}
      disabled={isPlanFull}
      className="flex items-center gap-2 rounded-lg bg-[#baff00] px-5 py-3 text-sm font-bold text-black hover:bg-[#c8ff33] disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isPlanFull ? "Plan Full (5/5)" : "Add to today's plan"}
    </button>
  );
};

export default TodaysPlanButton;
