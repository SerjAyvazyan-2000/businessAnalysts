"use client";

import { motion } from "framer-motion";

const services = [
    {
        title: "Business Data Analysis",
        description:
            "Understand business reports, dashboards, KPIs, and perform data interpretation — all in English.",
        icon: "https://img.icons8.com/color/96/combo-chart--v1.png",
    },
    {
        title: "Professional Speaking Skills",
        description:
            "Practice real meeting dialogues, strategic presentations, and improve verbal communication.",
        icon: "https://img.icons8.com/color/96/speech-bubble.png",
    },
    {
        title: "Report & Email Writing",
        description:
            "Learn how to write business emails, reports, and summaries using proper tone and terminology.",
        icon: "https://img.icons8.com/color/96/document--v1.png",
    },
    {
        title: "Pitch & Present Like a Pro",
        description:
            "Deliver persuasive pitches and presentations in a business setting with confidence.",
        icon: "https://img.icons8.com/color/96/presentation--v1.png",
    },
];

export default function Services() {
    return (
        <section id='services' className="bg-white py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
                <p className="text-gray-600 text-lg mb-14 max-w-2xl mx-auto">
                    Our English training is focused on business analytics and corporate communication. Here’s how we help you succeed in the Australian business world:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="p-6 rounded-2xl border border-gray-200 shadow-md bg-gray-50 text-left flex items-start gap-5 hover:shadow-lg transition"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <img src={service.icon} alt={service.title} className="w-14 h-14" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}