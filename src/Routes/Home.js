import React from "react";
import { Link } from "react-router-dom";
import Base from "../Core/Base";

function Home() {
  const leftComp = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-light">Admin Navigation</h4>
        <ul className="list-group text-left">
          <li className="list-group-item">
            <Link to="/admin/places" className="nav-link text-info">
              View all Places
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/users" className="nav-link text-info">
              View all Users
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const rightComp = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header">Admin Information</h4>
        <ul className="list-group text-left">
          <li className="list-group-item">
            <span className="badge badge-success mr-2 px-2">Name:</span>{" "}
            Swapnadeep Mohapatra
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2 px-2">Email:</span>{" "}
            aa@bb.com
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Base
      title="Admin Dashboard"
      description="Mange all users here!"
      className="container bg-info p-4"
    >
      <div className="row">
        <div className="col-3">{leftComp()}</div>
        <div className="col-9">{rightComp()}</div>
      </div>
    </Base>
  );
}

export default Home;
