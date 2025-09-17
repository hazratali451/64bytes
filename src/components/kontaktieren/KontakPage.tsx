"use client";
import React, { useState } from "react";
import InputField from "../global/InputField";
import Link from "next/link";
import Button from "../global/Button";
import CheckBox from "../global/CheckBox";
import toast from "react-hot-toast";

export default function KontakPage() {
  const [inps, setInps] = useState({
    name: "",
    email: "",
    company: "",
    msg: "",
    tick: false,
  });

  const [emailError, setEmailError] = useState<undefined | string>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function isEmpty() {
    return (
      !inps.name.trim() ||
      !inps.email.trim() ||
      !inps.company.trim() ||
      !inps.msg.trim() ||
      !inps.tick
    );
  }

  function validate(type: string) {
    if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(inps.email)
        ? setEmailError(undefined)
        : setEmailError("Geben Sie eine gültige E-Mail Adresse ein!");
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isEmpty()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inps.name,
          email: inps.email,
          company: inps.company,
          msg: inps.msg,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Nachricht erfolgreich gesendet!");
        setInps({
          name: "",
          email: "",
          company: "",
          msg: "",
          tick: false,
        });
      } else {
        toast.error(data.error || "Fehler beim Senden der Nachricht.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Netzwerkfehler. Bitte versuchen Sie es später erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-5 md:pt-34 pt-26.5 md:pb-30 pb-20 overflow-hidden relative">
      <div className="max-w-[1180px] mx-auto flex lg:flex-row flex-col gap-6 sm:gap-16 md:gap-24 lg:gap-26 xl:gap-30 relative z-1">
        <div className="max-w-[380px]">
          <h1 className="font-robotoMono text-[28px] md:text-[40px] leading-[120%] tracking-[1px] uppercase">
            <span className="text-cyan1"> Kontaktieren</span> Sie uns!
          </h1>

          <p className="text-gray1 leading-normal text-base max-w-[580px] mt-3.5">
            Gemeinsam bringen wir <br className="sm:hidden" />
            Ihre Entwicklung nach vorn.
          </p>
        </div>

        <form className="flex-1" onSubmit={handleSubmit}>
          <div className="grid sm:gap-y-8 gap-y-6 sm:gap-x-5 sm:grid-cols-2">
            <InputField
              name="name"
              label="Name"
              placeholder="Geben Sie Ihren Namen ein"
              suffix={"contact-us"}
              value={inps.name}
              onChange={(e) => {
                setInps((prev) => ({
                  ...prev,
                  name: e.target.value,
                }));
              }}
            />

            <InputField
              name="email"
              label="E-Mail"
              placeholder="Geben Sie Ihre E-Mail-Adresse ein"
              suffix={"contact-us"}
              type="email"
              value={inps.email}
              onChange={(e) => {
                setInps((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
              errormsg={emailError}
              onBlur={() => validate("email")}
            />

            <InputField
              name="Unternehmen"
              label="Unternehmen"
              placeholder="Geben Sie Ihr Unternehmen ein"
              suffix={"contact-us"}
              value={inps.company}
              onChange={(e) => {
                setInps((prev) => ({
                  ...prev,
                  company: e.target.value,
                }));
              }}
            />
          </div>

          <div className="sm:mt-8 mt-6">
            {" "}
            <label
              htmlFor="text-contact-us"
              className="text-base leading-normal "
            >
              Erzähl uns von Ihren Projekt
            </label>{" "}
            <textarea
              className=" text-white1 py-4 block border-b border-gray1 w-full text-sm leading-normal tracking-[0.8px] placeholder:text-gray1 focus:outline-none focus:placeholder:opacity-0 h-[180px] focus:border-white1"
              name="text"
              id="text-contact-us"
              placeholder="Über Ihre großartige Idee"
              autoComplete="off"
              value={inps.msg}
              onChange={(e) => {
                setInps((prev) => ({
                  ...prev,
                  msg: e.target.value,
                }));
              }}
            />
          </div>

          <div className="my-8 flex sm:items-center  gap-2 ">
            <div className="mt-1 sm:mt-0">
              <CheckBox
                value={inps.tick}
                onClick={() =>
                  setInps((prev) => ({
                    ...prev,
                    tick: !prev.tick,
                  }))
                }
              />
            </div>

            <p className="text-sm text-gray1 leading-normal ">
              Ich habe alle{" "}
              <Link className="underline underline-offset-2" href={""}>
                Datenschutzrichtlinien
              </Link>{" "}
              gelesen und stimme zu.
            </p>
          </div>

          <div
            className={`${
              isEmpty() || isSubmitting ? "opacity-50 cursor-pointer" : ""
            }`}
          >
            <div
              className={`${
                isEmpty() || isSubmitting ? "pointer-events-none" : ""
              }`}
            >
              <Button variant="violet" disabled={isSubmitting} type="submit">
                {isSubmitting ? "Wird gesendet..." : "Einreichen"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
