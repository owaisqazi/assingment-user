import React from 'react'
import Navbar from "./global-components/navbar-v3";
import BannerV5 from "./section-components/banner-v5";
import Footer from "./global-components/footer";
import { Link } from "react-router-dom";

const Programming = () => {
    return (
        <>
            <Navbar CustomClass="ltn__header-transparent gradient-color-2" />
            <BannerV5
                headerTitle={"Programming Assignments Help"}
                typeWriterValue={[
                    "Put a stop to deadline pressure, and have your homework done  ",
                    "by an expert.",
                    // "ASSIGNMENT",
                    // "PROJECT REPORT",
                ]}
                smallText={
                    ""
                }
            />
            <div className="container mt-100 mb-100">
                <div className="row ltn__custom-gutter--- justify-content-center go-top mb-50">
                    <div className="col-lg-3 col-sm-6 col-12" >
                        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
                            <div className="ltn__feature-icon">
                                <img
                                    src={"assets/img/icons/icon-img/22.png"}
                                    alt="#"
                                    loading="lazy"
                      width={100}
                            height={100}  />
                            </div>
                            <div className="ltn__feature-info">
                                <h3>
                                    <Link to="#">182 300+</Link>
                                </h3>
                                <h6>
                                    <Link to="#">DELIVERED ORDERS</Link>
                                </h6>
                                {/* <p>{data.discription}</p>
                      <Link className="ltn__service-btn" to="/contact">
                        Order now <i className="flaticon-right-arrow" />
                      </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12" >
                        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
                            <div className="ltn__feature-icon">
                                <img
                                    src={"assets/img/icons/icon-img/22.png"}
                                    alt="#"
                                    loading="lazy"
                      width={100}
                            height={100}  />
                            </div>
                            <div className="ltn__feature-info">
                                <h3>
                                    <Link to="#">5844 +</Link>
                                </h3>
                                <h6>
                                    <Link to="#">EXPERTS</Link>
                                </h6>
                                {/* <p>{data.discription}</p>
                      <Link className="ltn__service-btn" to="/contact">
                        Order now <i className="flaticon-right-arrow" />
                      </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12" >
                        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
                            <div className="ltn__feature-icon">
                                <img
                                    src={"assets/img/icons/icon-img/22.png"}
                                    alt="#"
                                    loading="lazy"
                      width={100}
                            height={100}  />
                            </div>
                            <div className="ltn__feature-info">
                                <h3>
                                    <Link to="#">4.9/5</Link>
                                </h3>
                                <h6>
                                    <Link to="#">CLIENT RATING</Link>
                                </h6>
                                {/* <p>{data.discription}</p>
                      <Link className="ltn__service-btn" to="/contact">
                        Order now <i className="flaticon-right-arrow" />
                      </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12" >
                        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
                            <div className="ltn__feature-icon">
                                <img
                                    src={"assets/img/icons/icon-img/22.png"}
                                    alt="#"
                                    loading="lazy"
                      width={100}
                            height={100}  />
                            </div>
                            <div className="ltn__feature-info">
                                <h3>
                                    <Link to="#">5+ Countries</Link>
                                </h3>
                                <h6>
                                    <Link to="#">Operated in 5+ Countries</Link>
                                </h6>
                                {/* <p>{data.discription}</p>
                      <Link className="ltn__service-btn" to="/contact">
                        Order now <i className="flaticon-right-arrow" />
                      </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
                <h4>Your Top Option for Programming Homework Help</h4>
                <p>Today, programming is present in a huge number of courses, degrees, and classes. Programming ranges from basic, such as HTML and C, to high-level, including PHP, Java, Python, and Pascal. If you are new to programming or a programming language, it may take you hours or even weeks to complete a project. Worst of all, if you make a mistake, you may need to start all over again. Unless of course, you enlist the help of professional programmers who can accomplish the task for you in a short span of time. Now, there is a way to connect with them: through our programming Assignments Help service.</p>
                <h4>What Kinds of Assignments Are Eligible for Programming Homework Help?</h4>
                <p>At Assignments Help , we have a team of professional programmers with postgraduate degrees, and experts in all areas and languages. We offer programming assignment help for programming for the web, databases, and scientific projects. If you are having trouble completing your project, you need to fix an error, or you want to find an answer to your query, our team is available online for assistance.</p>

                <h4>Is Programming Assignment Help Worth It?</h4>
                <p>We work to order to fit the needs of each individual student; however, services have a couple of things in common:</p>
                <p>Programming assignment help always is carried out by qualified professionals Help with programming assignment is always affordable — cheap enough for any student budget</p>
                <p>If you request our help, in addition to the coding part of your homework, our writers can provide you with a custom written summary of the work. This will help you understand the process behind the programming, useful both for examinations and future tasks. We can also add comments to the code to help you understand the most important sections and to allow you to make additions later on. Finally, our programming assignment help includes providing test cases for you to check the code on an individual level. Equipped with our custom written test cases, you can easily create more of your own — for the same code or for other pieces of code in the same programming language.</p>
                <p>When you first start programming, you may find the process quite time-consuming, but with practice, you will become faster. The problem is, early on, you may not always f dedicate enough time to programming due to various other commitments. Our team of professionals have been programming for years and will complete the task in no time, giving you the chance to learn at your own speed without worrying about missed deadlines</p>
              
            </div>

            {/* <CallToActionV1 /> */}
            <Footer />
        </>
    )
}

export default Programming
