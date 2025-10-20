import React from "react";

const Reviewslider_v2 = ({ dataReview }) => {
  return (
    <div className="ltn__search-by-place-area pt-3">
      <div className="container">
        <div className="row ltn__search-by-place-slider-1-active slick-arrow-1 go-top">
          {dataReview?.map((data, index) => {
            return (
              <div className="col-lg-4" key={index}>
                <div className="ltn__search-by-place-item" style={{ height: "260px" }}>
                  <div className="search-by-place-info">
                    <h5>{data.title}</h5>
                    <p>{data.discription}</p>
                    {/* Star Rating */}
                    <p className="Reviewslider_v2stars Reviewslider_v2four-half"></p>
                    <p>{data.date}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviewslider_v2;
