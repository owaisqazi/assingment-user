import React from 'react'
import {Link} from 'react-router-dom'
const Helpease = () => {
    const data = [
        {
            title:'Register With Us',
            discription:'Sign up at Assignment Help and connect with 300+ skilled experts.'
        },
        {
            title:'Tell Us Your Problem',
            discription:'Let us know what type of help you need from our experts'
        },
        {
            title:'Choose The Experts',
            discription:'Select the right Experts for you that matches your requirements.'
        },
        {
            title:'Book Your Lesson',
            discription:'Tell us when you want to meet your Experts and pay for that time only.'
        },
    ]
  return (
    <div className="ltn__category-area ltn__product-gutter section-bg-1--- pt-115 pb-70">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title-area ltn__section-title-2--- text-center">
            
            <h1 className="section-title">Getting Our Help Is Easier Than You Think</h1>
            <p>You Are A Few Clicks Awayy</p>
          </div>
        </div>
      </div>
      
      <div className="row ltn__category-slider-active--- slick-arrow-1 justify-content-center go-top">
        {data.map((data, index) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-12 col-xxl-3">
              <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                <div className="Category-card">
                  <h1 className="">
                     {index + 1}
                  </h1>
                  <span className="category-title">{data.title}</span>
                  <span className="category-brief">
                    {data.discription}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        
        <div className="row justify-content-center mt-3">
             <button className="col-lg-2 col-sm-12  btn theme-btn-1 ">
              <Link to={'/contact'}>Order Now</Link>
             </button>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Helpease