import React from "react";
import NavBar from "./NavBar";

const Base = ({
  title = "My Title",
  description = "My Description",
  className = "bg-light text-black p-4",
  children,
}) => {
  return (
    <div>
      <NavBar />
      <div
        className="container-fluid  text-center"
        style={{ marginBottom: 200 }}
      >
        {/* <div className="jumbotron text-black bg-light text-center"> */}
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
        {/* </div> */}
        <div className={className}>{children}</div>
      </div>
    </div>
  );
};

export default Base;
