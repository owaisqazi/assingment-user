import React, { Component } from "react";

class Testimonial extends Component {
  render() {
    const data = [
      {
        text: " I cannot describe in words how amazing my life feels at this point now that I have Assignment Help to ease the load of assignments for me. I swear if it wasn’t for them, I would have been in therapy for anxiety because of all the stress. Thank you so much, guys.  ",
        name: " Ashley Moore ",
      },
      {
        text: "Assignment Help is a highly trustable platform for students in my opinion. My experience with them went great. I don’t think anyone would be unhappy with their services. The tutor I got was of huge help. He helped me beyond what I had asked for.  ",
        name: " Nick Oliver ",
      },
      {
        text: "I had been finding it hard to find an affordable tutor in my area but the huge load of assignments had forced me to look for other alternatives and I am glad it did. Because I stumbled upon Assignment Help and I have been working with them since my studies in college.  ",
        name: " Joe Wright",
      },
      {
        text: "I normally don’t bother to write reviews but these people have compelled me to write this here. You guys are simply amazing. I feel students should know about this service. It really helped me with my grades. I highly recommend Assignment Help for how good they are. ",
        name: " Luke ",
      },
      {
        text: "You guys are simply awesome. I would give your service a 5 out of 5. I have left my rating and I am writing my review here as your loyal customer. Working with your professionals is always a pleasure. You guys make studies so easy for me. I am very grateful. ",
        name: " Michelle  ",
      },
      {
        text: "I don’t speak on behalf of every client here but I can say for myself that they are highly reliable and they do what they promise! I have hired them for help multiple times and not once did they make me doubt my decision to hire them. Assignment Help is worth the expense.  ",
        name: " Natalie ",
      },
    ];


    return (
      <div className="ltn__testimonial-area section-bg-1--- pt-115 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  Our Testimonial
                </h6>
                <h1 className="section-title">Clients Feedback</h1>
                <p>
                  Want to know more about Assignment Help Check out how our
                  clients’ experience goes when they sign up for our educational
                  support services.
                </p>
              </div>
            </div>
          </div>
          <div className="row ltn__testimonial-slider-5-active slick-arrow-1">
            {data.map((data, index) => {
              return (
                <div className="col-lg-4" key={index}>
                  <div className="ltn__testimonial-item ltn__testimonial-item-7">
                    <div className="ltn__testimoni-info">
                      <p>
                        <i className="flaticon-left-quote-1" />
                       {data.text}
                      </p>
					  <h5>{data.name}</h5>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p><i className="flaticon-left-quote-1" /> 
			              Precious ipsum dolor sit amet
			              consectetur adipisicing elit, sed dos
			              mod tempor incididunt ut labore et
			              dolore magna aliqua. Ut enim ad min
			              veniam, quis nostrud Precious ips
			              um dolor sit amet, consecte</p>
			            <div className="ltn__testimoni-info-inner">
			              <div className="ltn__testimoni-img">
			                <img src={publicUrl+"assets/img/testimonial/3.jpg"} alt="#" loading="lazy"
                      width={100}
                            height={100}  />
			              </div>
			              <div className="ltn__testimoni-name-designation">
			                <h5>Adam Joseph</h5>
			                <label>Selling Agents</label>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div> */}

            {/*  */}
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
