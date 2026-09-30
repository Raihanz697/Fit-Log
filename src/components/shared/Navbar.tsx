
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import logo from '@/assets/logo.png';

const Navbar = () => {
    return (
        <section className="container mx-auto">
            <div className="navbar min-h-[70px] bg-[#0b0c0f] border-b border-[#1c1d21] px-5">

                <div className="navbar-start">

                    {/* Mobile menu */}
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

                        {/* Mobile menu items */}
                        <div>
                            <ul
                                tabIndex={-1}
                                className="menu menu-sm dropdown-content bg-[#111216] rounded-box z-10 mt-3 w-52 p-2 shadow"
                            >
                                <li className="text-gray-300">
                                    <Link href="/workouts">
                                        Workouts
                                    </Link>

                                    <a>
                                        My Plan
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Logo */}
                    <div className="flex items-center gap-2 text-white font-bold text-lg">
                        <Image
                            src={logo}
                            alt="FITLOG"
                        />
                        <p>FITLOG</p>
                    </div>
                </div>


                {/* ================= CENTER : MENU ================= */}
                <div className="navbar-center hidden lg:flex">
                    <div className="flex items-center gap-1">

                        <Link
                            href=""
                            className="px-4 py-2 rounded-full bg-lime-400/10 text-lime-400 text-sm font-medium"
                        >
                            Workouts
                        </Link>

                        <Link href="/my-plan" className="px-4 py-2 rounded-full text-gray-400 text-sm hover:text-white">
                            My Plan
                        </Link>

                    </div>
                </div>


                {/* ================= RIGHT ================= */}
                <div className="navbar-end gap-5">

                    {/* Plan */}
                    <div className="flex items-center gap-2 text-xs">
                        <span className="text-gray-300">
                            Plan
                        </span>

                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-[11px] font-bold text-black">
                            0
                        </span>
                    </div>

                    {/* Saved */}
                    <div className="flex items-center gap-2 text-xs">
                        <span className="text-gray-400">
                            Saved
                        </span>

                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-700 text-[11px] text-gray-400">
                            0
                        </span>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Navbar;