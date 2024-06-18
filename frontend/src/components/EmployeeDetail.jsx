import React from "react";
import PillLabel from "./PillLabel";

const EmployeeDetail = ({
  name,
  position,
  team,
  isAssigned,
  email,
  description,
  profilePicture,
  type,
}) => {
  return (
    <div className="w-full flex justify-center mb-10">
      <div className="w-[80%] flex flex-col">
        <span></span>
        <h1 className="text-3xl font-bold mb-10">Employee Profile</h1>
        <div className="">
          <img src={profilePicture} alt="" className="w-32 h-32 rounded-full" />
          <div className="mt-10 flex flex-col gap-5">
            <h2 className="text-xl font-bold">{name}</h2>
            <p>
              <b>Position: </b>
              <span>{position}</span>
            </p>
            <p>
              <b>Employee Type: </b>
              <span>{type}</span>
            </p>
            <p className="">
              <b>Team: </b>
              <span>{team}</span>
            </p>
            <p className="flex flex-row items-center gap-3">
              <b>Work Status: </b>
              <span>
                {isAssigned ? (
                  <PillLabel text="Assigned" color="#9d00ff" />
                ) : (
                  <PillLabel text="Unassigned" color="#007a18" />
                )}
              </span>
            </p>
            <p>
              <b>Email: </b>
              <span>{email}</span>
            </p>
            <h2 className="text-2xl font-bold mb-3 mt-10">About him</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
