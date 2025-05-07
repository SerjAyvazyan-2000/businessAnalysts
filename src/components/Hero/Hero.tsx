import React from 'react';

const Hero = () => {
    return <section id='hero' style={{backgroundImage: "url('/heroBg.jpg')"}}
                    className="min-h-screen flex items-center  justify-center  bg-cover bg-center  bg-gray-50 px-4 py-20">
        <div className="max-w-5xl w-full text-center bg-white shadow-2xl rounded-3xl p-10 border border-gray-200">
            <h1 className="text-3xl md:text-5xl font-bold  text-gray-900 mb-6 leading-tight">


                English for Business Analytics <br/> in Australia 🇦🇺
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10">
                Boost your career with English tailored for data professionals. Learn to speak confidently in meetings,
                present reports, and understand analytics terminology.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
                <div className="bg-gray-100 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">📊 Analytics Vocabulary</h3>
                    <p className="text-gray-600">Master essential terms like KPIs, ROI, dashboards, and forecasting in
                        English.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">💼 Business Communication</h3>
                    <p className="text-gray-600">Practice speaking in real scenarios — meetings, emails, and
                        presentations.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">🇦🇺 AU Job Market Focus</h3>
                    <p className="text-gray-600">Learn how to prepare for interviews and communicate in Australia s work
                        culture.</p>
                </div>
            </div>

            <a
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition"
            >
                Start Learning
            </a>
        </div>
    </section>

};

export default Hero;