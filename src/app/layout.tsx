import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import CookieNotice from "@/components/CookieNotice/cookieNotice";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: 'AU English Business Courses',
    description:
        'Learn professional business English tailored to the Australian market. Improve your communication skills, presentation delivery, and workplace fluency.',
    keywords: [
        'Business English',
        'AU English courses',
        'English for professionals',
        'Australian business language',
        'English communication',
        'Business English Australia',
    ],
    authors: [{ name: 'AU English Team', url: 'https://aubusinessenglish.com' }],
    creator: 'AU English Team',
    metadataBase: new URL('https://aubusinessenglish.com'),

    openGraph: {
        title: 'AU English Business Courses',
        description:
            'Master business English skills for the Australian workplace. Online courses, real scenarios, live sessions.',
        url: 'https://aubusinessenglish.com',
        siteName: 'AU English',
        locale: 'en_AU',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'AU English Business Courses',
        description:
            'Speak confidently in business. Learn Australian-style English online. Join now.',
        creator: '@auenglish',
        images: ['/og-image.jpg'],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },

    themeColor: '#ffffff',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">

        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Header/>

        {children}

        <Footer/>
        <CookieNotice/>
        </body>


        </html>
    );
}
