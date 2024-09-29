"use client";
import Button from "@/utils/Button";
import React from "react";

const ProjectCard = ({ card }) => {
    return (
        <div className="  w-full mx-auto  rounded-lg bg-custom-grad  bg-img-grad glass-border">
            <div className="flex flex-col justify-between gap-20 w-full rounded-lg  p-5">
                <div>
                    <div className="grid grid-cols-3 gap-10">
                        <div className="col-span-1">image-1</div>
                        <div className="col-span-1">image-1</div>
                        <div className="col-span-1">image-1</div>
                        <div className="col-span-3">Video Here</div>
                    </div>
                    <div className="mt-4 flex flex-col gap-4">
                        <h2 className=" text-lg md:text-xl">{card.title}</h2>
                        <p className="text-sm">{card.description}</p>
                    </div>
                </div>
                <div className="flex justify-end ">
                    <button className="border-[3px] hover:bg-[#7EFFD980] hover:border-[3px] hover:border-[#7EFFD980] border-[#7EFFD980] px-10 py-2 rounded-md">
                        Visit now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
