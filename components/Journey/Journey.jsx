import React from "react";

const Journey = () => {
    const experience = [
        {
            index: 0,
            name: "experience",
            year: "2015",
            desc: "  Lorem ipsum dolor sit am rem, consectetur adipiscing    ",
        },
        {
            index: 1,
            name: "experienc e",
            year: "2015",
            desc: "  Lorem ipsum dolor sit am rem, consectetur adipiscing    ",
        },
        {
            index: 2,
            name: "experience",
            year: "2015",
            desc: "  Lorem ipsum dolor sit am rem, consectetur adipiscing    ",
        },
    ];

    return (
        <div className="">
            <h1 className="h1 text-xl font-bold md:text-3xl text-center my-10">
                My Professional Journey
            </h1>

            {/* //experience section */}

            <div className="relative  flex items-center  w-[95%] mx-auto gap-10">
                {/* Line connecting the circles */}
                <div className="absolute top-30 left-48 h-[5px] w-[68%] bg-secondary transform  z-0"></div>

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
                                <div className="h-[100px]  w-[100px] ">
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
        </div>
    );
};

export default Journey;
