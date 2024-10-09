"use client";
import Wrapper from "@/components/wrapper/Wrapper";
import Image from "next/image";
import React from "react";

import CardSlider from "@/components/common/CardSlider";
import Contact from "@/components/Footer/Contact";

const techLogos = [
    {
        title: "",
        img: "/p1.png",
        alt: "logo-1",
    },
    {
        title: "",
        img: "/p2.png",
        alt: "logo-2",
    },
    {
        title: "",
        img: "/p3.png",
        alt: "logo-3",
    },
    {
        title: "",
        img: "/p4.png",
        alt: "logo-4",
    },
];
const ProjectPage = ({ params: { projectId } }) => {
    const projectDetails = [
        {
            title: "Clash of Titans",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel placerat nisi, a pharetra dolor. Nulla facilisi. Nullam non justo vel odio volutpat lobortis.",
            id: "Project-1",
        },
        {
            title: "Call of Duty Modern Warfare",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel placerat nisi, a pharetra dolor. Nulla facilisi. Nullam non justo vel odio volutpat lobortis.",
            id: "Project-2",
            images: [],
        },
        {
            title: "Project IGI 1",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel placerat nisi, a pharetra dolor. Nulla facilisi. Nullam non justo vel odio volutpat lobortis.",
            id: "Project-3",
            images: [],
        },

        {
            title: "Counter Strike 2",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel placerat nisi, a pharetra dolor. Nulla facilisi. Nullam non justo vel odio volutpat lobortis.",
            id: "Project-4",
            images: [],
        },

        {
            title: "Candy Crash  ",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel placerat nisi, a pharetra dolor. Nulla facilisi. Nullam non justo vel odio volutpat lobortis.",
            id: "Project-5",
            images: [],
        },

        // Add more projects here...
    ];

    const projectItem = projectDetails.filter(
        (projId) => projId.id === projectId
    );
    const { title, id, description, images } =
        projectItem.length > 0 && projectItem[0];
    console.log(title, id, description, images);

    return (
        <div>
            <div className="flex justify-center items-center  bg-img-grad bg-custom-grad h-[300px] md:h-screen w-full">
                <div className=" h-[90%] md:h-[80%] w-[95%] mx-auto">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/0kQ8i2FpRDk?autoplay=1&mute=1&controls=1/rel=0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                    ></iframe>
                </div>
            </div>

            <div className="py-10">
                <Wrapper classname={"w-[90%] "}>
                    <div>
                        {/* <h1 className="text-xl md:text-3xl font-bold">
                            About Project
                        </h1> */}
                        <h2 className=" text-xl md:text-3xl font-bold">
                            Project : {title}
                        </h2>

                        <p className="w-full md:w-3/4">
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

                    <div className="  my-5 flex flex-wrap gap-5">
                        {techLogos.map((tech, index) => (
                            <div
                                className="h-20 w-20 md:h-32 md:w-32 border border-secondary  rounded-lg flex justify-center items-center bg-custom-grad bg-img-grad"
                                key={index}
                            >
                                <Image
                                    src={tech.img}
                                    alt={tech.alt}
                                    width={100}
                                    height={100}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="h-1 rounded-2xl my-20 bg-secondary"></div>

                    {/* imaegs  */}
                    <div className=" flex  flex-col md:flex-row justify-between gap-5  ">
                        <div className="relative h-[450px] w-full  md:w-1/5   bg-custom-grad bg-img-grad">
                            <Image
                                src={"/poster.jpg"}
                                alt="posters "
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative h-[450px] w-full  md:w-1/5   bg-custom-grad bg-img-grad">
                            <Image
                                src={"/poster.jpg"}
                                alt="posters "
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative h-[450px] w-full  md:w-1/5   bg-custom-grad bg-img-grad">
                            <Image
                                src={"/poster.jpg"}
                                alt="posters "
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative h-[450px] w-full  md:w-1/5   bg-custom-grad bg-img-grad">
                            <Image
                                src={"/poster.jpg"}
                                alt="posters "
                                fill
                                className="object-cover"
                            />
                        </div>
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

export default ProjectPage;
