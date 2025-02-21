"use client";
import React from "react";
import Wrapper from "../wrapper/Wrapper";
import ProjectCard from "./ProjectCard";
import CardSlider from "../common/CardSlider";

// import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

const Projects = () => {
    return (
        <div className=" py-20" id="projects">
            <Wrapper classname={"w-[90%]"}>
                {/* <div className=" space-y-2">
                    <h1 className="text-xl md:text-3xl font-bold">
                        My Projects
                    </h1>
                    <p className="text-med md:text-lg ">
                        I believe projects are the best way to learn. These are
                        some projects I built.
                    </p>
                </div> */}

                <div className="space-y-5 ">
                    <h1 className=" text-xl text-center font-bold md:text-3xl pb-10">
                        My Projects
                    </h1>

                    <CardSlider />
                </div>
            </Wrapper>
        </div>
    );
};

export default Projects;
