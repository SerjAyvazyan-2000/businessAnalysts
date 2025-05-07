export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
                {/* Блок 1 — О компании */}
                <div>
                    <a href={'/'} className="text-2xl flex gap-0.5 font-bold text-blue-600 mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7 h-7 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6L3 9m9 5l9-5"
                            />
                        </svg>
                        Business Analysts
                    </a>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Empowering professionals in Australia with the business English they need to succeed in data-driven industries.
                    </p>
                </div>

                {/* Блок 2 — Контакты */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contact</h4>
                    <ul className="text-sm space-y-2 text-gray-300">
                        <li>
                            📍 123 Collins Street, Melbourne, VIC 3000, Australia
                        </li>
                        <li>
                            📞{" "}
                            <a href="tel:+61390123456" className="hover:text-blue-400 transition">
                                +61 3 9012 3456
                            </a>
                        </li>
                        <li>
                            ✉️{" "}
                            <a href="mailto:info@aubusinessenglish.com" className="hover:text-blue-400 transition">
                                info@aubusinessenglish.com
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Блок 3 — Политики */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Legal</h4>
                    <ul className="text-sm space-y-2 text-gray-300">
                        <li>
                            <a href="/cookie-policy" className="hover:text-blue-400 transition">
                                Cookie Policy
                            </a>
                        </li>
                        <li>
                            <a href="/privacy-policy" className="hover:text-blue-400 transition">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/terms-of-use" className="hover:text-blue-400 transition">
                                Terms of Use
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Низ футера */}
            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} AU English. All rights reserved.
            </div>
        </footer>
    );
}