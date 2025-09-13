import Image from "next/image";
import React from "react";
import Button from "../global/Button";
import AnimatedHeading from "./AnimatedHeading";
import AnimatedHeroBtn from "./AnimatedHeroBtn";

export default function Hero() {
    return (
        <section className='relative flex justify-center items-center '>
            <Image
                priority
                src={"/assets/service/header.jpg"}
                alt=''
                width={1440}
                height={744}
                className='w-full min-h-[564px] object-cover object-[84%_55%]'
            />

            <div className='px-5 absolute flex gap-8 flex-col items-center sm:top-[240px] top-28'>
                {/* <h1 className='lg:text-5xl text-4xl leading-[120%] text-center font-robotoMono uppercase tracking-[1px] '>
                    Gemeinsam Ihre <br />{" "}
                    <span className='text-violet1'>Digitale Welt</span> erobern
                </h1> */}

                <AnimatedHeading />
                <div className='md:block hidden'>
                    <Button variant='violet'>Projekte im Blick </Button>
                </div>

                <AnimatedHeroBtn />
            </div>
        </section>
    );
}
