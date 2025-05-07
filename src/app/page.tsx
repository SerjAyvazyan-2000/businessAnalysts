"use client";


import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import FAQ from "@/components/FAQ/FAQ";
import Partners from "@/components/partners/Partners";
import Contact from "@/components/Contact/Contact";
import Pricing from "@/components/Pricing/Pricing";
import Success from "@/components/Success/Success";
import {useEffect} from "react";

export default function Home() {

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});
            }
        }
    }, []);

    return <>
        <Hero/>
        <Services/>
        <About/>
        <FAQ/>
        <Partners/>
        <Contact/>
        <Pricing/>
        <Success/>


    </>
}
