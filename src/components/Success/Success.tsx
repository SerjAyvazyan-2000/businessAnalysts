"use client";

import { useEffect, useRef, useState } from "react";

const stories = [
    {
        name: "Emily Tran",
        role: "Junior Business Analyst at Atlassian",
        story:
            "I joined the AU English course with very basic skills. After 2 months, I was able to lead my first project presentation in English. I now feel confident communicating with clients and my team.",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        name: "Carlos Mendes",
        role: "Marketing Data Specialist at Canva",
        story:
            "I struggled to explain insights in meetings. This course helped me learn real business English. Now I run weekly performance reports and speak fluently with the AU marketing team.",
        image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
        name: "Amara Singh",
        role: "Business Graduate at Deloitte Australia",
        story:
            "The Australian job market requires strong communication. This course gave me the confidence and the language to pass my interviews and succeed in daily workplace conversations.",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
];

export default function Success() {
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
            className={`py-24 px-4 bg-blue-50 transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
                <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                    Our students have gone on to secure top roles in analytics, finance, marketing, and consulting — thanks to their improved communication in English.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {stories.map((student, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition text-left"
                    >
                        <img
                            src={student.image}
                            alt={student.name}
                            className="w-16 h-16 rounded-full mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">{student.name}</h3>
                        <p className="text-sm text-blue-600 mb-3">{student.role}</p>
                        <p className="text-gray-700 leading-relaxed text-[15px]">{student.story}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}