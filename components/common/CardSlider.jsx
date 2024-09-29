"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper";
import ProjectCard from "../Projects/ProjectCard";
// import { useRouter } from "next/router";

export default function CardSlider() {
    // const router = useRouter(); // This should work correctly now

    const projectDetails = [
        {
            title: "Project 1",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel placerat nisi, a pharetra dolor. Nulla facilisi. Nullam non justo vel odio volutpat lobortis.",
            link: "https://example.com",
        },
        {
            title: "Project 2",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel placerat nisi, a pharetra dolor. Nulla facilisi. Nullam non justo vel odio volutpat lobortis.",
            link: "https://example.com",
        },
        {
            title: "Project 3",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel placerat nisi, a pharetra dolor. Nulla facilisi. Nullam non justo vel odio volutpat lobortis.",
            link: "https://example.com",
        },

        {
            title: "Project 4",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel placerat nisi, a pharetra dolor. Nulla facilisi. Nullam non justo vel odio volutpat lobortis.",
            link: "https://example.com",
        },

        {
            title: "Project 5",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel placerat nisi, a pharetra dolor. Nulla facilisi. Nullam non justo vel odio volutpat lobortis.",
            link: "https://example.com",
        },

        {
            title: "Project 6",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel placerat nisi, a pharetra dolor. Nulla facilisi. Nullam non justo vel odio volutpat lobortis.",
            link: "https://example.com",
        },

        // Add more projects here...
    ];

    const handleNavigate = (index) => {
        // router.push(`/project/${index + 1}`); // Correct navigation
    };

    return (
        <Swiper
            slidesPerView={2} // Display multiple slides
            spaceBetween={20} // Space between slides
            loop={true} // Infinite loop
            breakpoints={{
                // When window width is >= 768px (md screens)
                768: {
                    slidesPerView: 3, // Show 3 slides on medium and larger screens
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
            {projectDetails.map((card, index) => (
                <SwiperSlide key={index}>
                    <ProjectCard
                        card={card}
                        onClick={() => handleNavigate(index)}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
