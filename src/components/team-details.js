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

const Team_Details = () => {
    const data = [
        {
          title: "Get Better Scores",
          discription:
            "Looking to get better grades in your exams, assignments, etc.? Our video solutions boost your grades.",
        },
        {
          title: "Simplify Concepts",
          discription:
            "Have trouble preparing for your exams? Our video solutions will make even the hardest concepts easy.",
        },
        {
          title: "Subject Specific ",
          discription:
            "Whether you are dealing with math or computer science, our video solutions cover all possible domains.",
        },
        {
          title: "Live Consultation",
          discription:
            "Worried about your lack of skills or knowledge? Our Experts will enable you to face any task confidently.",
        },
        {
          title: "Within Your Budget",
          discription:
            "We provide the best value for your buck by providing affordable cost packages & discounts to all clients.",
        },
        {
          title: "Top Ratings",
          discription:
            "Our track record speaks for us. We have facilitated clients who return to leave positive reviews for us.",
        }
      ];
     
      const dataReview = [
        {
          title: "  Brie Martindale ",
          discription:
            "I suffer from a condition that makes it hard for me to comprehend mathematical concepts. I am so happy to have found Assignment Help for help because they helped me the same way an in-person Experts would have assisted if they taught me at my place.    ",
        },
        {
          title: " Edward  ",
          discription:
            "Thank you for existing! Honestly, my academic life has become so much better and all the credit goes to these amazing experts who provide their unwavering support to students like myself. I highly recommend their essay help service! ",
        },
        {
          title: "  Greg ",
          discription:
            "An excellent experience! Thank you for staying with me through and through. The advice that I got from my expert was totally worth it and helped me improve the quality of my essay. Thank you so much to all the people behind this service! ",
        },
        {
          title: "  Craine   ",
          discription:
            "My friend recommended this amazing platform as I was really worried about my essay. And, she was right! This platform is a real grade saver. Not only did they help me with all the research work but also provided some amazing Acadamic!  ",
        },
        {
          title: "  Martin   ",
          discription:
            "To say that this platform is amazing would be an understatement! I am shook at how great and helpful these professionals are! They have perhaps one of the best essay Acadamic services and I am a fan now! Glad to have picked this platform for assistance!    ",
        },
        {
          title: "   Lindsay   ",
          discription:
            "Great service I must say. They not only helped me with my essay but also made sure that I get to learn new academic skills that would help me in the longer run. I am amazed at how an online Acadamic Help service can be so proficient and fulfilling!    ",
        },
        {
          title: "   Gerald   ",
          discription:
            "Love how their services are super affordable yet super reliable! I was looking for a service that helps me with my essay but also doesn’t cost me an arm and leg. This is the platform that I had been searching for. A solid 10/10 from my side!     ",
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
        img: 'assets/img/slider/avatar12.jpg',
        name: 'John David',
        title: 'Expertise',
        discription: 'Marketing, Sales, Leadership',
        rating: 'Ratings (4.8)'
      },
      {
        img: 'assets/img/slider/avatar20.png',
        name: 'Jane Smith',
        title: 'Expertise',
        discription: 'Finance, Accounting, Economics',
        rating: 'Ratings (4.9)'
      },
      {
        img: 'assets/img/slider/avatar18.jpg',
        name: 'Mark Johnson',
        title: 'Expertise',
        discription: 'Software Development, Programming',
        rating: 'Ratings (4.7)'
      },
      {
        img: 'assets/img/slider/avatar8.jpg',
        name: 'Jack Williams',
        title: 'Expertise',
        discription: 'Graphic Design, Illustration',
        rating: 'Ratings (4.6)'
      },
      {
        img: 'assets/img/slider/avatar18.jpg',
        name: 'Michael Brown',
        title: 'Expertise',
        discription: 'Data Analysis, Statistics',
        rating: 'Ratings (4.8)'
      },
      {
        img: 'assets/img/slider/avatar21.png',
        name: 'Henry Davis',
        title: 'Expertise',
        discription: 'Communication, Public Speaking',
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
            headerTitle={"Decode Advanced Concepts With Video Solutions"}
            smallText={
                "Whether you are struggling with algebra or python, find the answers to your queries through our supplemental learning tool at Assignment Help."
            }
          />
          <FeaturesV1
            customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"
            heading={"Qualities That Set Us Apart"}
            data={data}
          />
          <Helpease />
    
          <BlogSlider
            customClass="section-subtitle-2"
            heading={"We Hire Only The Finest Experts From The Top Colleges Of The World"}
            headingTitle={"Our experts are affiliated with the best colleges"}
            text={
              "The secret behind the quality of our service is the fact thatAssignment Help has a meticulous hiring process to hire educational support providers for students. We hire only the best because it enables us to help students from the world’s no#1 colleges such as:"
            }
          />
    
          <ProductSliderV2
            dataReview={dataReview}
            heading={"Customer Ratings"}
          />
          <TeamV1
            heading={"Meet The Experts Behind Clients’ Success"}
            guruData={guruData}
          />
          <BookYourtutor
            heading={"Let’s Get You Started!"}
            text={
              "Looking for instant solutions? They are just a click away! Enjoy easy access to experts!"
            }
          />
    
          <AddOnes
            heading={
              "Perks That Add Value To Our Service  "
            }
            text={
              "If you decide to hireAssignment Help, you are in for some amazing service benefits that ensure that you get the best value for your money. Here is how we maximize the benefits to keep you happy:"
            }
            array={[
              "No need for registration",
              "Save money with discounts",
              "Access our support 24/7",
              "Say goodbye to your struggles",
              "Fastest solutions to your queries",
              "A guarantee for improvement",
            ]}
          />
          <CategoryV2
            heading={"Ready to avail"}
            text={"Rewards"}
            categorydata={categorydata}
          />
          {/* <Text /> */}
          <Text heading1={'World’s Best Video Solutions Under One Roof'} heading2={'Video Solutions That Fit Your Needs'}/>
    
    
          {/* <CallToActionV1 /> */}
          <Footer />
        </div>
      );
}

export default Team_Details

