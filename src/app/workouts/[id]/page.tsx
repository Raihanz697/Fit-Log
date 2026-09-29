import { IFitlog } from '@/types/work.typs';
import Image from 'next/image';
import React from 'react';


interface IWorkoutDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const getFitlogs = async () => {
    const response = await fetch("http://localhost:3001/fitlogData.json");
    const data = await response.json();
    return data;
};

const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {
    const { id } = await params;
    const fitlogsData = await getFitlogs();
    const fitlog = fitlogsData.find((fitlog: IFitlog) => String(fitlog.id) == String(id)) as IFitlog;

    console.log(fitlog, 'fitlog');
    return (
        <div className="container mx-auto ">
            <div className="card lg:card-side bg-[#0d0f13] text-white shadow-none gap-12">

                {/* Image */}
                <figure className="w-full shrink-0 lg:w-[48%] lg:pl-8">
                    <Image
                        src={fitlog.image}
                        alt={fitlog.name}
                        height={700}
                        width={600}
                        className="h-[680px] w-full rounded-2xl object-cover"
                    />
                </figure>

                {/* Content */}
                <div className="card-body w-full lg:w-[52%] lg:pl-8">

                    {/* Title */}
                    <h2 className="text-4xl font-black uppercase text-white">
                        {fitlog.name}
                    </h2>

                    {/* Description */}
                    <p className="mt-2 text-gray-400">
                        {fitlog.description}
                    </p>

                    {/* Muscle Groups */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {fitlog.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#baff00] px-4 py-1 text-sm font-semibold text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Information */}
                    <div className="mt-6 overflow-hidden rounded-2xl border border-[#292d35] bg-[#151820]">

                        {/* Equipment */}
                        <div className="flex justify-between border-b border-[#252933] px-6 py-4">
                            <span className="text-xs font-bold uppercase text-gray-400">
                                Equipment
                            </span>

                            <span className="text-sm text-gray-200">
                                {fitlog.equipment}
                            </span>
                        </div>

                        {/* Difficulty */}
                        <div className="flex justify-between border-b border-[#252933] px-6 py-4">
                            <span className="text-xs font-bold uppercase text-gray-400">
                                Difficulty
                            </span>

                            <span className="text-sm text-gray-200">
                                {fitlog.difficulty}
                            </span>
                        </div>

                        {/* Sets */}
                        <div className="flex justify-between border-b border-[#252933] px-6 py-4">
                            <span className="text-xs font-bold uppercase text-gray-400">
                                Sets
                            </span>

                            <span className="text-sm text-gray-200">
                                {fitlog.sets}
                            </span>
                        </div>

                        {/* Reps */}
                        <div className="flex justify-between border-b border-[#252933] px-6 py-4">
                            <span className="text-xs font-bold uppercase text-gray-400">
                                Reps
                            </span>

                            <span className="text-sm text-gray-200">
                                {fitlog.reps}
                            </span>
                        </div>

                        {/* Duration */}
                        <div className="flex justify-between border-b border-[#252933] px-6 py-4">
                            <span className="text-xs font-bold uppercase text-gray-400">
                                Duration
                            </span>

                            <span className="text-sm text-gray-200">
                                {fitlog.duration} min
                            </span>
                        </div>

                        {/* Calories */}
                        <div className="flex justify-between border-b border-[#252933] px-6 py-4">
                            <span className="text-xs font-bold uppercase text-gray-400">
                                Calories
                            </span>

                            <span className="text-sm text-gray-200">
                                {fitlog.caloriesBurned} kcal
                            </span>
                        </div>

                        {/* Rating */}
                        <div className="flex justify-between px-6 py-4">
                            <span className="text-xs font-bold uppercase text-gray-400">
                                Rating
                            </span>

                            <span className="text-sm text-gray-200">
                                {fitlog.rating}
                            </span>
                        </div>

                    </div>

                    {/* Instructions */}
                    <div className="mt-7">
                        <h3 className="text-base font-extrabold uppercase">
                            Instructions
                        </h3>

                        <ol className="mt-4 space-y-3">
                            {fitlog.instructions.map((instruction, index) => (
                                <li
                                    key={index}
                                    className="flex gap-3 text-sm leading-6 text-gray-300"
                                >
                                    <span>{index + 1}.</span>
                                    <span>{instruction}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Buttons */}
                    <div className="card-actions mt-7">

                        <button className="flex items-center gap-2 rounded-lg bg-[#baff00] px-5 py-3 text-sm font-bold text-black hover:bg-[#c8ff33]">
                            Add to today's plan
                        </button>

                        <button className="rounded-lg border border-[#3a3f49] bg-transparent px-5 py-3 text-sm text-gray-200 hover:bg-[#181b22]">
                            Save for later
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );

    
};

export default WorkoutDetailsPage;