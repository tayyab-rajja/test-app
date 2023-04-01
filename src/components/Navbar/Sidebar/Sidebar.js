import React, { useState } from "react";
import "./sidebar.css";
import Dropdown from "../../Dropdown/Dropdown";

const Sidebar = () => {
  const configname = ["Installationsort", "Bauvorhaben", "Bauphase", "Räume"];
  const prefrences = [
    "Heizkosten sparen",
    "Stromkosten sparen",
    "Wohnkomfort steigern",
    "Mehr Sicherheit",
    "Wertsteigerung der Immobilie",
    "Barrierefreiheit im Alter",
  ];

 
  const [checkedBoxes, setCheckedBoxes] = useState([]);

  const handleCheckboxChange = (id) => {
    if (checkedBoxes.includes(id)) {
      setCheckedBoxes(checkedBoxes.filter((box) => box !== id));
    } else {
      setCheckedBoxes([...checkedBoxes, id]);
    }
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-inner">
          <h1>Configuration for your Home</h1>
          <div className="dropdowns">
            {configname.map((heading) => (
              <>
                <p>{heading}</p>
                <Dropdown />
              </>
            ))}
          </div>
          <div>
            <h1>Intention</h1>
            <p>What are your preferences?</p>
            {prefrences.map((preference, index) => (
              <button
                key={index}
                className={`dropdown-buttons ${
                  checkedBoxes.includes(preference.id) ? "checked" : ""
                }`}
              >
                <span className="checkbox-container">
                  <input
                    type="checkbox"
                    id={`dropdown-checkbox-${index}`}
                    checked={checkedBoxes.includes(preference.id)}
                    onChange={() => handleCheckboxChange(preference.id)}
                  />
                  <label htmlFor={`dropdown-checkbox-${index}`}></label>
                </span>
                <span style={{ marginLeft: "10px" }}>{preference}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
