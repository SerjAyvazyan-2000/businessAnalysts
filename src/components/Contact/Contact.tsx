"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
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
        <section id={'contact'}
            ref={sectionRef}
            className={`py-24 px-4 bg-white transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
                {/* Левая колонка — Контактная информация */}
                <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                    <p className='text-gray-600 mb-8'>
            Whether you have a question about the course, pricing, or want to join our community — our team is here to help you succeed.
          </p>

          <ul className="space-y-4 mb-8 text-gray-700">
            <li>
              <strong>📍 Address:</strong> 123 Collins Street, Melbourne, VIC 3000, Australia
            </li>
            <li>
              <strong>📞 Phone:</strong>{" "}
              <a href="tel:+61390123456" className="text-blue-600 hover:underline">
                    +61 3 9012 3456
                </a>
            </li>
            <li>
                <strong>✉️ Email:</strong>{" "}
                <a href="mailto:info@aubusinessenglish.com" className="text-blue-600 hover:underline">
                    info@aubusinessenglish.com
                </a>
            </li>
        </ul>

    <div className="flex gap-4">
        <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" p-1 rounded-full flex items-center justify-center hover:bg-blue-200 transition"
        >
            Facebook
        </a>
        <a
            href="https://twitt.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" p-1 rounded-full flex items-center justify-center hover:bg-blue-200 transition"
        >
            Twitter
        </a>
        <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" p-1 rounded-full flex items-center justify-center hover:bg-blue-200 transition"
        >
            LinkedIn
        </a>
    </div>
</div>

    {/* Правая колонка — Форма */}
    <form className="bg-gray-50 p-8 rounded-2xl shadow-md space-y-6">
        <div>
            <label className="block mb-2 font-medium text-gray-800" htmlFor="name">
                Full Name
            </label>
            <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
        </div>
        <div>
            <label className="block mb-2 font-medium text-gray-800" htmlFor="email">
                Email Address
            </label>
            <input
                type="email"
                id="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
        </div>
        <div>
            <label className="block mb-2 font-medium text-gray-800" htmlFor="message">
                Your Message
            </label>
            <textarea
                id="message"
                placeholder="Write your message here..."
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            ></textarea>
        </div>
        <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
            Send Message
        </button>
    </form>
</div>
</section>
);
}