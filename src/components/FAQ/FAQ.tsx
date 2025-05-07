"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
    {
        question: "Who is this course for?",
        answer:
            "This course is ideal for professionals entering business analytics roles, data-driven marketing, finance, or operations in Australian companies.",
    },
    {
        question: "Do I need prior knowledge in analytics?",
        answer:
            "Not necessarily. We teach essential business English while gradually introducing analytics vocabulary, use cases, and real-life business examples.",
    },
    {
        question: "Is this course suitable for job preparation?",
        answer:
            "Yes. We include modules on communication for interviews, presentations, and how to confidently discuss KPIs and business metrics in English.",
    },
    {
        question: "How long does the course take?",
        answer:
            "It depends on your level. Most students complete the core program in 6–8 weeks with 2–3 hours of study per week.",
    },
];

export default function FAQ() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setIsVisible(true);
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`py-20 px-4 transition-opacity duration-1000  ${
                isVisible ? "opacity-100" : "opacity-0"
            } bg-white`}
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
                <p className="text-gray-600 text-lg mb-12">
                    Everything you need to know about our English course for business analytics professionals.
                </p>

                <div className="space-y-6 text-left">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                id={'faq'}
                                key={index}
                                className="border  border-gray-200 rounded-2xl shadow-sm bg-gray-50 overflow-hidden transition-all"
                            >
                                <button
                                    onClick={() =>
                                        setActiveIndex((prev) => (prev === index ? null : index))
                                    }
                                    className="w-full cursor-pointer px-6 py-5 flex items-center justify-between text-lg font-medium text-left text-gray-800"
                                >
                                    <span>{faq.question}</span>
                                    <svg
                                        className={`w-6 h-6 transform transition-transform duration-300 ${
                                            isOpen ? "rotate-45 text-red-500" : "rotate-0 text-gray-400"
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                </button>
                                <div
                                    className={`px-6 pb-2 text-gray-600 transition-all duration-500 ${
                                        isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                                    } overflow-hidden`}
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}