import React from "react";

const product_slider_v2 = ({dataReview,heading}) => {
  

//   let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <div className="ltn__search-by-place-area  pt-115 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center---">
              <h1 className="section-title">{heading}</h1>
            </div>
          </div>
        </div>
        <div className="row ltn__search-by-place-slider-1-active slick-arrow-1 go-top">
          {dataReview?.map((data, index) => {
            return (
              <div className="col-lg-4">
                <div
                  className="ltn__search-by-place-item"
                  style={{ height: "260px" }}
                >
                  <div className="search-by-place-info">
                    <h5 sty> {data.title} </h5>
                    <p>{data.discription}</p>
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

export default product_slider_v2;
