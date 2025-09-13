import React from "react";
import Hero from "./Hero";
import WirBewegen from "./WirBewegen";
import KundenImFokus from "./KundenImFokus";
import TerminCTA from "./TerminCTA";
import ShowTime from "./ShowTime";
import FaqSection from "./FaqSection";
import SliderSection from "./SliderSection";
import TerminCta2 from "./TerminCta2";
import StartAnamtionBg from "./StartAnamtionBg";

export default function ServicePage() {
    return (
        <>
            <StartAnamtionBg/>
            <Hero />
            <WirBewegen />
            <KundenImFokus />
            <TerminCTA />
            <ShowTime />
            <FaqSection />
            <SliderSection />
            <TerminCta2/>
        </>
    );
}
