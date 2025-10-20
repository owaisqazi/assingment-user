import React from "react";

const ReviewComponent = ({ customClass, heading }) => {
  return (
    <>
      <div className={customClass} style={{ background: "#ff5a3c" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__section-title-2--- text-center">
                <h1 className="section-title">{heading}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={customClass}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__section-title-2--- text-center">
                <h3 className="section-title">
                  Recently Website Reviews
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ReviewComponent;
