

import { IFitlog } from "@/types/work.typs";
import Image from "next/image";
import React from "react";
import { Clock3, Flame, Star } from "lucide-react";

interface IFitlogCardProps {
    fitlog: IFitlog;
}

const WorkoutCard = ({ fitlog }: IFitlogCardProps) => {
    return (
        <div
            className="group overflow-hidden rounded-2xl border border-white/10 bg-[#15171D] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-lime-400/40 hover:shadow-xl hover:shadow-lime-400/10"
        >
            {/* Image */}
            <div className="h-[345px] overflow-hidden">
                <Image
                    src={fitlog.image}
                    alt={fitlog.name}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="px-6 py-6">

                {/* Muscle Groups */}
                <div className="mb-4 flex gap-3">
                    {fitlog.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black transition-transform duration-300 group-hover:scale-105"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold uppercase tracking-wide text-white">
                    {fitlog.name}
                </h3>

                {/* Equipment */}
                <p className="mt-1 text-sm text-gray-400">
                    {fitlog.equipment}
                </p>

                {/* Divider */}
                <div className="my-4 border-t border-white/10"></div>

                {/* Info */}
                <div className="flex items-center gap-5 text-xs text-gray-400">

                    {/* Duration */}
                    <div className="flex items-center gap-1.5">
                        <Clock3
                            size={14}
                            strokeWidth={2}
                            className="text-lime-400"
                        />
                        <span>{fitlog.duration} min</span>
                    </div>

                    {/* Calories */}
                    <div className="flex items-center gap-1.5">
                        <Flame
                            size={14}
                            strokeWidth={2}
                            className="text-lime-400"
                        />
                        <span>{fitlog.caloriesBurned} kcal</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                        <Star
                            size={14}
                            strokeWidth={2}
                            className="text-lime-400"
                        />
                        <span>{fitlog.rating}</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WorkoutCard;