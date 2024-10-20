import React from "react";

interface SwitchProps {
  activeOption: "Monthly" | "Annual";
  onToggle: (option: "Monthly" | "Annual") => void;
}

const Switch: React.FC<SwitchProps> = ({ activeOption, onToggle }) => {
  return (
    <div className="w-max bg-blue-200 flex rounded-md p-1">
      <div
        className={`cursor-pointer rounded-md px-4 py-2 ${
          activeOption === "Monthly" ? "bg-white" : ""
        }`}
        onClick={() => onToggle("Monthly")}
      >
        Monthly
      </div>
      <div
        className={`cursor-pointer rounded-md px-4 py-2 ${
          activeOption === "Annual" ? "bg-white" : ""
        }`}
        onClick={() => onToggle("Annual")}
      >
        Annual
      </div>
    </div>
  );
};

export default Switch;
