import React from "react";
import LogoSlider from "./LogoSlider";
export default function KundenImFokus() {
    return (
        <section className="relative z-1">
            <div className='flex flex-col gap-10'>
                <h2 className="font-robotoMono text-[40px] leading-[120%] tracking-[1px] uppercase text-center">Kunden im Fokus</h2>

                <LogoSlider/>
            </div>
        </section>
    );
}
