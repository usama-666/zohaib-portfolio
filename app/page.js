import Contact from "@/components/Footer/Contact";
import Header from "@/components/header/Header";
import Journey from "@/components/Journey/Journey";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";

import Image from "next/image";

export default function Home() {
    return (
        <div className="text-primary font-sans bg-bgcolor">
            <Navbar />

            <main>
                <Header />
                <Projects />
                <Journey />
                <Contact />

                <div className="h-10"></div>
            </main>
        </div>
    );
}
