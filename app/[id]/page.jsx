import Navbar from "@/components/Navbar/Navbar";
import Wrapper from "@/components/wrapper/Wrapper";
import Image from "next/image";
import React from "react";

import p1Img from "../../public/p1.png";
import p2Img from "../../public/p2.png";
import p3Img from "../../public/p3.png";
import p4Img from "../../public/p4.png";
import CardSlider from "@/components/common/CardSlider";
import Contact from "@/components/Footer/Contact";

const techLogos = [
    {
        title: "",
        img: p1Img,
        alt: "logo-1",
    },
    {
        title: "",
        img: p2Img,
        alt: "logo-2",
    },
    {
        title: "",
        img: p3Img,
        alt: "logo-3",
    },
    {
        title: "",
        img: p4Img,
        alt: "logo-4",
    },
];
const page = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-yellow-300 h-screen w-full">
                <div className="flex justify-center items-center h-[90%] w-[90%] mx-auto">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/0kQ8i2FpRDk?autoplay=1&mute=1&controls=1/rel=0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>

            <div className="py-10">
                <Wrapper classname={"w-[90%] "}>
                    <div>
                        <h1 className="text-3xl font-bold">About Project</h1>

                        <p className="w-3/4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dicta veritatis commodi quasi, voluptates nam
                            delectus sit voluptatibus doloribus aperiam.
                            Voluptate aspernatur rerum quo fugiat excepturi
                            possimus et, ullam sunt soluta maiores harum non
                            temporibus suscipit dolorem dolores qui totam illo
                            beatae consectetur dolorum nemo rem. Voluptatem
                            impedit nam pariatur ea, debitis nemo dicta.
                            Reiciendis est dolorem quae delectus facere debitis
                            voluptatibus quisquam, consequatur iusto sint
                            commodi ullam consequuntur aliquam, vel molestias,
                            eum quod repudiandae maxime hic nam blanditiis porro
                            odit? Corporis incidunt sit, aut qui ratione,
                            officia, libero illum nisi dolores accusantium
                            laudantium quia facere porro? Assumenda odit iusto
                            magni doloremque aspernatur dolores quae consectetur
                            ducimus accusantium exercitationem mollitia fuga
                            corporis perferendis ipsa quo ipsum itaque alias
                            delectus obcaecati, eum officiis molestias
                            repudiandae ex? Ullam maiores illum qui recusandae
                            officia voluptate veniam fuga doloribus, ipsam quod
                            voluptas est quas suscipit dolor distinctio ab ex,
                            et commodi unde quibusdam aliquid odit architecto
                            itaque repellendus? Possimus doloribus repellendus
                            atque aspernatur itaque nostrum natus unde eaque
                            fugiat, culpa nemo repellat harum excepturi ipsum
                            suscipit at ut odit vitae quis repudiandae, in
                            consequuntur asperiores nam non. Animi numquam
                            maiores doloribus inventore saepe quisquam aliquid
                            sed ipsum nisi ex minus corrupti doloremque
                            consequatur qui quas laudantium beatae, illo soluta
                            velit dolore natus exercitationem iure fuga.
                            Molestiae accusantium dicta nihil sint qui maiores
                            consequatur quo illo, facere sed dolores, harum
                            vitae temporibus, debitis tempore in neque aliquid.
                            Eligendi quas repellendus atque. Quod corporis,
                            possimus ipsum laborum repudiandae ab cum harum
                            atque autem. Laudantium consequuntur quis libero
                            ipsa ex ullam nisi commodi atque nesciunt, tempora
                            earum modi numquam aspernatur, exercitationem
                            reprehenderit? Quam vitae totam ad fugit aut maxime
                            ab consequatur perspiciatis, libero assumenda ut qui
                            quia velit voluptates laboriosam, mollitia officia
                            sequi atque quisquam commodi pariatur animi illo
                            magnam. Dicta nobis atque sapiente facilis tempora
                            odit nostrum.
                        </p>
                    </div>

                    <div className="  my-5 flex gap-5">
                        {techLogos.map((tech, index) => (
                            <div
                                className="h-32 w-32 border border-secondary  rounded-lg flex justify-center items-center bg-custom-grad bg-img-grad"
                                key={index}
                            >
                                <Image
                                    src={tech.img}
                                    alt={tech.alt}
                                    width={100}
                                    height={100}
                                />
                                <p>{tech.title}</p>
                            </div>
                        ))}
                    </div>

                    <div className="h-1 rounded-2xl my-20 bg-secondary"></div>

                    {/* imaegs  */}
                    <div className="flex gap-10">
                        <div className="h-[450px] w-[500px]  bg-custom-grad bg-img-grad"></div>
                        <div className="h-[450px] w-[500px]  bg-custom-grad bg-img-grad"></div>
                        <div className="h-[450px] w-[500px]  bg-custom-grad bg-img-grad"></div>
                        <div className="h-[450px] w-[500px]  bg-custom-grad bg-img-grad"></div>
                    </div>

                    <div className="my-20">
                        <CardSlider />
                    </div>
                    <Contact />
                </Wrapper>
            </div>
        </div>
    );
};

export default page;
