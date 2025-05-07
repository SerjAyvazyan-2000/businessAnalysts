"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section  id='about' className="bg-blue-50 py-20 px-4 scroll-mt-24">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Текстовая часть */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Program</h2>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                        Our <strong>English for Business Analytics</strong> program is designed specifically
                        for non-native speakers who want to build careers in the Australian business
                        environment. We combine language training with real-world analytics tasks,
                        simulations, and communication practice.
                    </p>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                        From understanding <strong>key metrics</strong> like ROI, churn rate, and lifetime value —
                        to writing clear emails and giving persuasive presentations — we prepare you for
                        the real world.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        All courses are aligned with <strong>Australian standards</strong> and include vocabulary,
                        listening exercises, and case studies based on real companies.
                    </p>
                </motion.div>

                {/* Картинка */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="https://img.freepik.com/free-photo/business-person-looking-finance-graphs_23-2150461313.jpg?ga=GA1.1.1584736296.1744446615&semt=ais_hybrid&w=740"
                        alt="About our English program"
                        className="rounded-3xl shadow-xl w-full"
                    />
                </motion.div>
            </div>
        </section>
    );
}