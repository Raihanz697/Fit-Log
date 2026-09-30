"use client";

import { FitlogContext } from '@/context/FitlogContext';
import React, { useContext } from 'react';

const ListedWorkouts = () => {
    const {todayWorkouts} =useContext(FitlogContext)
    console.log(todayWorkouts,"todayWorkouts");

    const {savedWorkouts}= useContext(FitlogContext)
    console.log(savedWorkouts,'savedWorkouts');
    return (
        <div>
            
        </div>
    );
};

export default ListedWorkouts;