"use client";

import { FitlogContext } from "@/context/FitlogContext";
import React, { useContext } from "react";

const MyPlanPage = () => {
    const{todayWorkouts}=useContext(FitlogContext)
    console.log(todayWorkouts);
    return (
        <div>
            <h1>My Plan</h1>
        </div>
    );
};

export default MyPlanPage;