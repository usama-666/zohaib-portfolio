import Link from "next/link";
import React from "react";

const Button = ({ classname, type, btnText, to }) => {
    return (
        <button type={type} className={` rounded-md  ${classname}`}>
            {btnText}
            {/* <button type={type}>{btnText}</button> */}
        </button>
    );
};

export default Button;
