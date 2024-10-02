import localFont from "next/font/local";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Zohaib Butt | Portfolio",
    description:
        "We provide the bridge between the real and digital world by building Game based solutions.",
    alternates: {
        canonical: "https://www.zohaib-portfolio-nu.vercel.app/",
        languages: {
            "en-US": "/en-US",
            "en-GB": "/en-GB",
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <title>Zohaib Butt | Portfolio</title>
            </Head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
