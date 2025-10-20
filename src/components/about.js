import React from "react";
import BlogSlider from "./blog-components/blog-slider-v1";
import Footer from "./global-components/footer";
import NavbarV3 from "./global-components/navbar-v3";
import BannerV5 from "./section-components/banner-v5";
import FeaturesV1 from "./section-components/features-v1";
import CallToActionV1 from "./section-components/call-to-action-v1";
// import Team from "./section-components/team-v1";
import Testimonial from "./section-components/testimonial-v1";
import Helpease from "./section-components/Helpease";
import CategoryV2 from "./section-components/category-v2";
import BookYourtutor from "./section-components/BookYourtutor";
import AddOnes from "./section-components/AddOnes";
const About_v1 = () => {
  const data = [
    {
      title: "Dedicated Support",
      discription:
        "Our representatives take your order seriously and hence always respond on time and pay attention.",
    },
    {
      title: "Save Your Time",
      discription:
        "The task that would take you hours would only take you half the time with our specialized guidance.",
    },
    {
      title: "Customized Rates",
      discription:
        "Forget high-budget packages. We charge according to the word count to offer you the best value.",
    },
    {
      title: "Subject Experts",
      discription:
        "We have hired postgraduate specialists for every subject to offer you expert support for all domains.",
    },
    {
      title: "Urgent Packages",
      discription:
        "Chasing a difficult deadline? We can help you out by assigning you multiple experts simultaneously.",
    },
    {
      title: "Confidential",
      discription:
        "Do not worry about the safety of our data because we keep all information encrypted and private.",
    },
  ];
  // const guruData =[
  //    {
  //     img:'assets/img/slider/team.webp',
  //     name:' Alice villes ',
  //     title:'Expertise',
  //     discription:'Business Technology, Resource Program, Social Studies, Health ',
  //     rating:'Ratings (4.75) '
  //    },
  //    {
  //     img:'assets/img/slider/team1.webp',
  //     name:' James V. Cobb ',
  //     title:'Expertise',
  //     discription:'Business Technology, Resource Program, Social Studies, Health ',
  //     rating:'Ratings (4.95) '
  //    },
  //    {
  //     img:'assets/img/slider/team2.jpeg',
  //     name:' Jack V. Daniel ',
  //     title:'Expertise',
  //     discription:'Business Technology, Resource Program, Social Studies, Health ',
  //     rating:'Ratings (4.95) '
  //    },

  //   {
  //     img:'assets/img/slider/team3.webp',
  //     name:' John V. Oliver ',
  //     title:'Expertise',
  //     discription:'Business Technology, Resource Program, Social Studies, Health ',
  //     rating:'Ratings (4.95) '
  //    },
  //    {
  //     img:'assets/img/slider/team4.jpg',
  //     name:' George Charles ',
  //     title:'Expertise',
  //     discription:'Business Technology, Resource Program, Social Studies, Health ',
  //     rating:'Ratings (4.95) '
  //    },
  //    {
  //     img:'assets/img/slider/team5.webp',
  //     name:' Alice V. Cobb ',
  //     title:'Expertise',
  //     discription:'Business Technology, Resource Program, Social Studies, Health ',
  //     rating:'Ratings (4.95) '
  //    }
  // ]
  // const guruData = [
  //   {
  //     img: "assets/img/slider/avatar1.avif",
  //     name: "Robert Smith",
  //     title: "Expertise",
  //     discription: "Marketing, Project Management, Customer Relations",
  //     rating: "Ratings (4.8)",
  //   },
  //   {
  //     img: "assets/img/slider/avatar10.png",
  //     name: "James Johnson",
  //     title: "Expertise",
  //     discription: "Financial Analysis, Risk Management, Business Strategy",
  //     rating: "Ratings (4.9)",
  //   },
  //   {
  //     img: "assets/img/slider/avatar8.jpg",
  //     name: "Jack Davis",
  //     title: "Expertise",
  //     discription: "Human Resources, Organizational Development, Leadership",
  //     rating: "Ratings (4.7)",
  //   },
  //   {
  //     img: "assets/img/slider/avatar9.jpg",
  //     name: "John Thompson",
  //     title: "Expertise",
  //     discription: "Data Analytics, Market Research, Business Intelligence",
  //     rating: "Ratings (4.6)",
  //   },
  //   {
  //     img: "assets/img/slider/avatar7.webp",
  //     name: "Robert Rodriguez",
  //     title: "Expertise",
  //     discription: "Supply Chain Management, Logistics, Operations",
  //     rating: "Ratings (4.5)",
  //   },
  //   {
  //     img: "assets/img/slider/avatar11.jpg",
  //     name: "Michael Wilson",
  //     title: "Expertise",
  //     discription: "Sales, Negotiation, Customer Service",
  //     rating: "Ratings (4.7)",
  //   },
  // ];
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
      <NavbarV3 />
      {/* <PageHeader headertitle="Assignment Help" /> */}
      <BannerV5
        headerTitle={"Hire Online Assignment Help; The Stairway To A-Grades"}
        smallText={
          "Is there a stack of assignments waiting at your study table? Assignment Help can help you complete them all through expert guidance!"
        }
      />
      <FeaturesV1
        customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"
        heading={"Here Is A List Of What Assignment Help Guarantee"}
        data={data}
      />
      <Helpease />
      <BlogSlider
        customClass="section-subtitle-2"
        heading={
          "Assignment Help Crafts Success Stories Of Students From The Top Colleges"
        }
        headingTitle={"Years Of Service To Students Worldwide"}
        text={
          "Studying in highly competitive environments, it’s normal for students to seek help. And so Assignment help have been able to assist students from the best colleges around the world to help them reach their study goals by connecting them to experts."
        }
      />

      {/* <AboutV4 /> */}
      <Testimonial />
      {/* <Team
        heading={"We’re Proud To Present Our Assignment "}
        Linkheading={"Experts"}
        url={"/"}
        guruData={guruData}
      /> */}
      <BookYourtutor
        heading={"A-Grades Just A Click Away!"}
        text={
          "Connect with our assignment Experts and support on the go for help Sign up early to avail the biggest discounts"
        }
      />

      <AddOnes
        heading={"Get Study Assistance With Extra Perks"}
        text={
          "When it comes to offering value for your buck, Assignment Help beats all others in the competition because we cater to students from every corner of the world with an all-rounder study support service."
        }
        array={[
          "Rewards for signing up early",
          "Free assessment for plagiarism",
          "Unlimited revisions on demand",
          "Connect with your expert directly",
          " Upgrade your knowledge on the go",
          "Get rid of the academic stress",
        ]}
      />
      <CategoryV2
        heading={"Enjoy a service full of"}
        text={"Rewards"}
        categorydata={categorydata}
      />

      {/* <BlogSlider /> */}
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default About_v1;
