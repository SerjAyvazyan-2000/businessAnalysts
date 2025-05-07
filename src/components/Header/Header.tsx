"use client";

import { usePathname } from "next/navigation";
import {useState} from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);


    const pathname = usePathname();

    const navLinks = [
        { label: 'Home', href: pathname === '/' ? '#hero' : '/#hero' },
        { label: 'About', href: pathname === '/' ? '#about' : '/#about' },
        { label: 'Services', href: pathname === '/' ? '#services' : '/#services' },
        { label: 'Pricing', href: pathname === '/' ? '#pricing' : '/#pricing' },
        { label: 'FAQ', href: pathname === '/' ? '#faq' : '/#faq' },
        { label: 'Contact', href: pathname === '/' ? '#contact' : '/#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <a href={'/'} className="text-2xl font-bold flex gap-0.5 text-blue-600">
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

                {/* Desktop nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-gray-700 hover:text-blue-600 font-medium transition"
                        >
                            {link.label}
                        </a>
                    ))}

                    <div className="hidden lg:flex flex-col ml-6 text-sm text-gray-600">
                        <a href="tel:+61390123456" className="hover:text-blue-600">
                            📞 +61 3 9012 3456
                        </a>
                        <a
                            href="mailto:info@aubusinessenglish.com"
                            className="hover:text-blue-600"
                        >
                            ✉️ info@aubusinessenglish.com
                        </a>
                    </div>
                </nav>

                <button
                    className="relative w-8 h-8 flex flex-col justify-center items-center md:hidden focus:outline-none z-50"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
  <span
      className={`block w-8 h-0.5 bg-gray-800 transform transition duration-300 ease-in-out ${
          menuOpen ? "rotate-45 translate-y-1.5" : ""
      }`}
  />
                    <span
                        className={`block w-8 h-0.5 bg-gray-800 my-1 transition-all duration-300 ease-in-out ${
                            menuOpen ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`block w-8 h-0.5 bg-gray-800 transform transition duration-300 ease-in-out ${
                            menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                        }`}
                    />
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-4 pb-4">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-gray-700 hover:text-blue-600 font-medium transition"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="flex flex-col text-sm text-gray-600 mt-4 border-t pt-4">
                            <a href="tel:+61390123456" className="hover:text-blue-600">
                                📞 +61 3 9012 3456
                            </a>
                            <a
                                href="mailto:info@aubusinessenglish.com"
                                className="hover:text-blue-600"
                            >
                                ✉️ info@aubusinessenglish.com
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}