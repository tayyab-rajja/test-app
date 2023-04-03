import React, { useState } from "react";
import "./sidebar.css";
import Dropdown from "../Dropdown/Dropdown";
import Funktionin from "../Funktionin/Funktionin";
import Kopie from "../../images/7-Kopie.png";

const Sidebar = () => {
  const configname = ["Installationsort", "Bauvorhaben", "Bauphase", "Räume"];
  const prefrences = [
    { id: "preference1", name: "Heizkosten sparen" },
    { id: "preference2", name: "Stromkosten sparen" },
    { id: "preference3", name: "Wohnkomfort steigern" },
    { id: "preference4", name: "Mehr Sicherheit" },
    { id: "preference5", name: "Wertsteigerung der Immobilie" },
    { id: "preference6", name: "Barrierefreiheit im Alter" },
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
      <div className="main">
        <img className="sidebar-img" src={Kopie} />
        <div className="sidebar">
        <div className="sidebar-inner">
          <div>
            <h1>Configuration for your Home</h1>
            <div className="dropdowns">
              {configname.map((heading) => (
                <>
                  <p>{heading}</p>
                  <Dropdown />
                </>
              ))}
            </div>
            <div style={{marginTop:'100px'}}>
              <h1>Intention</h1>
              <p>What are your preferences?</p>
              {prefrences.map((preference, index) => (
                <button
                  key={index}
                  className={`dropdown-buttons ${
                    checkedBoxes.includes(preference.id) ? "checked" : ""
                  }`}
                  style={{
                    borderColor: checkedBoxes.includes(preference.id)
                      ? "rgba(1, 233, 148, 1)"
                      : "",
                  }}
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
                  <span style={{ marginLeft: "10px" }}>{preference.name}</span>
                </button>
              ))}
              <div className="cua-main">
                <span className="cua">Details zur Intention</span>
              </div>
            </div>
          </div>
          <Funktionin />
        </div>
      </div>
      </div>
      
    </>
  );
};

export default Sidebar;
