import { IFitlog } from '@/types/work.typs';
import Image from 'next/image';
import React from 'react';

interface IFitlogCardProps{
    fitlog: IFitlog;
}

const WorkoutCard = ({fitlog} : IFitlogCardProps ) => {
    return (
        <div
                        
                        className="group overflow-hidden rounded-2xl border border-white/10 bg-[#15171D] shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-lime-400/40 hover:shadow-lime-400/10"
                    >

                        {/* Image */}
                        <div className="relative h-56 overflow-hidden">
                            <Image
                                src={fitlog.image}
                                alt={fitlog.name}
                                width={800}
                                height={600}
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                            />

                            {/* Image overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#15171D] via-transparent to-transparent" />

                            {/* Difficulty */}
                            <span className="absolute right-4 top-4 rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black">
                                {fitlog.difficulty}
                            </span>

                            {/* Rating */}
                            <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 backdrop-blur-sm">
                                <span className="text-yellow-400">★</span>
                                <span className="text-sm font-semibold text-white">
                                    {fitlog.rating}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-5">

                            {/* Title */}
                            <h3 className="mb-2 text-xl font-bold text-white transition group-hover:text-lime-400">
                                {fitlog.name}
                            </h3>

                            {/* Description */}
                            <p className="mb-4 line-clamp-2 text-sm leading-6 text-gray-400">
                                {fitlog.description}
                            </p>

                            {/* Muscle Groups */}
                            <div className="mb-4 flex flex-wrap gap-2">
                                {fitlog.muscleGroups.map((muscle) => (
                                    <span
                                        key={muscle}
                                        className="rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium text-lime-400"
                                    >
                                        {muscle}
                                    </span>
                                ))}
                            </div>

                            {/* Workout Info */}
                            <div className="grid grid-cols-2 gap-3 border-y border-white/10 py-4">

                                <div>
                                    <p className="text-xs text-gray-500">
                                        Duration
                                    </p>
                                    <p className="mt-1 font-semibold text-white">
                                        {fitlog.duration} min
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-gray-500">
                                        Calories
                                    </p>
                                    <p className="mt-1 font-semibold text-white">
                                        {fitlog.caloriesBurned} kcal
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-gray-500">
                                        Sets
                                    </p>
                                    <p className="mt-1 font-semibold text-white">
                                        {fitlog.sets}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-gray-500">
                                        Reps
                                    </p>
                                    <p className="mt-1 font-semibold text-white">
                                        {fitlog.reps}
                                    </p>
                                </div>

                            </div>

                            {/* Equipment */}
                            <div className="mt-4">
                                <p className="text-xs text-gray-500">
                                    Equipment
                                </p>

                                <p className="mt-1 text-sm font-medium text-gray-300">
                                    {fitlog.equipment}
                                </p>
                            </div>

                            {/* Button */}
                            <button className="mt-5 w-full rounded-xl bg-lime-400 py-3 text-sm font-bold text-black transition hover:bg-lime-300 active:scale-[0.98]">
                                View Workout
                            </button>

                        </div>
                    </div>
    );
};

export default WorkoutCard;