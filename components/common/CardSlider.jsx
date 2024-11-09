import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper";
import ProjectCard from "../Projects/ProjectCard";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "@/lib/firebase";

const CardSlider = () => {
    const [project, setProject] = useState([]);
    const db = getFirestore(app);

    useEffect(() => {
        // Function to get all documents from the Firestore collection
        const fetchProjects = async () => {
            try {
                const projectsCollection = collection(db, "projects"); // Replace 'projects' with your collection name
                const projectSnapshot = await getDocs(projectsCollection);
                const projectList = projectSnapshot.docs.map((doc) => ({
                    id: doc.id, // Get document ID
                    ...doc.data(), // Get document data
                }));
                setProject(projectList); // Set the fetched projects to state
            } catch (error) {
                console.error("Error fetching projects: ", error);
            }
        };

        fetchProjects(); // Fetch the projects when the component mounts
    }, [db]);

    // const projectDetails = [
    //     {
    //         title: "Clash of Titans",
    //         description:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel placerat nisi, a pharetra dolor. Nulla facilisi. Nullam non justo vel odio volutpat lobortis.",
    //         id: "Project-1",
    //     },
    //     {
    //         title: "Call of Duty Modern Warfare",
    //         description:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel placerat nisi, a pharetra dolor. Nulla facilisi. Nullam non justo vel odio volutpat lobortis.",
    //         id: "Project-2",
    //         images: [],
    //     },
    //     {
    //         title: "Project IGI 1",
    //         description:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel placerat nisi, a pharetra dolor. Nulla facilisi. Nullam non justo vel odio volutpat lobortis.",
    //         id: "Project-3",
    //         images: [],
    //     },

    //     {
    //         title: "Counter Strike 2",
    //         description:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel placerat nisi, a pharetra dolor. Nulla facilisi. Nullam non justo vel odio volutpat lobortis.",
    //         id: "Project-4",
    //         images: [],
    //     },

    //     {
    //         title: "Candy Crash  ",
    //         description:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel placerat nisi, a pharetra dolor. Nulla facilisi. Nullam non justo vel odio volutpat lobortis.",
    //         id: "Project-5",
    //         images: [],
    //     },

    //     // Add more projects here...
    // ];
    return (
        <div>
            {" "}
            <Swiper
                slidesPerView={1} // Display multiple slides
                spaceBetween={20} // Space between slides
                loop={true} // Infinite loop
                breakpoints={{
                    // When window width is >= 768px (md screens)
                    480: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3, // Show 3 slides on medium and larger screens
                    },
                    1200: {
                        slidesPerView: 4, // Show 4 slides on larger screens
                    },
                }}
                // freeMode={true} // Enable free mode for drag/swipe
                // autoplay={{
                //     delay: 2500, // Delay between slides (2.5 seconds)
                //     disableOnInteraction: false, // Continue autoplay after interaction
                // }}
                // modules={[Autoplay, FreeMode]} // Include required Swiper modules
                // className="mySwiper "
            >
                {project.map((card, index) => (
                    <SwiperSlide key={index}>
                        <ProjectCard
                            card={card}
                            onClick={() => handleNavigate(index)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CardSlider;
