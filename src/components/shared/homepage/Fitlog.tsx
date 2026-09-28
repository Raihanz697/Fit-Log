
import React from "react";
import WorkoutCard from "../WorkoutCard";
import { IFitlog } from "@/types/work.typs";



const getFitlogs = async () => {
    const response = await fetch("http://localhost:3000/fitlogData.json");
    const data = await response.json();
    return data;
};

const Fitlog = async () => {
    const fitlogsData = await getFitlogs();

    return (
        <section className="container mx-auto my-[70px] px-4">

            {/* Section Heading */}
            <div className="mb-10 text-center">
                

                <h2 className="text-3xl justify-start" >THE LIBRARY</h2>
                

                <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            {/* Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {fitlogsData.map((fitlog:IFitlog, ind:number) => {
                    return < WorkoutCard key={ind} fitlog={fitlog} />
})}

            </div>

        </section>
    );
};

export default Fitlog;