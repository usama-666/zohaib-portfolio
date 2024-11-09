import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "@/lib/firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const AddProjectForm = ({
    isLoading,
    setIsLoading,
    success,
    setSuccess,
    error,
    setError,
    setIsLoggedIn,
}) => {
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [subDescription, setSubDescription] = useState(""); // Added for sub description
    const [projectVideo, setProjectVideo] = useState(""); // State for project video
    const [projectImages, setProjectImages] = useState([]); // State for multiple images
    const [mechanics, setMechanics] = useState([""]); // Initialize with one empty entry
    const [tech, setTech] = useState([""]); // Initialize with one empty entry

    const router = useRouter();

    const handleAddMechanic = () => setMechanics([...mechanics, ""]);
    const handleMechanicChange = (index, value) => {
        const updatedMechanics = [...mechanics];
        updatedMechanics[index] = value;
        setMechanics(updatedMechanics);
    };
    const handleAddTech = () => setTech([...tech, ""]);
    const handleTechChange = (index, value) => {
        const updatedTech = [...tech];
        updatedTech[index] = value;
        setTech(updatedTech);
    };
    const handleImageChange = (e) => {
        // Convert the FileList to an array and set it to state
        const files = Array.from(e.target.files);
        setProjectImages(files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault(e.target);
        console.log(e);
        try {
            setIsLoading(true);
            // Initialize Firebase Storage
            // Initialize an array to hold the image URLs
            let imagesUrls = [];

            if (projectImages && projectImages.length > 0) {
                // Check if multiple images are selected
                console.log(projectImages, "images exist");

                // Loop through each image
                for (let i = 0; i < projectImages.length; i++) {
                    const image = projectImages[i];

                    const imageRef = ref(
                        storage,
                        `zohaib-projects-images/${Date.now()}_${image.name}`
                    );

                    try {
                        // Upload the image to Firebase Storage
                        await uploadBytes(imageRef, image);
                        const imageUrl = await getDownloadURL(imageRef); // Get the URL after upload
                        console.log(
                            "Image uploaded successfully. URL:",
                            imageUrl
                        );

                        // Push the image URL to the imagesUrls array
                        imagesUrls.push(imageUrl);
                    } catch (error) {
                        console.error("Error uploading image: ", error);
                        setError("Error uploading image: " + error.message); // Handle error
                        setIsLoading(false);
                        return; // Exit early if an error occurs
                    }
                }
            }

            // // Check if a video was uploaded
            // let videoUrl = "";
            // if (projectVideo) {
            //     console.log(projectVideo, "video exists");

            //     const videoRef = ref(
            //         storage,
            //         `zohaib-projects-videos/${Date.now()}_${projectVideo.name}`
            //     );
            //     await uploadBytes(videoRef, projectVideo);
            //     videoUrl = await getDownloadURL(videoRef); // Get the URL of the uploaded video
            // }
            // Prepare project data
            const projectData = {
                name: projectName,
                description: projectDescription,
                objective: subDescription,
                mechanics: mechanics, // Store mechanics as an  array
                videoUrl: projectVideo, // Store video name or path
                // images: images.map((file) => file.name), // Store image names
                images: imagesUrls,
                tech: tech,
            };

            console.log(projectData);

            // Add document to Firestore
            const docRef = await addDoc(
                collection(db, "projects"),
                projectData
            );
            setSuccess(`Project added with ID: ${docRef.id}`);
            setError(null); // Clear any previous error

            // Reset form fields
            setProjectName("");
            setProjectDescription("");
            setSubDescription("");
            setProjectVideo("");
            setProjectImages([]);
            setMechanics([]);
            setIsLoading(false); // Clear loading state
            setError(null); // Clear
        } catch (err) {
            setError("Error adding project: " + err.message);
            setSuccess(null); // Clear any previous success message
            setIsLoading(false); // Clear loading state
        }
    };

    const handleLogout = () => {
        console.log("logged out");
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
        router.push("/create-project");
    };
    return (
        <div className="w-full bg-img-grad bg-custom-grad py-20 ">
            <div className="mx-auto w-[80%] md:w-1/2 flex  justify-between mb-10">
                <h1 className="text-3xl font-bold text-center">Add Project</h1>

                <button
                    className=" px-5 md:px-10 py-1 md:py-3 bg-white text-fuchsia-600 rounded-md"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
            <form
                onSubmit={handleSubmit}
                className="border-2 w-[80%]  md:w-1/2 mx-auto p-10 flex flex-col gap-2 backdrop-blur-3xl rounded-md"
            >
                <div className="flex flex-col gap-3 my-2">
                    <label className="text-white text-lg">Project Name:</label>
                    <input
                        className="py-3 rounded-md pl-3 outline-none bg-transparent border border-slate-200"
                        type="text"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col gap-3 my-2">
                    <label className="text-white text-lg">
                        Project Description:
                    </label>
                    <input
                        className="py-3 rounded-md pl-3 outline-none bg-transparent border border-slate-200"
                        type="text"
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col gap-3 my-2">
                    <label className="text-white text-lg">Objective:</label>
                    <input
                        className="py-3 rounded-md pl-3 outline-none bg-transparent border border-slate-200"
                        type="text"
                        value={subDescription}
                        onChange={(e) => setSubDescription(e.target.value)}
                        required
                    />
                </div>

                {/* Mechanics - Array Input */}
                <div className="flex flex-col gap-3 my-2">
                    <label className="text-white text-lg">
                        Game Mechanics:
                    </label>
                    {mechanics.map((mechanic, index) => (
                        <div key={index} className="flex gap-2">
                            <input
                                className="py-3 rounded-md pl-3 outline-none bg-transparent border border-slate-200 w-full"
                                type="text"
                                value={mechanic}
                                onChange={(e) =>
                                    handleMechanicChange(index, e.target.value)
                                }
                            />
                            {index === mechanics.length - 1 && (
                                <button
                                    type="button"
                                    onClick={handleAddMechanic}
                                    className="px-4 bg-green-500 text-white rounded"
                                >
                                    +
                                </button>
                            )}
                        </div>
                    ))}
                </div>
                {/* tech - Array Input */}
                <div className="flex flex-col gap-3 my-2">
                    <label className="text-white text-lg">
                        Technical details:
                    </label>
                    {tech.map((tech, index) => (
                        <div key={index} className="flex gap-2">
                            <input
                                className="py-3 rounded-md pl-3 outline-none bg-transparent border border-slate-200 w-full"
                                type="text"
                                value={tech}
                                onChange={(e) =>
                                    handleTechChange(index, e.target.value)
                                }
                            />
                            {index === mechanics.length - 1 && (
                                <button
                                    type="button"
                                    onClick={handleAddTech}
                                    className="px-4 bg-green-500 text-white rounded"
                                >
                                    +
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex w-full flex-wrap justify-between items-center gap-3">
                    <div className="flex flex-col gap-3 my-2">
                        <label className="text-white text-lg">
                            Project Video:
                        </label>
                        <input
                            className="w-full py-3 rounded-md pl-3 outline-none bg-transparent border border-slate-200"
                            type="text"
                            onChange={(e) => setProjectVideo(e.target.value)} // Store the first video file
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-3 my-2 ">
                        <label className="text-white text-lg">
                            Project Images:
                        </label>
                        <input
                            className="w-full py-3 rounded-md pl-3 outline-none bg-transparent border border-slate-200"
                            type="file"
                            accept="image/*"
                            multiple // Allow multiple file selection
                            onChange={handleImageChange} // Update state with selected images
                            required
                        />
                    </div>
                </div>
                <div className="flex my-2 justify-end">
                    <button
                        type="submit"
                        className="py-2 px-10 md:px-20 border bg-white text-black rounded-md"
                    >
                        {isLoading ? "Uploading ..." : " Add Project"}
                    </button>
                </div>
            </form>
            <div className=" w-[80%]  md:w-1/2 mx-auto p-10 flex flex-col gap-2 backdrop-blur-3xl rounded-md">
                {success && <p style={{ color: "green" }}>{success}</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
        </div>
    );
};

export default AddProjectForm;
