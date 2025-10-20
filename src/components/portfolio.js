import React from "react";
import Navbar from "./global-components/navbar-v3";
import BlogSlider from "./blog-components/blog-slider-v1";
import Footer from "./global-components/footer";
import BannerV5 from "./section-components/banner-v5";
import FeaturesV1 from "./section-components/features-v1";
import Helpease from "./section-components/Helpease";
import ProductSliderV2 from "./section-components/product-slider-v2";
import Text from "./section-components/Text";
// import TeamV1 from "./section-components/team-v1";
import BookYourtutor from "./section-components/BookYourtutor";
import AddOnes from "./section-components/AddOnes";
import CategoryV2 from "./section-components/category-v2";

const Portfolio_V1 = () => {
  const data = [
    {
      title: "Grade Upgradations",
      discription:
        "With the help of our amazing experts, we help our students in improving the quality of their work which results in grade upgradations!",
    },
    {
      title: "Premium Study Material",
      discription:
        "We provide our students with some premium quality study material can use for getting some first-hand knowledge for their essays!",
    },
    {
      title: "Research Exposure",
      discription:
        "A perfect is all about good research work which is why we provide our students with exposure to some high-quality research forums!",
    },
    {
      title: "Expert Advice",
      discription:
        "Our essay experts can help you formulate your ideas into masterpieces with the help of the ample experience that they have on hand!",
    },
    {
      title: "Free Tools Access",
      discription:
        "When students sign up for our essay help, we offer them some amazing free tools that they can use to upgrade the quality of their essays!",
    },
    {
      title: "Free Proofreading",
      discription:
        "We understand that essays are one of the most daunting task thus we help them by providing them with a free plagiarism check of their work!",
    },
  ];

  // const dataReview = [
  //   {
  //     title: " Stanley ",
  //     discription:
  //       "I had an incredible experience with them. The experts here are highly-professional and calm, I loved having a word with them. All in all, it was an amazing experience and I am so glad that I met these people!   ",
  //   },
  //   {
  //     title: " Edward  ",
  //     discription:
  //       "Thank you for existing! Honestly, my academic life has become so much better and all the credit goes to these amazing experts who provide their unwavering support to students like myself. I highly recommend their essay help service! ",
  //   },
  //   {
  //     title: "  Greg ",
  //     discription:
  //       "An excellent experience! Thank you for staying with me through and through. The advice that I got from my expert was totally worth it and helped me improve the quality of my essay. Thank you so much to all the people behind this service! ",
  //   },
  //   {
  //     title: "  Craine   ",
  //     discription:
  //       "My friend recommended this amazing platform as I was really worried about my essay. And, she was right! This platform is a real grade saver. Not only did they help me with all the research work but also provided some amazing tutoring!  ",
  //   },
  //   {
  //     title: "  Martin   ",
  //     discription:
  //       "To say that this platform is amazing would be an understatement! I am shook at how great and helpful these professionals are! They have perhaps one of the best essay tutoring services and I am a fan now! Glad to have picked this platform for assistance!    ",
  //   },
  //   {
  //     title: "   Lindsay   ",
  //     discription:
  //       "Great service I must say. They not only helped me with my essay but also made sure that I get to learn new academic skills that would help me in the longer run. I am amazed at how an online tutoring service can be so proficient and fulfilling!    ",
  //   },
  //   {
  //     title: "   Gerald   ",
  //     discription:
  //       "Love how their services are super affordable yet super reliable! I was looking for a service that helps me with my essay but also doesn’t cost me an arm and leg. This is the platform that I had been searching for. A solid 10/10 from my side!     ",
  //   },
  // ];
  const dataReview = [
    {
      title: "Stanley",
      discription:
        "I had an incredible experience with them. The experts here are highly professional and calm. I loved having a word with them. All in all, it was an amazing experience, and I am so glad that I met these people!"
    },
    {
      title: "Edward",
      discription:
        "Thank you for existing! Honestly, my academic life has become so much better, and all the credit goes to these amazing experts who provide their unwavering support to students like myself. I highly recommend their essay help service!"
    },
    {
      title: "Greg",
      discription:
        "An excellent experience! Thank you for staying with me through and through. The advice that I got from my expert was totally worth it and helped me improve the quality of my essay. Thank you so much to all the people behind this service!"
    },
    {
      title: "Craine",
      discription:
        "My friend recommended this amazing platform as I was really worried about my essay. And she was right! This platform is a real grade saver. Not only did they help me with all the research work, but they also provided some amazing tutoring!"
    },
    {
      title: "Martin",
      discription:
        "To say that this platform is amazing would be an understatement! I am amazed at how great and helpful these professionals are! They have perhaps one of the best essay tutoring services, and I am a fan now! Glad to have picked this platform for assistance!"
    },
    {
      title: "Lindsay",
      discription:
        "Great service, I must say. They not only helped me with my essay but also made sure that I get to learn new academic skills that would help me in the longer run. I am amazed at how an online tutoring service can be so proficient and fulfilling!"
    },
    {
      title: "Gerald",
      discription:
        "Love how their services are super affordable yet super reliable! I was looking for a service that helps me with my essay but also doesn’t cost me an arm and a leg. This is the platform that I had been searching for. A solid 10/10 from my side!"
    }
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
// const guruData = [
//   {
//     img: 'assets/img/slider/avatar12.jpg',
//     name: 'Alice V. Cobb',
//     title: 'Expertise',
//     discription: 'Business Essay Writing, History, Research Skills',
//     rating: 'Ratings (4.95)'
//   },
//   {
//     img: 'assets/img/slider/avatar13.jpg',
//     name: 'Bob M. Smith',
//     title: 'Expertise',
//     discription: 'English Literature, Writing Skills, Essay Structure',
//     rating: 'Ratings (4.8)'
//   },
//   {
//     img: 'assets/img/slider/avatar14.jpg',
//     name: 'peter P. Johnson',
//     title: 'Expertise',
//     discription: 'History, Research Skills, Academic Writing',
//     rating: 'Ratings (4.9)'
//   },
//   {
//     img: 'assets/img/slider/avatar15.jpg',
//     name: 'John K. Davis',
//     title: 'Expertise',
//     discription: 'Psychology, Critical Thinking, Essay Analysis',
//     rating: 'Ratings (4.7)'
//   },
//   {
//     img: 'assets/img/slider/avatar16.png',
//     name: 'Alex L. Thompson',
//     title: 'Expertise',
//     discription: 'Sociology, Argumentative Writing, Essay Editing',
//     rating: 'Ratings (4.6)'
//   },
//   {
//     img: 'assets/img/slider/avatar17.png',
//     name: 'Michael R. Wilson',
//     title: 'Expertise',
//     discription: 'Philosophy, Logic, Essay Proofreading',
//     rating: 'Ratings (4.9)'
//   }
// ];
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
        headerTitle={"Submit The Best Essay With Professional Guidance, Today!"}
        smallText={
          " We can help you draft the most amazing essay that you have ever submitted! Hire our online essay help today and get ready to outshine your peers!"
        }
      />
      <FeaturesV1
        customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"
        heading={"Some Note-Worthy Features Of Our Essay Help Service!"}
        data={data}
      />
      <Helpease />

      <BlogSlider
        customClass="section-subtitle-2"
        heading={"Need Essay Help? Come Ask Us!"}
        headingTitle={"We Have Been Helping Students Worldwide"}
        text={
          "Assignment Help has been helping students worldwide in turning their regular essays into masterpieces! With that much experience and exposure, we can surely help you in scoring the best grades! All you have to do is ask us for Experts!"
        }
      />

      <ProductSliderV2
        dataReview={dataReview}
        heading={"Our Success Stories!"}
      />
      {/* <TeamV1
        heading={"The Pride Of Our Essay Help Service"}
        guruData={guruData}
      /> */}
      <BookYourtutor
        heading={"Get Essay Experts Now!"}
        text={
          "Improve the quality of your work by hiring our essay Experts now! Get a newbie discount upon registration!"
        }
      />

      <AddOnes
        heading={
          "Get The Most Proficient Essay Assistance Ever!"
        }
        text={
          "Among the hundreds of features that our essay help service has, some of the most prominent ones include:"
        }
        array={[
          "Newbie Discounts ",
          "Unlimited revisions",
          "Expert Guidance",
          "Free study material ",
          " Timeless availability",
          "Unwavering support",
        ]}
      />
      <CategoryV2
        heading={"Some astounding perks"}
        text={"From Us!"}
        categorydata={categorydata}
      />
      {/* <Text /> */}
      <Text heading1={'Deadlines will be the least of your problems now! Get our expert help!'} heading2={'Make the most of your money by getting essay experts on board!'}/>


      {/* <CallToActionV1 /> */}
      <Footer />
    </div>
  );
};

export default Portfolio_V1;
