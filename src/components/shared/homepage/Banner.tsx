import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/banner.png'

const Banner = () => {
    return (
        <section className='container mx-auto bg-[#15171D]'>
            <div className='grid grid-cols-2 items-center justify-between gap-8 p-10'>
                <div>
                    <h6 className='text-[#C2F800] '>WORKOUT LIBRARY</h6>
                    <h2 className='font-bold text-4xl text-[#FFFFFF] mt-4'>
                        TRAIN WITH INTENT. LOG <br /> EVERY SET.
                    </h2>
                    <p className='text-[#9CA3AF] mt-4'>
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
                    </p>
                    <button className='btn bg-[#C2F800] text-black px-6 py-3 mt-6 rounded-lg hover:bg-[#A7D600]'>
                        BROWSE WORKOUTS
                    </button>
                </div>
                <div className='flex justify-end'>
                    <Image src={bannerImg} alt="Workout Image" className='w-3/4' />
                </div>
            </div>
        </section>
    );
};

export default Banner;