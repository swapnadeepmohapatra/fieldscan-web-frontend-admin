import React from "react";
import { Link, withRouter } from "react-router-dom";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return {
      color: "#ffffff",
    };
  } else {
    return {
      color: "#c1c1c1",
    };
  }
};

function NavBar({ history }) {
  return (
    <div>
      <ul className="nav nav-dark bg-dark text-white">
        <li className="nav-item">
          <Link to="/" style={currentTab(history, "/")} className="nav-link">
            Admin Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/login"
            style={currentTab(history, "/login")}
            className="nav-link"
          >
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(NavBar);
