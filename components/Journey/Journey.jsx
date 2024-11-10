import React from "react";

const Journey = () => {
    const experience = [
        {
            index: 0,
            name: "Freelancing",
            year: "2022",
            desc: "Worked with Upwork and direct clients on UI/UX and level design.",
        },
        {
            index: 1,
            name: "PUGSDE Solutions",
            year: "2023",
            desc: "Intern Game Developer focused on code optimization, 3D character controls.",
        },
        {
            index: 2,
            name: "PUGSDE Solutions",
            year: "2024",
            desc: "Junior Game Developer specializing in C#, Unity NavMesh, and DoTween animation.",
        },
    ];

    return (
        <div className="" id="about-me">
            <h1 className="h1 text-xl font-bold md:text-3xl text-center my-10">
                My Professional Journey
            </h1>

            {/* //experience section desktop */}

            <div className="hidden  relative  md:flex items-center  w-full mx-auto gap-10">
                {/* Line connecting the circles */}
                <div className="absolute top-30 h-[5px] w-full bg-secondary transform  z-0"></div>

                {experience.map((exp, index) => (
                    <div className="w-2/3 relative    z-10 " key={index}>
                        {index % 2 === 0 ? (
                            <div className=" grid grid-cols-1 h-[300px] place-items-center  mx-auto">
                                <div className="h-[100px] w-[150px] text-xl font-bold text-white  flex items-end justify-center">
                                    {exp.year}
                                </div>

                                <div className="h-[100px]  w-[100px] grid place-items-center ">
                                    <div className="w-20 h-20 bg-custom-grad bg-img-grad border-[3px] border-secondary rounded-full "></div>
                                </div>
                                <div className="h-[100px] w-[200px] ">
                                    <h1 className="capitalze text-lg font-bold text-center">
                                        {exp.name}
                                    </h1>
                                    <p className="text-sm text-center ">
                                        {exp.desc}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="w-[40%] h-[300px] flex flex-col gap-4  items-center  mx-auto">
                                <div className="h-[100px] w-[200px]  ">
                                    <h1 className="capitalze text-lg font-bold text-center">
                                        {exp.name}
                                    </h1>
                                    <p className="text-sm text-center">
                                        {exp.desc}
                                    </p>
                                </div>
                                <div className="h-[100px]  w-[100px] grid place-items-center ">
                                    <div className="w-20 h-20 bg-custom-grad bg-img-grad border-[3px] border-secondary rounded-full "></div>
                                </div>

                                <div className="h-[100px] w-[150px] text-xl font-bold text-white  flex  justify-center">
                                    {exp.year}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                {/* Lines  */}
                <div className="h-3 bg-secondary"></div>
            </div>

            {/* //experience mobile devices */}

            <div className=" flex flex-col  relative  md:hidden items-center  w-full mx-auto gap-20">
                {/* Line connecting the circles */}
                {/* <div className="absolute top-30 left-48 h-[5px] w-[68%] bg-secondary transform  z-0"></div> */}

                {/* Line connecting the circles */}
                {/* <div className="absolute top-60 -left-[160px] right-0 md:hidden  rotate-90 h-[4px] w-[80%] z-0 bg-secondary"></div> */}

                {/* {experience.map((exp, index) => ( */}
                <div className=" w-full relative  flex  justify-center items-center  gap-5 ">
                    <div className="relative  flex flex-col gap-10  z-40">
                        <div className="h-[100px]  w-[100px] grid place-items-center relative  ">
                            <div className="w-16 h-16 bg-custom-grad bg-img-grad border-[3px] border-secondary rounded-full "></div>
                        </div>
                        <div className="h-[100px]  w-[100px] grid place-items-center relative ">
                            <div className="w-16 h-16 bg-custom-grad bg-img-grad border-[3px] border-secondary rounded-full "></div>
                        </div>
                        <div className="h-[100px]  w-[100px] grid place-items-center relative ">
                            <div className="w-16 h-16 bg-custom-grad bg-img-grad border-[3px] border-secondary rounded-full "></div>
                        </div>

                        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 h-3/4 w-[4px] z-[-10] bg-secondary"></div>
                        {/* <div className="absolute top-10 left-12 right-0 md:hidden   border-2 h-[300px] w-[4px] z-0 border-secondary"></div> */}
                    </div>
                    {/* {experience.map((exp, index) => ( */}
                    <div className=" flex flex-col gap-10 w-2/3 ">
                        <div>
                            <div className=" text-xl font-bold text-white  ">
                                {experience[0].year}
                            </div>

                            <div className=" w-full ">
                                <h1 className="capitalze text-lg font-bold ">
                                    {experience[0].name}
                                </h1>
                                <p className="text-sm  w-3/4 ">
                                    {experience[0].desc}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className=" text-xl font-bold text-white  ">
                                {experience[1].year}
                            </div>

                            <div className=" w-full ">
                                <h1 className="capitalze text-lg font-bold ">
                                    {experience[1].name}
                                </h1>
                                <p className="text-sm  w-3/4 ">
                                    {experience[1].desc}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className=" text-xl font-bold text-white  ">
                                {experience[2].year}
                            </div>

                            <div className=" w-full ">
                                <h1 className="capitalze text-lg font-bold ">
                                    {experience[2].name}
                                </h1>
                                <p className="text-sm  w-3/4 ">
                                    {experience[2].desc}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ))} */}
                </div>
                {/* ))} */}
                {/* Lines  */}
                <div className=" h-1 md:h-3 bg-secondary mt-5"></div>
            </div>
        </div>
    );
};

export default Journey;
