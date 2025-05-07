"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieNotice() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem("cookieAccepted");
        if (!accepted) {
            setTimeout(() => setShowBanner(true), 1000); // появляется через 1 сек
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieAccepted", "true");
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 max-w-xl w-full bg-gray-900 text-white px-6 py-5 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 animate-fadeIn">
            <p className="text-sm">
                We use cookies to improve your experience. By continuing to browse, you agree to our{" "}

                <Link href="/privacy-policy" className="underline text-blue-300 hover:text-blue-400">
                    Privacy Policy
                </Link>.
            </p>
            <button
                onClick={handleAccept}
                className="bg-blue-600 cursor-pointer hover:bg-blue-700 transition text-white font-semibold px-5 py-2 rounded-lg text-sm"
            >
                Accept
            </button>
        </div>
    );
}