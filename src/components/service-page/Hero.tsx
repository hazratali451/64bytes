import Image from "next/image";
import React from "react";
import Button from "../global/Button";

export default function Hero() {
    return (
        <section className='relative flex justify-center items-center '>
            <Image
                priority
                src={"/assets/service/header.jpg"}
                alt=''
                width={1440}
                height={744}
                className="w-full"
            />

            <div className='px-5 absolute flex gap-8 flex-col items-center top-[240px]'>
                <h1 className='text-5xl leading-[120%] text-center font-robotoMono uppercase tracking-[1px] '>
                    Gemeinsam Ihre <br />{" "}
                    <span className='text-violet1'>Digitale Welt</span> erobern
                </h1>
                <Button>Projekte im Blick </Button>
            </div>
        </section>
    );
}
