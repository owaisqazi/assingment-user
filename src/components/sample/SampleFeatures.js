import React from "react";
import { Link } from "react-router-dom";
import sampleData from "./sampleData.jsx";
const SampleFeatures = ({ customClass = "", heading="", text="" }) => {

  return (
    <div className={customClass}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area text-center">
              <h1 className="section-title">{heading}</h1>
              <p className="section-text">{text}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center go-top">
          {sampleData?.map((item, index) => (
            <Link
              className="col-lg-4 col-md-4 col-sm-12 text-center"
              to={{
                pathname: `/sample-feature-detail/${encodeURIComponent(
                  item?.text.replace(/\s+/g, "-")
                )}`,
                state: { details: item?.details },
              }}
              key={index}
            >
              <div className="sampleletter-box">
                <h1 className="sampleletter">{item?.letter}</h1>
                <div className="samplehover-text">
                  <h2 style={{ color: "white" }}>
                    {item?.letter} <br />
                    <h5
                      style={{
                        color: "white",
                        textDecorationLine: "underline",
                        textDecorationColor: "white",
                        textDecorationThickness: "2px",
                        cursor: "pointer",
                      }}
                    >
                      {item?.text}
                    </h5>
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SampleFeatures;
