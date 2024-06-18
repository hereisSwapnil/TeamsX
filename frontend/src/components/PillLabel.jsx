import React from "react";

const PillLabel = ({ text, color }) => {
  return (
    <span
      style={{ backgroundColor: color }}
      className={`px-3 py-1 text-sm text-white rounded-full w-fit my-2`}
    >
      {text}
    </span>
  );
};

export default PillLabel;
