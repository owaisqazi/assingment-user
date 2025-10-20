import React from "react";
import { Link } from "react-router-dom";
const Sample_Page_header = ({
  headertitle,
  subheader,
  customclass,
  img,
  smallText,
}) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let bgStyle = img 
  ? { 
      backgroundImage: `url(${publicUrl + img})`, 
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
    } 
  : { background: "#ff5a3c" }; // Default solid color agar image nahi hai


  return (
    <div
      className={`ltn__breadcrumb-area mb-0 ltn__breadcrumb-areaSample text-left ${
        img ? "" : "bg-image"
      } ${customclass}`}
       
      style={bgStyle}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12" style={{ marginTop: "100px" }}>
            <div className="ltn__breadcrumb-inner">
              <h1 className="page-title text-center" style={{ color: "white" }}>
                {headertitle}
              </h1>
              <h5 className="page-title text-center" style={{ color: "white" }}>
                {smallText}
              </h5>
              <div className="ltn__breadcrumb-list">
                <ul className="text-center">
                  <li>
                    <Link to="/" style={{ color: "white" }}>
                      <span style={{ color: "white" }}>
                        <i className="fas fa-home" />
                      </span>{" "}
                      Home
                    </Link>
                  </li>
                  <li style={{ color: "white" }}>{subheader}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample_Page_header;
