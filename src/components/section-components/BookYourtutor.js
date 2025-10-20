import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const BookYourtutor = ({ heading, text }) => {
  return (
    <div className="container-fluid px-3 py-5" style={{ backgroundColor: '#eef6ff' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-7 d-flex flex-column justify-content-center">
            <h1>{heading}</h1>
            <p className="my-2">
              {text}
            </p>
            <div className="row mt-3">
              <button className="col-4 btn theme-btn-1 ">
                <Link to={'/contact'}>Order Now</Link>
              </button>
            </div>
          </div>
          <div className="col-md-5">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/slider/bookyour.png"}
              alt="img"
              className="usam_hw blogs2_usam_hBookYourtutor"
              loading="lazy"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookYourtutor;
