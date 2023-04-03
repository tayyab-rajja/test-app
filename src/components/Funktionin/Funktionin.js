import React, { useState } from "react";
import "./fucktionin.css";

const Funktionin = () => {
  const checknames = [
    { id: "1", name: "Heizung" },
    { id: "2", name: "Beschattung" },
    { id: "3", name: "Beleuchtung" },
    { id: "4", name: "Energie" },
    { id: "5", name: "Steckdosen" },
    { id: "6", name: "Kameras" },
    { id: "7", name: "Alarmsystem" },
    { id: "8", name: "Rauchmelder" },
    { id: "9", name: "Türstation" },
    { id: "10", name: "Zugang" },
    { id: "11", name: "Sound" },
    { id: "12", name: "Garten" },
    { id: "13", name: "Lüftung" },
    { id: "14", name: "Sonstiges" },
  ];

  const [checkedBoxes, setCheckedBoxes] = useState([]);

  const handleCheckboxChange = (id) => {
    if (checkedBoxes.includes(id)) {
      setCheckedBoxes(checkedBoxes.filter((boxId) => boxId !== id));
    } else {
      setCheckedBoxes([...checkedBoxes, id]);
    }
  };

  return (
    <>
      <div className="funktionin">
        <h1>Funktionen</h1>
        {checknames.map((checkname, index) => (
          <button
            key={index}
            className={`dropdown-buttonss ${
              checkedBoxes.includes(checkname.id) ? "checked" : ""
            }`}
            style={{
              borderColor: checkedBoxes.includes(checkname.id)
                ? "rgba(1, 233, 148, 1)"
                : "",
            }}
          >
            <span className="checkboxx-container">
              <input
                type="checkbox"
                id={`dropdown-checkboxx-${index}`}
                checked={checkedBoxes.includes(checkname.id)}
                onChange={() => handleCheckboxChange(checkname.id)}
              />
              <label htmlFor={`dropdown-checkboxx-${index}`}></label>
            </span>
            <span style={{ marginLeft: "10px" }}>{checkname.name}</span>
            <span>+ 1.232,00€</span>
          </button>
        ))}
        <div className="cua-main">
          <span className="cua">Funktionen vergleichen</span>
        </div>
      </div>
    </>
  );
};

export default Funktionin;
