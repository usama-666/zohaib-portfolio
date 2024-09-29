import React from "react";

const Wrapper = ({ classname, children }) => {
    return <div className={`${classname} mx-auto`}>{children}</div>;
};

export default Wrapper;
