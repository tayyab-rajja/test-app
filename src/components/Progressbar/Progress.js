import React from "react";
import "./progress.css";
import bulb from "../../images/bulb.png";
import Ellipse from "../../images/Ellipse.png";

const Progress = () => {
  return (
    <>
      <div style={{display:'flex'}}>
        <div className="prog-main">
          <span className="prog-head">Ihre Ausstattung im Vergleich</span>
          <span className="prog-sub">Mehr Info</span>
        </div>
        {/* <div className="prog-img">
          <img src={bulb} />
        </div> */}
        <div className="prog-main">
          <p className="prog-head">Ihre Ersparnis</p>
          <p className="prog-sub">Mehr Info</p>
        </div>
      </div>
    </>
  );
};

export default Progress;
