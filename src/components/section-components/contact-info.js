import React, { Component } from "react";

class ContactInfo extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__contact-address-area mb-90  ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img
                    src={publicUrl + "assets/img/icons/10.png"}
                    alt="IconImage"
                  />
                </div>
                <h5>Email Address</h5>
                <p>
                  <a href="mailto:Info@assignmenthelps.org">
                    Info@assignmenthelps.org
                  </a>
                  <br></br>
                  <a href="mailto:assignmenthelps12@gmail.com">
                    assignmenthelps12@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img
                    src={publicUrl + "assets/img/icons/11.png"}
                    alt="IconImage"
                  />
                </div>
                <div className="ltn__top-bar-menu ">
                  <h5>Call Number</h5>
                  <ul>
                    <li>
                      <a
                        href="tel:+19727774163"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        US: +1 (972) 777-4163
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+442045155008"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        UK: +44 (20) 4515 5008
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img
                    src={publicUrl + "assets/img/icons/11.png"}
                    alt="IconImage"
                  />
                </div>
                <div className="ltn__top-bar-menu ">
                  <h5>WhatsApp Number</h5>
                  <ul>
                    {/* <li>
                     <a
                                href="https://wa.me/4915216652405?text=Referral%20link%20website%3A%20www.assignmenthelps.org"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Europe : +49 1521 6652405
                              </a>
                    </li> */}
                    <li>
                      <a
                        href="https://wa.me/447440451891?text=Referral%20link%20website%3A%20www.assignmenthelps.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        UK: +44 7440 451891
                      </a>
                    </li>
                    {/* <li>
                      <a
                        // href="https://wa.me/+16473809347?text=Referral%20link%20website%3A%20www.assignmenthelps.org"
                        href='tel:+12818858538 '
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        +1 (281) 8858538 call

                      </a>
                    </li> */}
                    {/* <li>
                      <a
                        // href="https://wa.me/+16473809347?text=Referral%20link%20website%3A%20www.assignmenthelps.org"
                        href='tel:+12819859318 '
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        +1 (281) 985-9318 call only

                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img
                    src={publicUrl + "assets/img/icons/11.png"}
                    alt="IconImage"
                  />
                </div>
                <div className="ltn__top-bar-menu ">
                  <h5>Europe Number</h5>
                  <ul>
                    <li>
                      <a
                        href="https://wa.me/4915216652405?text=Referral%20link%20website%3A%20www.assignmenthelps.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Europe : +49 1521 6652405
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4">
					<div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
						<div className="ltn__contact-address-icon">
						<img src={publicUrl+"assets/img/icons/12.png"} alt="Icon Image" />
						</div>
						<h3>Office Address</h3>
						<p>18/A, New Born Town Hall <br />
						New York, US</p>
					</div>
					</div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
