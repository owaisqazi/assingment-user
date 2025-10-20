import React from "react";
import Navbar from "./global-components/navbar-v3";
import BlogSlider from "./blog-components/blog-slider-v1";
import Footer from "./global-components/footer";
import BannerV5 from "./section-components/banner-v5";
import FeaturesV1 from "./section-components/features-v1";
import Helpease from "./section-components/Helpease";
import ProductSliderV2 from "./section-components/product-slider-v2";
import Text from "./section-components/Text";
import TeamV1 from "./section-components/team-v1";
import BookYourtutor from "./section-components/BookYourtutor";
import AddOnes from "./section-components/AddOnes";
import CategoryV2 from "./section-components/category-v2";

const LocationPage = () => {
    const data = [
        {
          title: "Super Friendly Services",
          discription:
            "Our services are super-friendly to use. No long forms or no long hours of waiting!",
        },
        {
          title: "Editing and Proofreading",
          discription:
            "We have a special team of editors who can help you in submitting error-free reports",
        },
        {
          title: "Plagiarism Checker",
          discription:
            "Before delivering the work, we make sure that your paper is 100% unique and authentic.",
        },
        {
          title: "Support Services 24/7",
          discription:
            "We are available 24/7 for the students to address their concerns and problems immediately.",
        },
        {
          title: "High Quality Paper",
          discription:
            "We have highly qualified experts who can help you in submitting an A-one quality papers.",
        },
        {
          title: "Boost in Grades",
          discription:
            "Our professional experts work relentlessly hard to help you to achieve the grades you want.",
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
          title: "John",
          discription: "I had an outstanding experience with their lab report writing services. The experts were knowledgeable and delivered a well-written report on time. I highly recommend their services to anyone in need of quality lab reports.",
        },
        {
          title: "Michael",
          discription: "I am incredibly grateful for their lab report writing assistance. The team was professional, and they followed all the instructions provided. The report was thorough and helped me achieve a good grade. Thank you so much!",
        },
        {
          title: "Robert",
          discription: "I can't thank them enough for their exceptional lab report writing services. The experts understood the requirements perfectly and delivered a comprehensive and well-structured report. I would definitely use their services again in the future.",
        },
        {
          title: "William",
          discription: "I had a great experience with their lab report writing team. The communication was smooth, and they addressed all my concerns promptly. The quality of the report exceeded my expectations, and I highly recommend their services.",
        },
        {
          title: "David",
          discription: "Their lab report writing services are top-notch. The experts conducted thorough research and presented the findings in a clear and concise manner. I appreciate their attention to detail and commitment to delivering high-quality work.",
        },
        {
          title: "James",
          discription: "I am extremely satisfied with their lab report writing assistance. The team was professional, and they met all the deadlines. The report was well-researched and formatted. I would definitely recommend their services to my peers.",
        },
        {
          title: "Daniel",
          discription: "I want to express my gratitude to their lab report writing team. They provided me with a well-written report that was customized to my specific requirements. Their expertise and dedication made a significant difference in my academic journey.",
        },
      ];
    //   const guruData =[
    //     {
    //      img:'assets/img/slider/team.webp',
    //      name:' Alice V. Cobb ',
    //      title:'Expertise',
    //      discription:'Business Technology, Resource Program, Social Studies, Health ',
    //      rating:'Ratings (4.95) '
    //     },
    //     {
    //      img:'assets/img/slider/team1.webp',
    //      name:' Alice V. Cobb ',
    //      title:'Expertise',
    //      discription:'Business Technology, Resource Program, Social Studies, Health ',
    //      rating:'Ratings (4.95) '
    //     },
    //     {
    //      img:'assets/img/slider/team2.jpeg',
    //      name:' Alice V. Cobb ',
    //      title:'Expertise',
    //      discription:'Business Technology, Resource Program, Social Studies, Health ',
    //      rating:'Ratings (4.95) '
    //     }, 
         
        
    //    {
    //      img:'assets/img/slider/team3.webp',
    //      name:' Alice V. Cobb ',
    //      title:'Expertise',
    //      discription:'Business Technology, Resource Program, Social Studies, Health ',
    //      rating:'Ratings (4.95) '
    //     },
    //     {
    //      img:'assets/img/slider/team4.jpg',
    //      name:' Alice V. Cobb ',
    //      title:'Expertise',
    //      discription:'Business Technology, Resource Program, Social Studies, Health ',
    //      rating:'Ratings (4.95) '
    //     },
    //     {
    //      img:'assets/img/slider/team5.webp',
    //      name:' Alice V. Cobb ',
    //      title:'Expertise',
    //      discription:'Business Technology, Resource Program, Social Studies, Health ',
    //      rating:'Ratings (4.95) '
    //     }
    //  ]
    const guruData = [
      {
        img: 'assets/img/slider/avatar1.avif',
        name: 'John D. Smith',
        title: 'Expertise',
        discription: 'Business Technology, Sales Strategy, Financial Analysis, Leadership',
        rating: 'Ratings (4.95)'
      },
      {
        img: 'assets/img/slider/avatar9.jpg',
        name: 'Michael J. Johnson',
        title: 'Expertise',
        discription: 'Marketing, Product Development, Market Research, Project Management',
        rating: 'Ratings (4.95)'
      },
      {
        img: 'assets/img/slider/avatar11.jpg',
        name: 'Robert M. Brown',
        title: 'Expertise',
        discription: 'Software Engineering, Data Science, Machine Learning, Algorithms',
        rating: 'Ratings (4.95)'
      },
      {
        img: 'assets/img/slider/avatar2.avif',
        name: 'William A. Taylor',
        title: 'Expertise',
        discription: 'Supply Chain Management, Logistics, Operations Optimization, Six Sigma',
        rating: 'Ratings (4.95)'
      },
      {
        img: 'assets/img/slider/avatar20.png',
        name: 'David L. Davis',
        title: 'Expertise',
        discription: 'Human Resources, Organizational Development, Employee Relations, Talent Acquisition',
        rating: 'Ratings (4.95)'
      },
      {
        img: 'assets/img/slider/avatar25.png',
        name: 'James K. Wilson',
        title: 'Expertise',
        discription: 'Business Strategy, Market Analysis, Strategic Planning, Financial Management',
        rating: 'Ratings (4.95)'
      }
    ];
      const categorydata = [
        {
          logo: "",
          title: "Guaranteed",
          description: "Grade Upgradations",
        },
        {
          logo: "",
          title: "Free",
          description: "Study Material",
        },
        {
          logo: "",
          title: "Qualified",
          description: "Professionals On Board",
        },
        {
          logo: "",
          title: " Affordable",
          description: "Payment Plans",
        },
        {
          logo: "",
          title: "Unlimited",
          description: "Free Revisions",
        },
        {
          logo: "",
          title: "Unwavering",
          description: "Academic Support",
        },
        {
          logo: "",
          title: "Multiple",
          description: "Seasonal Discounts",
        },
        {
          logo: "",
          title: "Free",
          description: "Plagiarism Report",
        },
      ];
      return (
        <div>
          <Navbar CustomClass="ltn__header-transparent gradient-color-2" />
          <BannerV5
            headerTitle={"Get Professional Lab Report From Ph.D. Experts"}
            smallText={
              "Assignment Help can help you in submitting high quality, professional and plagiarism free lab reports. Save your time and money today!"
            }
          />
          <FeaturesV1
            customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"
            heading={"Why You Should Hire Our Online Lab Report Writing Service?"}
            data={data}
          />
          <Helpease />
    
          <BlogSlider
            customClass="section-subtitle-2"
            heading={"We Have Even Assisted Students Of World’s Top Colleges"}
            headingTitle={"Recognized By The Top Universities"}
            text={
              "The secret behind the quality of our service is the fact that Assignment Help has a meticulous hiring process to hire educational support providers for students. We hire only the best because it enables us to help students from the world’s no#1 colleges such as:"
            }
          />
    
          <ProductSliderV2
            dataReview={dataReview}
            heading={"Reviews About Our Lab Report Writing Services"}
          />
          <TeamV1
            heading={"Meet Our Talented and Superb Experts"}
            guruData={guruData}
          />
          <BookYourtutor
            heading={"Reach Us & 25% OFF Today!"}
            text={
              "Grab lab report writing help from your favorite tutor and ease your workload. Send us your message and avail early bird discount!"
            }
          />
    
          <AddOnes
            heading={
              "Enjoy Exceptional Features Of Our Lab Report Writing Service!"
            }
            text={
              "Unable to decide about us? Check out our exceptional features and make up your mind. Here is what we offer:"
            }
            array={[
              "High Quality Papers",
              "24/7 Assistance",
              "Formatting & Styling",
              "Unlimited Revisions ",
              " Editing & Proofreading",
              "Plagiarism Checker",
            ]}
          />
          <CategoryV2
            heading={"Exciting Benefits Which You"}
            text={"Shouldn’t Overlook!"}
            categorydata={categorydata}
          />
          {/* <Text /> */}
          <Text heading1={'Looking For A Professional Tutor To Help You Write Your Lab Report?'} heading2={'From Experiment To Data Analysis- We Will Help You With Every Part!'}/>
    
    
          {/* <CallToActionV1 /> */}
          <Footer />
        </div>
      );
}

export default LocationPage

