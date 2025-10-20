import React from 'react';
import Navbar from './global-components/navbar-v3';
import BlogSlider from './blog-components/blog-slider-v1';
import ProductSliderV2 from "./section-components/product-slider-v2";
import Footer from './global-components/footer';
import BannerV5 from './section-components/banner-v5';
import FeaturesV1 from './section-components/features-v1';
import Helpease from './section-components/Helpease';
import TeamV1 from './section-components/team-v1';
import BookYourtutor from './section-components/BookYourtutor';
import AddOnes from './section-components/AddOnes';
import CategoryV2 from './section-components/category-v2';
import Text from './section-components/Text';

const PortfolioV2 = () => {
    const data = [
        {
          title: "Ensured Confidentiality",
          discription:
            "No need to worry while entering your details because we keep everything private and confidential.",
        },
        {
          title: "Guaranteed Perfection",
          discription:
            "Assignment Help does not settle for anything less than perfect! You can count on us for error-free work.",
        },
        {
          title: "Value For Your Buck ",
          discription:
            "We have flexible rates for all kinds of orders to help you avail the best deal & make every penny count.",
        },
        {
          title: "Boost Confidence",
          discription:
            "Worried about your lack of skills or knowledge? Our Experts will enable you to face any task confidently.",
        },
        {
          title: "Specialized Assistance",
          discription:
            "Even the hardest projects are easy for us. We assign them to the expert who has a Ph.D. in that domain.",
        },
        {
          title: "Prompt Response",
          discription:
            "Need help with your learning? Reach out to us and our representatives will facilitate you at the earliest",
        }
      ];
      
      // const dataReview = [
      //   {
      //     title: "  Brie Martindale ",
      //     discription:
      //       "I suffer from a condition that makes it hard for me to comprehend mathematical concepts. I am so happy to have found Assignment Help for help because they helped me the same way an in-person tutor would have assisted if they taught me at my place. Great job overall!    ",
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
          title: "Alice Johnson",
          discription:
            "I suffer from a condition that makes it hard for me to comprehend mathematical concepts. I am so happy to have found Assigment Help for help because they assisted me the same way an in-person Experts would have at my place. Great job overall!"
        },
        {
          title: "John Anderson",
          discription:
            "Thank you for existing! Honestly, my academic life has become so much better, and all the credit goes to these amazing experts who provide their unwavering support to students like myself. I highly recommend their essay help service!"
        },
        {
          title: "Emily Parker",
          discription:
            "An excellent experience! Thank you for staying with me through and through. The advice that I got from my expert was totally worth it and helped me improve the quality of my essay. Thank you so much to all the people behind this service!"
        },
        {
          title: "Michael Thompson",
          discription:
            "My friend recommended this amazing platform as I was really worried about my essay. And she was right! This platform is a real grade saver. Not only did they help me with all the research work, but they also provided some amazing Experts!"
        },
        {
          title: "Sarah Roberts",
          discription:
            "To say that this platform is amazing would be an understatement! I am amazed at how great and helpful these professionals are! They have perhaps one of the best essay Experts services, and I am a fan now! Glad to have picked this platform for assistance!"
        },
        {
          title: "Daniel Evans",
          discription:
            "Great service, I must say. They not only helped me with my essay but also made sure that I get to learn new academic skills that would help me in the longer run. I am amazed at how an online Experts service can be so proficient and fulfilling!"
        },
        {
          title: "Sophia Mitchell",
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
    const guruData = [
      {
        img: 'assets/img/slider/avatar18.jpg',
        name: 'Robert D Jhon',
        title: 'Expertise',
        discription: 'Business Technology, Resource Program, Social Studies, Health',
        rating: 'Ratings (4.95)'
      },
      {
        img: 'assets/img/slider/avatar19.png',
        name: 'Bob M. Smith',
        title: 'Expertise',
        discription: 'Computer Science, Programming, Data Analysis',
        rating: 'Ratings (4.8)'
      },
      {
        img: 'assets/img/slider/avatar20.png',
        name: 'Hangry P. Johnson',
        title: 'Expertise',
        discription: 'Marketing, Digital Advertising, Market Research',
        rating: 'Ratings (4.9)'
      },
      {
        img: 'assets/img/slider/avatar21.png',
        name: 'John K. Davis',
        title: 'Expertise',
        discription: 'Finance, Investment, Financial Planning',
        rating: 'Ratings (4.7)'
      },
      {
        img: 'assets/img/slider/avatar22.jpg',
        name: 'David L. Thompson',
        title: 'Expertise',
        discription: 'Art, Design, Creative Writing',
        rating: 'Ratings (4.6)'
      },
      {
        img: 'assets/img/slider/avatar23.jpg',
        name: 'Michael R. Wilson',
        title: 'Expertise',
        discription: 'Language Learning, Linguistics, Translation',
        rating: 'Ratings (4.9)'
      }
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
            headerTitle={"Avail Live Sessions To Upgrade Your Knowledge"}
            smallText={
              "Can’t find a good explanation for your topics on the internet? Don’t worry! We can explain any concept easily through our live sessions at Assignment Help."
            }
          />
          <FeaturesV1
            customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"
            heading={"How We Ensure Premium Assistance"}
            data={data}
          />
          <Helpease />
    
          <BlogSlider
            customClass="section-subtitle-2"
            heading={"We Hire Only The Finest Experts From The Top Colleges Of The World"}
            headingTitle={"Our experts are affiliated with the best colleges"}
            text={
              "The secret behind the quality of our service is the fact that Assignment Help has a meticulous hiring process to hire educational support providers for students. We hire only the best because it enables us to help students from the world’s no#1 colleges such as:"
            }
          />
    
          <ProductSliderV2
            dataReview={dataReview}
            heading={"Clients’ Stories"}
          />
          <TeamV1
            heading={"We Are Proud To Present Our Expert Team"}
            guruData={guruData}
          />
          <BookYourtutor
            heading={"Request 1-On-1 Consultation!"}
            text={
              " Request to connect with your online expert for any queries! Apply for a discount now!"
            }
          />
    
          <AddOnes
            heading={
              "Check Out The Amazing Benefits"
            }
            text={
              "Students swear by the benefits of hiring Assignment Help for a very valid reason. We offer hundreds of awesome features to clients who use our live sessions service. Here are a few of those perks:"
            }
            array={[
              "Results that make you go ‘wow’",
              "Experts who are dedicated to your success",
              "A lifetime opportunity for learning",
              "Enhance your skills and talents",
              " A safe platform for students",
              "Designed to help you grow",
            ]}
          />
          <CategoryV2
            heading={"A service full of"}
            text={"Rewards"}
            categorydata={categorydata}
          />
          {/* <Text /> */}
          <Text heading1={'Simply Complex Concepts Through Our Live Sessions'} heading2={'Your Success Is Just One Live Session Away!'}/>
    
    
          {/* <CallToActionV1 /> */}
          <Footer />
        </div>
      );
}

export default PortfolioV2

