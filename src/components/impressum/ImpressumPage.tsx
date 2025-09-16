import Link from "next/link";
import React from "react";

export default function ImpressumPage() {
    return (
        <section className='px-5 md:pt-34 pt-26.5 md:pb-30 pb-20 overflow-hidden relative'>
            <div className='max-w-[1180px] mx-auto flex lg:flex-row flex-col gap-4 sm:gap-16 md:gap-24 lg:gap-26 xl:gap-30 relative z-1'>
                <div className='max-w-[280px] xl:flex-1'>
                    <h1 className='font-robotoMono text-[28px] md:text-[40px] leading-[120%] tracking-[1px] uppercase'>
                        Impressum
                    </h1>
                </div>

                <div className='flex-1'>
                    <p className="text-base text-gray1">
                        Adresse: ASOS.com Limited
                        <br />
                        Greater London House
                        <br />
                        Hampstead
                        <br />
                        London, United Kingdom, NW1 7FB
                        <br />
                        Umsatzsteuer-ID: GB 788 6225 77
                        <br />
                        <br/>
                        Telefonnummer: <Link href={''} className="underline underline-offset-2">+49 33701449975</Link>
                        <br />
                        <br/>
                        Eingetragen bei: Companies House (UK)
                        <br />
                        Companies House Registernummer: 3584121
                        <br />
                        Vorstand: Mathew James Dunn und Anna Kristina Suchopar
                        <br />
                        Kundenservice-Anfragen für Deutschland:
                        <br />
                        Für jegliche Kundenservice-Anfragen nutze bitte unseren
                        Live Chat-Service über den untenstehenden
                        &quot;Kontaktiere uns jetzt&quot;-Button. So kannst du
                        unser Kundenservice-Team direkt erreichen. Unser Team
                        wird deine Anfrage prüfen und dir innerhalb unserer
                        Geschäftszeiten so schnell wie möglich antworten.
                    </p>
                </div>
            </div>
        </section>
    );
}
