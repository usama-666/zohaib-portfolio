"use client";
import React from "react";
import Wrapper from "../wrapper/Wrapper";
import ProjectCard from "./ProjectCard";
import CardSlider from "../common/CardSlider";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

const Projects = () => {
    return (
        <div className=" py-20">
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

                <div>
                    <CardSlider />
                </div>
            </Wrapper>
        </div>
    );
};

export default Projects;
