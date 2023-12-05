import React from "react";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="div">
        <div className="group">
          <div className="overlap-group">
            <div className="rectangle" />
            <img
              className="image-removebg"
              alt="Image removebg"
              src="https://cdn.animaapp.com/projects/652564aff5e2dfb750c87398/releases/656e1185ac232fff7e300a26/img/image-removebg-preview--27--1.png"
            />
          </div>
        </div>
        <img
          className="logo-updated"
          alt="Logo updated"
          src="https://cdn.animaapp.com/projects/652564aff5e2dfb750c87398/releases/656e1185ac232fff7e300a26/img/logo-updated-1.png"
        />
        <div className="text-wrapper">Log In</div>
        <div className="text-wrapper-2">CNIC</div>
        <div className="text-wrapper-3">Phone</div>
        <div className="text-wrapper-4">Password</div>
        <div className="overlap">
          <div className="text-wrapper-5">Enter your CNIC</div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-5">Enter your Phone No</div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-5">Enter your password</div>
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-6">Log In</div>
        </div>
      </div>
    </div>
  );
};
