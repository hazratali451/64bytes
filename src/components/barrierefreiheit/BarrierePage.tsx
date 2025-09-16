import Link from "next/link";
import React from "react";

export default function BarrierePage() {
    return (
        <section className='px-5 md:pt-34 pt-26.5 md:pb-30 pb-20 overflow-hidden relative'>
            <div className='max-w-[1180px] mx-auto flex lg:flex-row flex-col gap-4 sm:gap-16 md:gap-24 lg:gap-26 xl:gap-30 relative z-1'>
                <div className='max-w-[280px] xl:flex-1'>
                    <h1 className='font-robotoMono text-[28px] md:text-[40px] leading-[120%] tracking-[1px] uppercase'>
                        Erklärung zur{" "}
                        <span className='text-cyan1 sm:inline hidden'>Barriere-freiheit</span>
                        <span className='text-cyan1 sm:hidden'>Barrierefreiheit</span>
                    </h1>
                </div>

                <div className='flex-1'>
                    <p className='text-base text-gray1'>
                        <span className="text-white1 sm:text-gray1">Diese Erklärung zur Barrierefreiheit gilt für die
                        Website 64bytes.de.</span>
                        <br />
                        Stand der Vereinbarkeit mit den Anforderungen
                        <br /> Diese Website ist mit den Anforderungen der
                        Barrierefreie-Informationstechnik-Verordnung (BITV 2.0)
                        in Verbindung mit dem Barrierefreiheitsstärkungsgesetz
                        (BFSG) vereinbar.
                        <br />
                        <br />
                        <span className="text-white1 sm:text-gray1">Erstellung dieser Erklärung</span> <br />
                        Diese Erklärung wurde am 25.08.2025 erstellt.
                        <br />
                        <br />
                        <span className="text-white1 sm:text-gray1">Feedback und Kontaktangaben</span>
                        <br />
                        Wenn Sie auf Barrieren stoßen oder Anmerkungen zur
                        Barrierefreiheit unserer Website haben, kontaktieren Sie
                        uns bitte:
                        <Link
                            href={""}
                            className='block underline underline-offset-4'
                        >
                            info@64bytes.de
                        </Link>
                        <br />
                        Wir bemühen uns, Ihre Hinweise innerhalb von zwei Wochen
                        zu beantworten.
                        <br /> <br />
                        <span className="text-white1 sm:text-gray1">Durchsetzungsverfahren</span>
                        <br />
                        Falls Sie der Ansicht sind, durch eine nicht
                        ausreichende barrierefreie Gestaltung dieser Website
                        benachteiligt zu sein, können Sie sich an die zuständige
                        Schlichtungsstelle wenden:
                        <br />
                        Schlichtungsstelle BGG, bei dem Beauftragten der
                        Bundesregierung für die Belange von Menschen mit
                        Behinderungen
                        <br />
                        Mauerstraße 53
                        <br />
                        10117 Berlin <br />
                        <Link
                            href={""}
                            className='block underline underline-offset-4'
                        >
                            schlichtungsstelle@bifg.bund.de
                        </Link>
                        <Link
                            href={""}
                            className='block underline underline-offset-4'
                        >
                            www.schlichtungsstelle-bgg.de
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
