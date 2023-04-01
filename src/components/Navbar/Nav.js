import React from "react";
import { useState } from "react";
import HelpIocn from "../../images/IconHelp.svg";
import ContactIcon from "../../images/IconContact.svg";
import DropdownBtn from "../../images/DropdownIcon.svg";
import "./nav.css";

const Navbar = () => {
//   const [open,setOpen] = useState(false);
//   const handleOpen = () => {
//     setOpen(!open);
//   };
  return (
    <>
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
        <button src={DropdownBtn}>D</button>
        {/* {open ? <div>Is Open</div> : <div>Is Closed</div>} */}
      </div>
    </>
  );
};

export default Navbar;
