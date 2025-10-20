import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Other = ({ heading, text }) => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };
  return (
    <div className="container ltn__feature-area  pt-120 pb-90 mb-120---">
      <div className="ltn__faq-inner ltn__faq-inner-2 ltn__faq-inner-3 my-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <h1 className="section-title">
                {heading}
              </h1>
              <p className="sextion-text">
                {text}
              </p>
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-lg-6">
            <div id="accordion_2">
              {/* card 1 */}
              <div className="card">
                <h6
                  className={`ltn__card-title ${openItem === 1 ? "" : "collapsed"}`}
                  onClick={() => toggleItem(1)}
                  style={{ cursor: "pointer" }}
                >
                  <i className="flaticon-mortarboard" /> Brilliant Ideas
                </h6>
                {openItem === 1 && (
                  <div className="card-body">
                    <p>
                      Our Ph.D. experts always deliver unique and smart solutions
                    </p>
                  </div>
                )}
              </div>

              {/* card 2 */}
              <div className="card">
                <h6
                  className={`ltn__card-title ${openItem === 2 ? "" : "collapsed"}`}
                  onClick={() => toggleItem(2)}
                  style={{ cursor: "pointer" }}
                >
                  <i className="flaticon-hospital" /> Timely Assistance
                </h6>
                {openItem === 2 && (
                  <div className="card-body">
                    <p>
                      We make sure that our students receive timely and best
                      assistance.
                    </p>
                  </div>
                )}
              </div>

              {/* card 3 */}
              <div className="card">
                <h6
                  className={`ltn__card-title ${openItem === 3 ? "" : "collapsed"}`}
                  onClick={() => toggleItem(3)}
                  style={{ cursor: "pointer" }}
                >
                  <i className="flaticon-metro" /> Privacy Guaranteed
                </h6>
                {openItem === 3 && (
                  <div className="card-body">
                    <p>
                      We are a safe and secured company and value our customers’
                      privacy.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div id="accordion_3">
              {/* card 4 */}
              <div className="card">
                <h6
                  className={`ltn__card-title ${openItem === 4 ? "" : "collapsed"}`}
                  onClick={() => toggleItem(4)}
                  style={{ cursor: "pointer" }}
                >
                  <i className="flaticon-building" /> 24/7 Availability
                </h6>
                {openItem === 4 && (
                  <div className="card-body">
                    <p>
                      We are here to address your concerns and problems 24/7.
                    </p>
                  </div>
                )}
              </div>

              {/* card 5 */}
              <div className="card">
                <h6
                  className={`ltn__card-title ${openItem === 5 ? "" : "collapsed"}`}
                  onClick={() => toggleItem(5)}
                  style={{ cursor: "pointer" }}
                >
                  <i className="flaticon-airplane" /> Customer Satisfaction
                </h6>
                {openItem === 5 && (
                  <div className="card-body">
                    <p>
                      We try our level best to help our customers with everything.
                    </p>
                  </div>
                )}
              </div>

              {/* card 6 */}
              <div className="card">
                <h6
                  className={`ltn__card-title ${openItem === 6 ? "" : "collapsed"}`}
                  onClick={() => toggleItem(6)}
                  style={{ cursor: "pointer" }}
                >
                  <i className="flaticon-slider" /> Boost Grades
                </h6>
                {openItem === 6 && (
                  <div className="card-body">
                    <p>
                      Our team put all their efforts to level up the students’
                      grades.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          </div>
          <div className="row justify-content-center mt-5">
          <button className="col-lg-2 col-md-12 col-sm-12 btn theme-btn-1">
            <Link to={'/contact'}>Order Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Other;
