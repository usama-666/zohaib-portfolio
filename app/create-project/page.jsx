"use client";
// AddProject.js
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "@/lib/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const AddProject = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [subDescription, setSubDescription] = useState(""); // Added for sub description
    const [projectVideo, setProjectVideo] = useState(null); // State for project video
    const [projectImages, setProjectImages] = useState([]); // State for multiple images
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Login with email/password
            if (
                email === "MZohaibButt045@gmail.com" &&
                password === "Butt045"
            ) {
                setIsLoggedIn(true);
                localStorage.setItem("isLoggedIn", "true");

                console.log("loggin u ");
                setError(null); // Clear
            } else {
                setError("Invalid email or password");
                setEmail("");
                setPassword("");
            }
        } catch (error) {
            setError("Failed to login: " + error.message);
        } finally {
            setIsLoading(false);
            // setError(null); // Clear
            setEmail("");
            setPassword("");
        }
    };

    const handleLogout = () => {
        console.log("logged out");
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    const handleImageChange = (e) => {
        // Convert the FileList to an array and set it to state
        const files = Array.from(e.target.files);
        setProjectImages(files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            // Initialize Firebase Storage
            // const storage = getStorage();

            // Check if an image was uploaded
            let images = [];
            if (projectImages.length > 0) {
                console.log(projectImages, "image exists");
                const imageRef = ref(
                    storage,
                    `zohaib-projects-images/${Date.now()}_${projectImages.name}`
                );
                await uploadBytes(imageRef, newsImage);
                imageUrl = await getDownloadURL(imageRef); // Get the URL of the uploaded image
                images.push(imageUrl);
            }

            // Check if a video was uploaded
            let videoUrl = "";
            if (projectVideo) {
                console.log(projectVideo, "video exists");
                const videoRef = ref(
                    storage,
                    `zohaib-projects-videos/${Date.now()}_${projectVideo.name}`
                );
                await uploadBytes(videoRef, newsVideo);
                videoUrl = await getDownloadURL(videoRef); // Get the URL of the uploaded video
            }
            // Prepare project data
            const projectData = {
                name: projectName,
                description: projectDescription,
                subDescription: subDescription,
                videoUrl: videoUrl, // Store video name or path
                images: images.map((file) => file.name), // Store image names
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
            setProjectVideo(null);
            setProjectImages([]);
            setIsLoading(false); // Clear loading state
            setError(null); // Clear
        } catch (err) {
            setError("Error adding project: " + err.message);
            setSuccess(null); // Clear any previous success message
            setIsLoading(false); // Clear loading state
        }
    };

    return isLoggedIn ? (
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
                    <label className="text-white text-lg">
                        Sub Description:
                    </label>
                    <input
                        className="py-3 rounded-md pl-3 outline-none bg-transparent border border-slate-200"
                        type="text"
                        value={subDescription}
                        onChange={(e) => setSubDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="flex w-full flex-wrap justify-between items-center gap-3">
                    <div className="flex flex-col gap-3 my-2">
                        <label className="text-white text-lg">
                            Project Video:
                        </label>
                        <input
                            className="w-full py-3 rounded-md pl-3 outline-none bg-transparent border border-slate-200"
                            type="file"
                            accept="video/*"
                            onChange={(e) => setProjectVideo(e.target.files[0])} // Store the first video file
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
    ) : (
        <div className="w-full bg-img-grad bg-custom-grad py-20 ">
            <h1 className="text-3xl font-bold text-center p-10">
                Admin Login{" "}
            </h1>
            <form
                onSubmit={handleLogin}
                className="border-2 w-[80%]  md:w-1/2 mx-auto p-10 flex flex-col gap-2 backdrop-blur-3xl rounded-md"
            >
                <div className="flex flex-col gap-3 my-2">
                    <label className="text-white text-lg">Email:</label>
                    <input
                        className="py-3 rounded-md pl-3 outline-none bg-transparent border border-slate-200"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col gap-3 my-2">
                    <label className="text-white text-lg">Password:</label>
                    <input
                        className="py-3 rounded-md pl-3 outline-none bg-transparent border border-slate-200"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="flex my-2 justify-end">
                    <button
                        type="submit"
                        className="py-2 px-20 border bg-white text-black rounded-md"
                    >
                        {isLoading ? "Logging ..." : " Login Now"}
                    </button>
                </div>
            </form>
            <div className=" w-[80%]  md:w-1/2 mx-auto pl-4 flex flex-col gap-2 backdrop-blur-3xl rounded-md">
                {success && <p style={{ color: "green" }}>{success}</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
        </div>
    );
};

export default AddProject;
