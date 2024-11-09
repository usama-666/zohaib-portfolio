"use client";
// AddProject.js
import React, { useEffect, useState } from "react";

import AddProjectForm from "@/components/AddProjectForm";

const AddProject = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
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

    // Check if logged in on component mount
    useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLoggedIn");
        if (loggedInStatus === "true") {
            setIsLoggedIn(true);
        }
    }, [isLoggedIn]);
    if (isLoggedIn) {
        return (
            <AddProjectForm
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                error={error}
                setError={setError}
                success={success}
                setSuccess={setSuccess}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
            />
        );
    }
    return (
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
