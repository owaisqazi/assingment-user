import React, { Component } from "react";
import {MdOutlineAssignmentTurnedIn} from 'react-icons/md'
class CategoryV2 extends Component {
  render() {
    // const categorydata = [
    //   {
    //     logo: "",
    //     title: "Award Winning",
    //     description: "Ideas",
    //   },
    //   {
    //     logo: "",
    //     title: "High Quality",
    //     description: "Work",
    //   },
    //   {
    //     logo: "",
    //     title: "Direct Communication",
    //     description: "With the Experts",
    //   },
    //   {
    //     logo: "",
    //     title: "Constant Assistance",
    //     description: "24/7",
    //   },
    //   {
    //     logo: "",
    //     title: "Exclusive Offers",
    //     description: "& Discounts",
    //   },
    //   {
    //     logo: "",
    //     title: "Free Vouchers",
    //     description: "& subscription",
    //   },
    //   {
    //     logo: "",
    //     title: "Free Access",
    //     description: "To Samples & Guides",
    //   },
    //   {
    //     logo: "",
    //     title: "Budget Friendly",
    //     description: "Price Rates",
    //   },
    // ];

    
    let data = this.props.categorydata
  let heading = this.props.heading;
  let text = this.props.text
    return (
      <div className="ltn__category-area ltn__product-gutter section-bg-1--- pt-115 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                
                <h1 className="section-title">{heading}</h1>
		         		<p>{text}!</p>
              </div>
            </div>
          </div>
		  
          <div className="row ltn__category-slider-active--- slick-arrow-1 justify-content-center go-top">
            {data.map((data, index) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-12 col-xxl-3">
                  <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                    <div className="Category-card">
                      <span className="category-icon">
                        {/* <i className="flaticon-heart" /> */}
                        <MdOutlineAssignmentTurnedIn/>
                      </span>
                      <span className="category-title">{data.title}</span>
                      <span className="category-brief">
                        {data.description}
                      </span>
                      <span className="category-btn d-none">
                        <i className="flaticon-right-arrow" />
                      </span>
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

export default CategoryV2;
