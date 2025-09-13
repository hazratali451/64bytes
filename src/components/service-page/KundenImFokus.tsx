import React from "react";
import LogoSlider from "./LogoSlider";
import H2 from "../global/H2";
export default function KundenImFokus() {
    return (
        <section className='relative z-1'>
            <div className='flex flex-col md:gap-10 gap-8'>
                <H2>Kunden im Fokus</H2>

                <LogoSlider />
            </div>
        </section>
    );
}
