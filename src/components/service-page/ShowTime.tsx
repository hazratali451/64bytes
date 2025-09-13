import React from "react";
import ShowtimeCards from "./ShowTimeCards";
import H2 from "../global/H2";
import Image from "next/image";

export default function ShowTime() {
    return (
        <section className='relative'>
            <H2>Showtime</H2>

            <ShowtimeCards />

            <Image
                className='absolute -left-[31px] bottom-2 md:hidden '
                src='/assets/service/violetBall.svg'
                alt=''
                width={223}
                height={223}
            />

            <div className=' md:hidden absolute top-0 left-0 right-0 -bottom-16 overflow-hidden'>
                <Image
                    className='absolute -right-[97px] bottom-0'
                    src='/assets/service/violetBall.svg'
                    alt=''
                    width={223}
                    height={223}
                />
            </div>
        </section>
    );
}
