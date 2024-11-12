import localFont from "next/font/local";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./globals.css";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import ScrollTop from "@/components/ScrollTop";

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
    icons: {
        icon: [
            {
                rel: "icon",
                url: "/b_logo.png",
                type: "image/png",
                sizes: "32x32",
            },
            {
                rel: "icon",
                url: "/favicon.ico",
                type: "image/x-icon",
                sizes: "16x16",
            },
        ],
        apple: { rel: "apple-touch-icon", url: "/b_logo.png" },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="text-primary font-sans bg-bgcolor relative">
                    <Navbar />

                    {children}
                    <div className="h-16 w-16 md:w-20 md:h-20 flex justify-center items-center z-10  fixed bottom-10 right-6">
                        <ScrollTop className=" " />
                    </div>
                </div>
            </body>
        </html>
    );
}
