"use client";
import { FitlogContext } from '@/context/FitlogContext';
import { IFitlog } from '@/types/work.typs';
import React, { useContext } from 'react';

    const SavelaterButton =({fitlog}:{fitlog:IFitlog})=>{
        const {savedWorkouts,setSavedWorkouts}= useContext(FitlogContext)


    const fitlogsProvider=useContext(FitlogContext)

const handleSaveLater = () => {
    console.log("save later oise",fitlog);

    setSavedWorkouts([...savedWorkouts,fitlog])
}
    return (
        <button className="rounded-lg border border-[#3a3f49] bg-transparent px-5 py-3 text-sm text-gray-200 hover:bg-[#181b22]  " onClick={()=> handleSaveLater()}>
                            Save for later
                        </button>
    );
};

export default SavelaterButton;