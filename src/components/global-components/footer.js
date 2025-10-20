import React, { Component } from "react";
import { Link } from "react-router-dom";
import Social from "../section-components/social";
import { BsWhatsapp } from "react-icons/bs";
import Copyright from "./copyright";

class Footer_v1 extends Component {
  componentDidMount() {
    const $ = window.$;

    let publicUrl = process.env.PUBLIC_URL + "/";
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);

    $(".go-top")
      .find("a")
      .on("click", function () {
        $(".quarter-overlay").fadeIn(1);

        $(window).scrollTop(0);

        setTimeout(function () {
          $(".quarter-overlay").fadeOut(300);
        }, 800);
      });

    $(document).on("click", ".theme-btn-1 ", function () {
      $("div").removeClass("modal-backdrop");
      $("div").removeClass("show");
      $("div").removeClass("fade");
      $("body").attr("style", "");
    });
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <>
        <footer className="ltn__footer-area  ">
          <div className="footer-top-area  section-bg-2 plr--5">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget footer-about-widget">
                    <div className="footer-logo">
                      <div className="site-logo">
                        <picture>
                          <source
                            srcSet={publicUrl + "assets/img/slider/logo-5.png"}
                            type="image/webp"
                          />
                          <source
                            srcSet={publicUrl + "assets/img/slider/logo-5.png"}
                            type="image/png"
                          />
                          <img
                            src={publicUrl + "assets/img/slider/logo-5.png"}
                            width={250} // Removed "px" as it's not needed for number type
                            height={200} // <-- **IMP: Yahan logo ki actual height dein** (e.g., 50px)
                            alt="Website Logo" // Alt text ko behtar kiya
                            loading="eager" // Logo usually "above the fold" hota hai, isliye eager load karein.
                            fetchPriority="high" // Modern browsers ko batata hai ki ye important hai.
                          />
                        </picture>
                      </div>
                    </div>
                    <p>
                      We are a group of Assignment Writting Helpers with several
                      years of experience ..
                    </p>
                    <div className="footer-address">
                      <ul>
                        <li>
                          <div className="footer-address-icon">
                            <i className="icon-whatsapp" />
                          </div>
                          <div className="footer-address-info">
                            <p>
                              <span>Available On Call And WhatsApp</span> <br />
                              {/* <a
                                href="https://wa.me/447597701182?text=Referral%20link%20website%3A%20www.assignmenthelps.org"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                UK: +44 7597 701182
                              </a>
                              <br /> */}
                              <a
                                href="https://wa.me/447440451891?text=Referral%20link%20website%3A%20www.assignmenthelps.org"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                UK: +44 7440 451891
                              </a>
                              <br />
                              <a
                                href="https://wa.me/4915216652405?text=Referral%20link%20website%3A%20www.assignmenthelps.org"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Europe : +49 1521 6652405
                              </a>
                              <br />
                              {/* <a
                                href="https://wa.me/14099952520?text=Referral%20link%20website%3A%20www.assignmenthelps.org"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                US & Canada: +1 (616) 274‑2630‬
                              </a> */}

                              {/* <br />
                              <a
                                href="https://wa.me/16473809347?text=Referral%20link%20website%3A%20www.assignmenthelps.org"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                US & canda: +1 (647) 380-9347
                              </a> */}
                            </p>
                          </div>
                        </li>

                        <li>
                          <div className="footer-address-icon">
                            <i className="icon-call" />
                          </div>
                          <div className="footer-address-info">
                            <p>
                              <span>Available On Call Only</span> <br />
                              {/* <a
                                href="tel:+12818858538"
                                // href="https://wa.me/+07539305980?text=Referral%20link%20website%3A%20www.assignmenthelps.org"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                US & Canada: +1 (281) 885-8538
                              </a>
                              <br />
                              <a
                                // href="https://wa.me/+9093513911?text=Referral%20link%20website%3A%20www.assignmenthelps.org"
                                href="tel:+12819859318 "
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                US & Canada: +1 (281) 985-9318
                              </a> */}
                              <a
                                href="tel:+19727774163"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Primary US: +1 (972) 777-4163
                              </a>
                              <br />
                              <a
                                href="tel:+442045155008"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Direct UK: +44 (20) 4515 5008
                              </a>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="footer-address-icon">
                            <i className="icon-mail" />
                          </div>
                          <div className="footer-address-info">
                            <p>
                              <span>Available On Email</span> <br />
                              <a
                                href="mailto:Info@assignmenthelps.org"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Info@assignmenthelps.org
                              </a>
                            </p>
                            <p>
                              <a
                                href="mailto:assignmenthelp12@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                assignmenthelp12@gmail.com
                              </a>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__social-media mt-20">
                      <Social />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget footer-menu-widget clearfix">
                    <h4 className="footer-title">Company</h4>
                    <div className="footer-menu go-top">
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/faq">FAQ</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget footer-menu-widget clearfix">
                    <h4 className="footer-title">Services</h4>
                    <div className="footer-menu go-top">
                      <ul>
                        <li>
                          <Link to="/Assignment-Help">Assignment Help</Link>
                        </li>
                        <li>
                          <Link to="/Dissertation-Help">Dissertation help</Link>
                        </li>
                        <li>
                          <Link to="/Essay-Help">Essay Help</Link>
                        </li>
                        <li>
                          <Link to="/Live-session">Live Sessions</Link>
                        </li>
                        <li>
                          <Link to="/Presentation-Writing">
                            Presentation Writing
                          </Link>
                        </li>
                        <li>
                          <Link to="/project-Report">Project Report</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                  <div className="footer-widget footer-newsletter-widget">
                    <h4 className="footer-title">Newsletter</h4>
                    <p>
                      Subscribe to our weekly Newsletter and receive updates via
                      email.
                    </p>
                    {/* <div className="footer-newsletter">
                      <form action="#">
                        <input type="email" name="email" placeholder="Email*" />
                        <div className="btn-wrapper">
                          <button className="theme-btn-1 btn" type="submit">
                            <i className="fas fa-location-arrow" />
                          </button>
                        </div>
                      </form>
                    </div> */}
                    <h5 className="mt-30">We Accept</h5>
                    <img
                      src={publicUrl + "assets/img/icons/payment-4.png"}
                      alt="Payment Imsage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Copyright />
        </footer>

        <div className="text" style={{}}>
          <BsWhatsapp style={{ fontSize: "28px" }} />

          <span style={{ fontSize: "18px" }}>
            {" "}
            <a
              href={`https://wa.me/+447440451891?text=Referral%20link%20website%3A%20www.assignmenthelps.org`}
              target="_blank"
              rel="noopener noreferrer"
            >
              +44 7440 451891
            </a>
          </span>
        </div>
      </>
    );
  }
}

export default Footer_v1;
