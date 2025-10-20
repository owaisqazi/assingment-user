import React from "react";
import Featuresv1 from "./section-components/features-v1";
import BlogSlider from "./blog-components/blog-slider-v1";
import Navbar from "./global-components/navbar-v3";
import BannerV5 from "./section-components/banner-v5";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";

import Text from "./section-components/Text";
import Other from "./section-components/Other";
import CategoryV2 from "./section-components/category-v2";
import Helpease from "./section-components/Helpease";
import BookYourtutor from "./section-components/BookYourtutor";
import AddOnes from "./section-components/AddOnes";
import ProductSliderV2 from "./section-components/product-slider-v2";
const Home_V5 = () => {
  const data = [
    {
      title: "Assignment Writing Help",
      discription:
        "Find answers to even the most complicated questions of your assignment with the help of our Expert and score more.",
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
  // const Otherdata = [
  //   {
  //     title: "Brilliant Ideas",
  //     discription:
  //       "Our Ph.D. experts always deliver unique and smart solutions",
  //   },
  //   {
  //     title: "Timely Assistance",
  //     discription:
  //       "We make sure that our students receive timely and best assistance.",
  //   },
  //   {
  //     title: " Privacy Guaranteed",
  //     discription:
  //       "We are a safe and secured company and value our customers’ privacy.",
  //   },
  //   {
  //     title: " 24/7 Availability",
  //     discription: "We are here to address your concerns and problems 24/7.",
  //   },
  //   {
  //     title: "Customer Satisfaction",
  //     discription:
  //       "We try our level best to help our customers with everything.",
  //   },
  //   {
  //     title: "Boost Grades",
  //     discription:
  //       "Our team put all their efforts to level up the students’ grades.",
  //   },
  // ];
  const dataReview = [
    {
      title: "Essay Help",
      discription:
        "Wow! Incredible services.  I must say their Experts are professional and very cooperative. Due to them I can now write amazing essays.",
    },
    {
      title: "Presentation Writing ",
      discription:
        "Had the best online learning experience! The Experts helped me in making my presentation and also provided smart tips that caused me to score highest marks in the class.",
    },
    {
      title: " Lab Report Writing",
      discription:
        "I must say they are the best place to seek help. Because of them I was able to submit an excellent lab report. Thank You.",
    },
    {
      title: " Math Solver ",
      discription:
        "The Experts I was given was far better than my Math teacher. Thank you so much for helping me with my Math problems. ",
    },
    {
      title: "  Assignment Help  ",
      discription:
        "I am highly grateful to my Experts for explaining me the assignment so deeply. Without them I wouldn’t be able to submit my assignment on time.   ",
    },
    {
      title: "  Video Sessions   ",
      discription:
        "I advise everyone to take their video sessions. They are amazing and helped me in understanding many topics easily. Keep the good work up!  ",
    },
    {
      title: "   Speech Writing    ",
      discription:
        "Best service at best price rates. Their Experts are amazing and helped me with my speech writing. Thank you so much.    ",
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
        headerTitle={"Welcome To Online Assignment Help"}
        typeWriterValue={[
          "ESSAY",
          "LAB REPORT",
          "ASSIGNMENT",
          "PROJECT REPORT",
        ]}
        smallText={
          "Looking for the ideal place to get academic help? Welcome to the Online Dissertation Helpers! Dissertations, essays, assignments, or theses; we are here to assist you everywhere.   If you are one of the anxious students and want to score the best grades in your exams, contact us now!"
        }
      />
      <Featuresv1
        customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"
        heading={"Find A Experts For Any Academic Task You Want"}
        text={
          "Reach out to Asssignment help and get a range of services to seek help. Let’s learn together and help you succeed in your academic life."
        }
        data={data}
      />

      <Helpease />
      <Other
        heading={" What Parts Assignment Help From Others?"}
        text={
          " Want to know why we are students’ favorite choice? Here is what you can also get:"
        }
      />
      <BookYourtutor
        heading={"Book Your Personal Experts Now!"}
        text={
          "Send us your message and hire your Experts within a few minutes! Place your order and get 25% off today!"
        }
      />
      <AddOnes
        heading={
          "Cool Add-Ons Of Our Academic help Services Which You Shouldn’t Miss!"
        }
        text={
          "Stop running after your teachers or paying hefty amount to complete your homework. Hire Assignment Help and get outstanding assistance with exceptional features while sitting at home. Try us and enjoy:"
        }
      array={['Access to Free Material',
        'Editing & Proofreading',
        'Exclusive Discounts',
        'Higher Grades',
       ' Personalized Learning',
        'Sample Provisions']}
      />
      <CategoryV2
        heading={"Exciting Benefits Which You"}
        text={"Shouldn’t Overlook!"}
        categorydata={categorydata}
      />
      <ProductSliderV2 dataReview={dataReview} heading={'Review & Opinion ....'} />


      <BlogSlider
        customClass="section-subtitle-2"
        heading={
          "Students with Our Hard Core Efforts Are Now Studying in World’s Top Universities"
        }
        headingTitle={"We Are The Most Trusted Tuition Hub In the World"}
        text={
          "Assignment Helpis recognized as the best place to learn and grow. Until now, we have helped countless students to build their careers. Hire us now and shape your career the way you want!"
        }
      />
      <Text heading1={'Assignment Help– A Learning Platform For Everyone!'} heading2={'Become A Star Student With The Help Of Our Expert'}/>

      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Home_V5;
