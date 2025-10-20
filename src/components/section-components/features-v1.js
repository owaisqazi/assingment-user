import React, { Component } from "react";
import { Link } from "react-router-dom";

class FeaturesV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    let customClass = this.props.customClass ? this.props.customClass : "";
    let data = this.props.data;
    let heading = this.props.heading;
	let text = this.props.text;
    return (
      <div className={customClass}>
        <div className="container">
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
          <div className="row ltn__custom-gutter--- justify-content-center go-top">
            {/* <div className="col-lg-4 col-sm-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/21.png"} alt="#" loading="lazy"
                      width={100}
                            height={100}  />
			          </div>
			          <div className="ltn__feature-info">
			            <h3>Assignment Writing Help</h3>
			            <p>Find answers to even the most complicated questions of your assignment with the help of our tutors and score more.</p>
			            <Link className="ltn__service-btn" to="/service-details">Order Now <i className="flaticon-right-arrow" /></Link>
			          </div>
			        </div>
			      </div> */}
            {data.map((data, index) => {
              return (
                <div className="col-lg-4 col-sm-6 col-12" key={index}>
                  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
                    <div className="ltn__feature-icon">
                      <img
                        src={publicUrl + "assets/img/icons/icon-img/22.png"}
                        alt="#"
                      />
                    </div>
                    <div className="ltn__feature-info">
                      <h4>
                        <Link to="/service-details">{data.title}</Link>
                      </h4>
                      <p>{data.discription}</p>
                      <Link className="ltn__service-btn" to="/contact">
                        Order now <i className="flaticon-right-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturesV1;
