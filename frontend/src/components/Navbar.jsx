import React from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-20 shadow-xl flex flex-row align-middle items-center md:px-20 px-10">
      <h1
        className="font-anton cursor-pointer text-4xl"
        onClick={() => {
          navigate("/");
        }}
      >
        TeamX
      </h1>
    </div>
  );
};

export default Navbar;
