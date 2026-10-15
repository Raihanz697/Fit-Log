
"use client";

import { FitlogContext } from "@/context/FitlogContext";
import type { IFitlog } from "@/types/work.typs";
import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock3, Flame, Star, Check, X, Dumbbell } from "lucide-react";
import toast from "react-hot-toast";

type Tab = "today" | "saved";

const MyPlanPage = () => {
  const {
    todayWorkouts,
    setTodayWorkouts,
    savedWorkouts,
    setSavedWorkouts,
  } = useContext(FitlogContext);

  const [activeTab, setActiveTab] = useState<Tab>("today");
  const [completedIds, setCompletedIds] = useState<IFitlog["id"][]>([]);

  const isTodayTab = activeTab === "today";
  const workouts = isTodayTab ? todayWorkouts : savedWorkouts;

  const totalMinutes = todayWorkouts.reduce(
    (total, workout) => total + Number(workout.duration || 0),
    0
  );

  const totalCalories = todayWorkouts.reduce(
    (total, workout) => total + Number(workout.caloriesBurned || 0),
    0
  );

  const handleRemove = (id: IFitlog["id"]) => {
    if (isTodayTab) {
      setTodayWorkouts((prev) =>
        prev.filter((workout) => workout.id !== id)
      );
      setCompletedIds((prev) => prev.filter((item) => item !== id));
    } else {
      setSavedWorkouts((prev) =>
        prev.filter((workout) => workout.id !== id)
      );
    }

    toast.success(
      isTodayTab ? "Workout removed from your plan." : "Workout removed from Saved."
    );
  };

  const handleDone = (id: IFitlog["id"]) => {
    if (completedIds.includes(id)) {
      toast("Workout already marked as done.");
      return;
    }

    setCompletedIds((prev) => [...prev, id]);
    toast.success("Workout completed! Great work! 💪");
  };

  const handleAddToPlan = (workout: IFitlog) => {
    if (todayWorkouts.some((item) => item.id === workout.id)) {
      toast.error("This workout is already in your plan.");
      return;
    }

    if (todayWorkouts.length >= 5) {
      toast.error("Today's plan is full. Maximum 5 workouts.");
      return;
    }

    setTodayWorkouts((prev) => {
      if (prev.length >= 5 || prev.some((item) => item.id === workout.id)) {
        return prev;
      }
      return [...prev, workout];
    });

    toast.success("Added to today's plan! 💪");
  };

  return (
    <main className="min-h-screen bg-[#1c2229] px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Page heading */}
        <div className="mb-8">
          <p className="mb-2 text-xs font-bold tracking-[0.25em] text-lime-400">
            YOUR TRAINING LOG
          </p>

          <h1 className="text-3xl font-black tracking-wide sm:text-4xl">
            MY PLAN
          </h1>

          <p className="mt-3 text-sm text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <MetricCard
            label="EXERCISES"
            value={todayWorkouts.length}
            icon={<Dumbbell size={20} />}
          />

          <MetricCard
            label="MINUTES"
            value={totalMinutes}
            icon={<Clock3 size={20} />}
          />

          <MetricCard
            label="CALORIES"
            value={totalCalories}
            icon={<Flame size={20} />}
          />
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-3 border-b border-white/10">
          <button
            onClick={() => setActiveTab("today")}
            className={`border-b-2 px-4 py-3 text-sm font-bold transition ${
              isTodayTab
                ? "border-lime-400 text-lime-400"
                : "border-transparent text-gray-400 hover:text-white"
            }`}
          >
            Today&apos;s Plan ({todayWorkouts.length}/5)
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`border-b-2 px-4 py-3 text-sm font-bold transition ${
              !isTodayTab
                ? "border-lime-400 text-lime-400"
                : "border-transparent text-gray-400 hover:text-white"
            }`}
          >
            Saved ({savedWorkouts.length})
          </button>
        </div>

        {/* Empty state */}
        {workouts.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-[#111419] px-5 py-16 text-center sm:py-20">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-lime-400/10 text-lime-400">
              <Dumbbell size={30} />
            </div>

            <h2 className="text-xl font-black tracking-wide">
              NOTHING HERE YET
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-400">
              {isTodayTab
                ? "Browse the library and add a lift to get today moving."
                : "Save a workout for later and it will show up here."}
            </p>

            <Link
              href="/workouts"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#ccff00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#ddff55]"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          /* Workout cards */
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {workouts.map((workout) => {
              const isDone =
                isTodayTab && completedIds.includes(workout.id);

              return (
                <article
                  key={workout.id}
                  className={`overflow-hidden rounded-2xl border bg-[#111419] transition ${
                    isDone
                      ? "border-lime-400/40 opacity-80"
                      : "border-white/10 hover:border-lime-400/30"
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative h-52 overflow-hidden bg-[#20242b]">
                    <Image
                      src={workout.image}
                      alt={workout.name}
                      width={800}
                      height={500}
                      className="h-full w-full object-cover"
                    />

                    {isDone && (
                      <span className="absolute right-3 top-3 rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black">
                        COMPLETED
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    {/* Tags */}
                    <div className="mb-3 flex flex-wrap gap-2">
                      {workout.muscleGroups.map((muscle) => (
                        <span
                          key={muscle}
                          className="rounded-full bg-lime-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-lime-400"
                        >
                          {muscle}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-lg font-black uppercase tracking-wide">
                      {workout.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-400">
                      {workout.equipment}
                    </p>

                    {/* Stats */}
                    <div className="my-5 flex flex-wrap items-center gap-4 border-t border-white/10 pt-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1.5">
                        <Clock3 size={15} className="text-lime-400" />
                        {workout.duration} min
                      </span>

                      <span className="flex items-center gap-1.5">
                        <Flame size={15} className="text-lime-400" />
                        {workout.caloriesBurned} kcal
                      </span>

                      <span className="flex items-center gap-1.5">
                        <Star size={15} className="text-lime-400" />
                        {workout.rating}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href={`/workouts/${workout.id}`}
                        className="flex flex-1 items-center justify-center rounded-lg border border-white/15 px-3 py-2.5 text-xs font-bold transition hover:border-lime-400 hover:text-lime-400"
                      >
                        View Details
                      </Link>

                      {isTodayTab ? (
                        <button
                          onClick={() => handleDone(workout.id)}
                          disabled={isDone}
                          className="flex items-center justify-center gap-1.5 rounded-lg bg-lime-400 px-3 py-2.5 text-xs font-bold text-black transition hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <Check size={15} />
                          {isDone ? "Done" : "Mark as Done"}
                        </button>
                      ) : (
                        <button
                          onClick={() => handleAddToPlan(workout)}
                          disabled={
                            todayWorkouts.length >= 5 ||
                            todayWorkouts.some(
                              (item) => item.id === workout.id
                            )
                          }
                          className="rounded-lg bg-lime-400 px-3 py-2.5 text-xs font-bold text-black transition hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          Add to Plan
                        </button>
                      )}

                      <button
                        onClick={() => handleRemove(workout.id)}
                        aria-label={`Remove ${workout.name}`}
                        title="Remove workout"
                        className="flex items-center justify-center rounded-lg border border-red-400/30 px-3 py-2.5 text-red-400 transition hover:bg-red-400/10"
                      >
                        <X size={17} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

function MetricCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111419] p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-bold tracking-widest text-gray-400">
          {label}
        </span>

        <span className="text-lime-400">{icon}</span>
      </div>

      <p className="text-3xl font-black">{value}</p>
    </div>
  );
}

export default MyPlanPage;
