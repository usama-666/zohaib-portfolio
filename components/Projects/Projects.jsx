import React from "react";
import Wrapper from "../wrapper/Wrapper";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const projectDetails = [
        {
            title: "Project 1",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel placerat nisi, a pharetra dolor. Nulla facilisi. Nullam non justo vel odio volutpat lobortis.",
            link: "https://example.com",
        },
        {
            title: "Project 1",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel placerat nisi, a pharetra dolor. Nulla facilisi. Nullam non justo vel odio volutpat lobortis.",
            link: "https://example.com",
        },
        {
            title: "Project 1",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel placerat nisi, a pharetra dolor. Nulla facilisi. Nullam non justo vel odio volutpat lobortis.",
            link: "https://example.com",
        },
        {
            title: "Project 1",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel placerat nisi, a pharetra dolor. Nulla facilisi. Nullam non justo vel odio volutpat lobortis.",
            link: "https://example.com",
        },
    ];
    return (
        <div className="bg-gray-200 py-20">
            <Wrapper>
                <div className="">
                    <h1 className="text-[42px]">My Projects</h1>
                    <p className="text-[20px]">
                        I believe projects are the best way to learn. These are
                        some projects I built.
                    </p>
                </div>

                <div className="flex gap-10 border-2 ">
                    {projectDetails.map((card, index) => (
                        <ProjectCard card={card} key={index} />
                    ))}
                </div>
            </Wrapper>
        </div>
    );
};

export default Projects;
