

"use client";

import Image from "next/image";
import React, { useContext } from "react";
import Link from "next/link";

import logo from "@/assets/logo.png";
import { FitlogContext } from "@/context/FitlogContext";

const Navbar = () => {
  const { todayWorkouts, savedWorkouts } =
    useContext(FitlogContext);

  return (
    <section className="container mx-auto">
      <div className="navbar min-h-[70px] border-b border-[#1c1d21] bg-[#0b0c0f] px-5">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box bg-[#111216] p-2 shadow"
              >
                <li>
                  <Link href="/workouts">Workouts</Link>
                </li>
                <li>
                  <Link href="/my-plan">My Plan</Link>
                </li>
              </ul>
            </div>
          </div>

          <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white">
            <Image src={logo} alt="FITLOG" />
            <p>FITLOG</p>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center gap-1">
            <Link
              href="/"
              className="rounded-full bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400"
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              className="rounded-full px-4 py-2 text-sm text-gray-400 hover:text-white"
            >
              My Plan
            </Link>
          </div>
        </div>

        <div className="navbar-end gap-5">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-gray-300">Plan</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-[11px] font-bold text-black">
              {todayWorkouts.length}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-gray-400">Saved</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-700 text-[11px] text-gray-400">
              {savedWorkouts.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
