import React from "react";
import PillLabel from "./PillLabel";
import { useNavigate } from "react-router-dom";

const EmployeeCard = ({
  profilePicture,
  name,
  position,
  teamName,
  email,
  id,
  isAssigned,
}) => {
  const navigate = useNavigate();
  return (
    <div key={id}>
      <div
        className="bg-white p-4 shadow-xl border rounded-lg cursor-pointer hover:shadow-2xl transition-all duration-300 ease-in-out"
        onClick={() => navigate("employee/" + id)}
      >
        <div className="flex justify-center flex-col">
          <div className="flex flex-row justify-between w-full align-middle items-center gap-10">
            <img
              src={profilePicture}
              alt="profile"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h2>{name}</h2>
              <p className="text-sm text-gray-600">{position}</p>
              {isAssigned ? (
                <PillLabel text="Assigned" color="#9d00ff" />
              ) : (
                <PillLabel text="Unassigned" color="#007a18" />
              )}
            </div>
          </div>
          <div>
            <p>
              <b>Team: </b>
              <span>{teamName}</span>
            </p>
            <p>
              <b>Email: </b>
              <span>{email}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
