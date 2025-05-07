"use client";

import { useEffect, useRef, useState } from "react";

const pricingPlans = [
    {
        name: "Starter",
        price: "Free",
        description: "Perfect for beginners who want to try the basics of business English.",
        features: [
            "Basic course access",
            "Limited analytics vocabulary",
            "Weekly tips via email",
        ],
        button: "Get Started",
    },
    {
        name: "Professional",
        price: "$29/mo",
        description:
            "For professionals who want full access and interactive sessions tailored to Australian business culture.",
        features: [
            "Full course library",
            "Live conversation classes",
            "Email & report writing modules",
            "Australian case studies",
        ],
        button: "Join Now",
        highlighted: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For companies or teams needing tailored group training and support.",
        features: [
            "Group access for teams",
            "Dedicated trainer & progress tracking",
            "Customized business scenarios",
            "Priority support",
        ],
        button: "Contact Sales",
    },
];

export default function Pricing() {
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
        <section id='pricing'
            ref={sectionRef}
            className={`py-24 px-4 bg-gray-50 transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Flexible plans to meet your goals — whether you're just starting or preparing for advanced business roles.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className={`rounded-3xl border shadow-md p-8 bg-white transition-all hover:shadow-xl relative ${
                            plan.highlighted
                                ? "border-blue-600 ring-2 ring-blue-300"
                                : "border-gray-200"
                        }`}
                    >
                        {plan.highlighted && (
                            <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </span>
                        )}
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                        <p className="text-3xl font-extrabold text-gray-900 mb-4">{plan.price}</p>
                        <p className="text-gray-600 mb-6">{plan.description}</p>
                        <ul className="text-gray-700 mb-6 space-y-2">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="text-green-500">✅</span> {feature}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#contact"
                            className="w-full block text-center bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                        >
                            {plan.button}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}