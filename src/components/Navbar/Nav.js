import { React, useState } from "react";
import HelpIocn from "../../images/IconHelp.svg";
import ContactIcon from "../../images/IconContact.svg";
import DropdownBtn from "../../images/DropdownIcon.svg";
import "./nav.css";

const Navbar = () => {
  const options = [
    { value: "option1", label: "Hous" },
    { value: "option2", label: "Nachrüstung" },
    { value: "option3", label: "Bezugsfertig" },
    { value: "option3", label: "6 Räume " },
  ];

  const [isOpen, setIsOpen] = useState(false);

  // const handleOptionClick = (option) => {
  //   setSelectedOption(option);
  //   setIsOpen(false);
  // };

  return (
    <>
      <div className="nav">
        <div className="nav-main">
          <div className="nav-inner">
            <img src={HelpIocn} alt="helpIcon" />
            <p>Need Help?</p>
          </div>
          <div className="nav-inner2">
            <img src={ContactIcon} alt="contact-icon" />
            <div>
              <p>
                Contact Us <br />
                0800 9116 398
              </p>
            </div>
          </div>
          {/* <div className="dropdown-container">
            <button
              className=""
              onClick={() => setIsOpen(!isOpen)}
            >
              <img src={DropdownBtn} alt="dropdown button" />
            </button>
            {isOpen && (
              <div className="dropdown-list-container">
                <ul className="dropdown-list">
                  {options.map((option) => (
                    <li
                      key={option.value}
                      className='dropdown-item' 
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div> */}
          <button>
            <img src={DropdownBtn} alt="drop" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
