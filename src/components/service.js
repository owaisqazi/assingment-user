import React from "react";
import Navbar from "./global-components/navbar-v3";
import BlogSlider from "./blog-components/blog-slider-v1";
import Footer from "./global-components/footer";
import Text from "./section-components/Text";
import ProductSliderV2 from "./section-components/product-slider-v2";
import CategoryV2 from "./section-components/category-v2";
import BookYourtutor from "./section-components/BookYourtutor";
import Other from "./section-components/Other";
import Helpease from "./section-components/Helpease";
import FeaturesV1 from "./section-components/features-v1";
import BannerV5 from "./section-components/banner-v5";
import AddOnes from "./section-components/AddOnes";

const Service_V1 = () => {
  const data = [
    {
      title: "Assignment Writing Help",
      discription:
        "Find answers to even the most complicated questions of your assignment with the help of our Experts and score more.",
    },
    {
      title: "Essay Writing Help",
      discription:
        "Our essayists will help you to learn the art of writing excellent essays and unique tips to impress your teachers with your words.",
    },
    {
      title: "Dissertation Writing Help",
      discription:
        "We have a team of Ph.D. research writers who can guide you to impress your supervisors by helping you compose a winning dissertation.",
    },
    {
      title: "Lab Report Writing Help",
      discription:
        "Take help from our professional experts to write 100% accurate, genuine, scientific and properly formatted lab reports.",
    },
    {
      title: "Project Report Writing Help",
      discription:
        "Let our experts help you to get your project approved by assisting you in writing detailed and outstanding project report.",
    },
    {
      title: "Speech Writing Help",
      discription:
        "Want to impress your audience with your speech writing skills? Hire our experts and make your audience say ‘wow’.",
    },
    {
      title: "Presentation Writing Help",
      discription:
        "We will not only help you with the making of your presentations but will also teach you how to give presentation with amazing tips.",
    },
    {
      title: "Video Solutions",
      discription:
        "Aid your learning and find answers to your academic problems by enrolling yourself for Assignment Help’s video sessions.",
    },
    {
      title: "Live Sessions",
      discription:
        "Get answers to all your academic problems by taking one-to-one live sessions from our highly qualified professional Experts.",
    },
  ];
  const dataReview = [
    {
      title: "Kale Newman",
      discription:
        "Writing a dissertation was really a daunting task for me. However, with the premium assistance of Assignment Help, I got through it smoothly. ",
    },
    {
      title: "  Harry Gale ",
      discription:
        "I cannot simply thank Assignment Help enough for helping me write a winning dissertation paper. Their research writers are really qualified and experienced.  ",
    },
    {
      title: " Ben Ford",
      discription:
        "I thought hiring online dissertation help services from Assignment Help would be costly. However, they offered me numerous discounts. ",
    },
    {
      title: " Emilia Gordon",
      discription:
        "There is no other dissertation help service on the web that offers the same quality at reasonable prices as Assignment Help. Highly recommended.  ",
    },
    {
      title: " Michele Jett  ",
      discription:
        "I heard of Assignment Help from most students in my school for excellent dissertation assistance. So I took their help in my research task, and the rumours were really true.   ",
    },
    {
      title: "   Natalia Forrest   ",
      discription:
        "I got stuck in the middle of my dissertation writing process. Thanks to Assignment Help to get me out of there and helping me finalize my work.   ",
    },
    {
      title: "  Shane Watson    ",
      discription:
        "Hiring online dissertation help services from Assignment Help was easy for me. I just sent them a message, and their sincere customer care support dealt with everything for me.    ",
    },
  ];
  const categorydata = [
    {
      logo: "",
      title: "Award Winning",
      description: "Ideas",
    },
    {
      logo: "",
      title: "High Quality",
      description: "Work",
    },
    {
      logo: "",
      title: "Direct Communication",
      description: "With the Experts",
    },
    {
      logo: "",
      title: "Constant Assistance",
      description: "24/7",
    },
    {
      logo: "",
      title: "Exclusive Offers",
      description: "& Discounts",
    },
    {
      logo: "",
      title: "Free Vouchers",
      description: "& subscription",
    },
    {
      logo: "",
      title: "Free Access",
      description: "To Samples & Guides",
    },
    {
      logo: "",
      title: "Budget Friendly",
      description: "Price Rates",
    },
  ];
  return (
    <div>
      <Navbar CustomClass="ltn__header-transparent gradient-color-2" />
      <BannerV5
        headerTitle={"Assignment Help Presents"}
        typeWriterValue={[
          "ESSAY",
          "LAB REPORT",
          "ASSIGNMENT",
          "PROJECT REPORT",
        ]}
        smallText={
          " Learn the art of dissertation writing from PhD experts and get your degree successfully!"
        }
      />
      <FeaturesV1
        customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"
        heading={"Find A Experts For Any Academic Task You Want"}
        text={
          "Reach out to Assignment Help and get a range of services to seek help. Let’s learn together and help you succeed in your academic life."
        }
        data={data}
      />
      <Helpease />
      <Other
        heading={"Why We Are The Students’ Top Pick For Dissertation Help"}
        text={
          "9 out of 10 students choose our online dissertation help services. Here are the reasons why we are recognized as the best dissertation service provider"
        }
      />
      <BookYourtutor
        heading={"Book Your Personal Experts Now!"}
        text={
          "Send us your message and hire your Experts within a few minutes! Place your order and get 25% off today!"
        }
      />
      <AddOnes
        array={[
          "Easy Payment Method",
          "Timely Submission",
          "Editing & Proofreading",
          "Paper Formatting & Styling",
          "1st Timer Discount",
          "Free Account Creation",
        ]}
        heading={"Benefits You Should Expect From Our Dissertation Help!"}
        text={
          "Want to get done with your high-quality dissertation successfully while sitting at your home? Hire us and enjoy cool benefits which you won’t find anywhere else."
        }
      />

      {/* <ProductListing /> */}
      <CategoryV2
        heading={"What Else You Can Get From"}
        text={"Our Dissertation Help"}
        categorydata={categorydata}
      />
      {/* <ProSlider /> */}
      {/* <Apartment /> */}
      {/* <VideoV1 /> */}
      {/* <Category /> */}
      {/* <Testimonial /> */}

      <BlogSlider
        customClass="section-subtitle-2"
        heading={
          "We Have Dissertation Experts who Graduated From Top Universities Of the World"
        }
        headingTitle={"99% of Students Worldwide Trust Us For Their Dissertations"}
        text={
          "Assignment Help has made its name among the students because of its dedicated services. With our hard-core efforts, we helped students to improve their learning and achieve their academic goals."
        }
      />
      <ProductSliderV2 dataReview={dataReview} heading={'Hall Of Fame'} />

      <Text heading1={'Assignment Help – A Learning Platform For Everyone!'} heading2={'Let Us Help You Sail Your Dissertation Boat To The Shores Of Success!'}/>

      {/* <CallToActionV1 /> */}
      <Footer />
    </div>
  );
};

export default Service_V1;
