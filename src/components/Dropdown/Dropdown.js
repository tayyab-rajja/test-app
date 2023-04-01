import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dropdown.css";
import { Dropdown } from "react-bootstrap";
import Dropdownicon from "../../images/DropdownIcon.svg";

const CustomDropdown = () => {
  const options = [
    { value: "option1", label: "Hous" },
    { value: "option2", label: "Nachrüstung" },
    { value: "option3", label: "Bezugsfertig" },
    { value: "option3", label: "6 Räume " },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        <p>{selectedOption ? selectedOption.label : "Select"}</p>
        <img src={Dropdownicon} alt="dropdown button" />
      </button>
      {isOpen && (
        <div className="dropdown-list-container">
          <ul className="dropdown-list">
            {options.map((option) => (
              <li
                key={option.value}
                className={`dropdown-item ${
                  selectedOption && selectedOption.value === option.value
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
