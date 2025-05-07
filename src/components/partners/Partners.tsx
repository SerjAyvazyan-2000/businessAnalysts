"use client";

import { useEffect, useRef, useState } from "react";

const partners = [
    {
        name: "Atlassian",
        url: "https://www.atlassian.com",
        logo: "https://images.ctfassets.net/8j5aqoy0ts8s/3JEz6rZg2OnRTMXDpAqv0E/7ac38c0c4a255d552a289fad18a73650/logo-shadow-dont.png",
    },
    {
        name: "Deloitte",
        url: "https://www2.deloitte.com",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMxncig2F-K2mE7tn0Yr6zPVPjwimJGISMmg&s",
    },
    {
        name: "HubSpot",
        url: "https://www.hubspot.com",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQuy-HvjroZknWpylpEQH7uQ4NOR7E4-_wGA&s",
    },
    {
        name: "Adobe",
        url: "https://www.adobe.com",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQduXJREqBe_A7tkWoD48jL35xRpT_WaxP_tQ&s",
    },
    {
        name: "Amazon AWS",
        url: "https://aws.amazon.com",
        logo: "https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg",
    },
    {
        name: "Microsoft",
        url: "https://www.microsoft.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    },
];

export default function Partners() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`py-20 px-4 bg-gray-100 transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted by Global Partners</h2>
                <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
                    Our program is recognized by top companies worldwide who trust us to help professionals speak the language of analytics with confidence and clarity.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
                    {partners.map((partner, index) => (
                        <a
                            key={index}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-16 mx-auto object-contain"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}