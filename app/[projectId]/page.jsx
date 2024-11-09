"use client";
import Wrapper from "@/components/wrapper/Wrapper";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import CardSlider from "@/components/common/CardSlider";
import Contact from "@/components/Footer/Contact";

import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
} from "firebase/firestore";
import app, { db } from "@/lib/firebase";
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
    const [project, setProject] = useState(null); // Initialize project state

    console.log(projectId);
    useEffect(() => {
        // Function to get a single document from the Firestore collection by its ID
        const fetchProject = async () => {
            try {
                const projectDocRef = doc(db, "projects", projectId); // Reference to the specific project document
                const projectDoc = await getDoc(projectDocRef); // Fetch the document
                if (projectDoc.exists()) {
                    setProject({
                        id: projectDoc.id, // Document ID
                        ...projectDoc.data(), // Document data
                    });
                } else {
                    console.log("No such project!");
                }
            } catch (error) {
                console.error("Error fetching project: ", error);
            }
        };

        if (projectId) {
            fetchProject(); // Fetch project only if projectId is provided
        }
    }, [projectId]);
    return (
        <div>
            <div className="flex justify-center items-center  bg-img-grad bg-custom-grad h-[300px] md:h-screen w-full">
                {project?.videoUrl && (
                    <div className=" h-[90%] md:h-[80%] w-[95%] mx-auto">
                        <iframe
                            className="w-full h-full"
                            // src={` https://www.youtube.com/embed/SRq6xzROJxs?autoplay=1&mute=1&controls=1/rel=0`}

                            src={`${project?.videoUrl}?autoplay=1&mute=1&controls=1&rel=0`}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                        ></iframe>
                    </div>
                )}
            </div>

            <div className="py-10">
                <Wrapper classname={"w-[90%] "}>
                    <div>
                        {/* <h1 className="text-xl md:text-3xl font-bold">
                            About Project
                        </h1> */}
                        <h2 className=" text-xl md:text-3xl font-bold">
                            Project : {project?.name}
                        </h2>

                        <p className="w-full md:w-3/4  md:text-justify">
                            {project?.description}
                        </p>

                        <div>
                            <SingleProject
                                gameTech={project?.tech}
                                gameMechanic={project?.mechanics}
                                objective={project?.objective}
                                projectId={projectId}
                            />
                        </div>
                    </div>
                    {/* 
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
                    </div> */}

                    <div className="h-1 rounded-2xl my-20 bg-secondary"></div>

                    {/* imaegs  */}
                    <div className=" flex  flex-col md:flex-row justify-between gap-5  ">
                        {project?.images?.map((image, index) => (
                            <div
                                className="relative h-[450px] w-full  md:w-1/5   bg-custom-grad bg-img-grad"
                                key={index}
                            >
                                <Image
                                    src={image}
                                    alt="posters "
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                        {/* <div className="relative h-[450px] w-full  md:w-1/5   bg-custom-grad bg-img-grad">
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
                        </div> */}
                    </div>

                    <div className="my-20 ">
                        <h1 className="text-3xl text-center py-10 font-bold">
                            Other Projects
                        </h1>
                        <CardSlider />
                    </div>
                    <Contact />
                </Wrapper>
            </div>
        </div>
    );
};

export default ProjectPage;

function SingleProject({ gameTech, gameMechanic, objective }) {
    return (
        <div>
            <h3 className="font-bold text-xl">Game Mechanics:</h3>
            <ul className="list-disc ml-8">
                {gameMechanic?.map((mech) => (
                    <li className="" key={mech}>
                        {mech || "Sdadasdsa"}
                    </li>
                ))}
            </ul>
            <div>
                <p className="w-full md:w-3/4  md:text-justify my-2">
                    <span className="font-bold text-xl">Objective {"  "}</span>
                    {objective}
                </p>
            </div>

            <h3 className="font-bold text-xl ">Technical Details:</h3>
            <ul className="list-disc ml-8">
                {gameTech?.map((tech) => (
                    <li className="" key={tech}>
                        {tech || "Sdadasdsa"}
                    </li>
                ))}
            </ul>
        </div>
    );
}
