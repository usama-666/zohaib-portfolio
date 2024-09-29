import Button from "@/utils/Button";
import React from "react";

const ProjectCard = ({ card }) => {
    return (
        <div>
            <div className="flex flex-col w-full rounded-lg border-2 my-10">
                <div className="grid grid-cols-3 gap-10 ">
                    <div className="col-span-1">image-1</div>
                    <div className="col-span-1">image-1</div>
                    <div className="col-span-1">image-1</div>
                    <div className="col-span-3">Video Here</div>
                </div>
                <div className="mt-4 flex flex-col gap-4">
                    <h2>{card.title}</h2>
                    <p className="text-md">{card.description}</p>
                </div>

                <div className=" flex justify-end p-3">
                    <button
                        className={`bg-yellow-300  px-10 py-2 rounded-md  `}
                    >
                        {"Visit now"}
                        {/* <button type={type}>{btnText}</button> */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
