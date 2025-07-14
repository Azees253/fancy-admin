import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_bejqz9QZgT5isnWTIRjf3ZsNzOn2G5QbqU3ns_ZlxVYatIE_CPsVHCr9-4ZvmbS4f4&usqp=CAU"
          alt=""
        />
        <div className="navbar-title">
          <h3>Admin</h3>
          <i className="fa-solid fa-circle-user "></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
