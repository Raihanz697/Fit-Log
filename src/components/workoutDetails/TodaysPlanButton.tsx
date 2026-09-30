"use client";
import { FitlogContext } from '@/context/FitlogContext';
import { IFitlog } from '@/types/work.typs';
import React, { useContext } from 'react';

    const TodaysPlanButton =({fitlog}:{fitlog:IFitlog})=>{

        const { todayWorkouts,setTodayWorkouts
 } = useContext(FitlogContext)

    const fitlogsProvider= useContext(FitlogContext)
    console.log(fitlogsProvider);

const handleTodaysPlan = () => {
    console.log("today plan kam korer");

    setTodayWorkouts({...todayWorkouts,fitlog})

}
    return (
        <button className="flex items-center gap-2 rounded-lg bg-[#baff00] px-5 py-3 text-sm font-bold text-black hover:bg-[#c8ff33]" onClick={()=> handleTodaysPlan()}>
                            Add to today's plan
                        </button>
    );
};

export default TodaysPlanButton;