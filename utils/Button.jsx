import Link from "next/link";
import React from "react";

const Button = ({ classname, type, btnText, to, children }) => {
    return (
        <button
            type={type}
            className={` font-bold bg-custom-grad  bg-img-grad rounded-md  ${classname}`}
        >
            {children}
            {/* <button type={type}>{btnText}</button> */}
        </button>
    );
};

export default Button;
