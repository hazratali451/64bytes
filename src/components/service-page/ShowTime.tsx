
import React from "react";
import ShowtimeCards from "./ShowTimeCards";



export default function ShowTime() {
    return (
        <section>
            <h2 className='font-robotoMono text-[40px] leading-[120%] tracking-[1px] uppercase text-center'>
                Showtime
            </h2>

            <ShowtimeCards/>
        </section>
    );
}
