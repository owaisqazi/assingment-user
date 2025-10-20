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

const Team_V1 = () => {
    const data = [
        {
          title: "Unwavering Support",
          discription:
            "We provide our students with timeless support which means that we are available for them at all time to ensure unwavering academic support to them!",
        },
        {
          title: "Original Content",
          discription:
            "The main reason why students from all over the world believe in us is because we offer no compromise on originality when it comes to our students!",
        },
        {
          title: "Research Exposure ",
          discription:
            "A perfect is all about good research work which is why we provide our students with exposure to some high-quality research forums for them to explore!",
        },
        {
          title: "Reliable Experts ",
          discription:
          "Our speech professionals are one of the most talented ones in the market and based on their amazing experience, students can completely rely on them!",
        },
        {
          title: "Vocal Experts",
          discription:
            "Our Experts not only help you out in writing a power-packed speech, they also give you some amazing tips that you can use for your speech deliverance!",
        },
        {
          title: "Affordable Pricing",
          discription:
            "We try to keep our service charges as low as we can to ensure that all students get equal opportunities to nail their speeches!",
        }
      ];
      
      const dataReview = [
        {
          title: "  Brie Martindale ",
          discription:
            "I suffer from a condition that makes it hard for me to comprehend mathematical concepts. I am so happy to have found Assignment Help for help because they helped me the same way an in-person Experts would have assisted if they taught me at my place. Great job overall!    ",
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
            "My friend recommended this amazing platform as I was really worried about my essay. And, she was right! This platform is a real grade saver. Not only did they help me with all the research work but also provided some amazing Academic Help!  ",
        },
        {
          title: "  Martin   ",
          discription:
            "To say that this platform is amazing would be an understatement! I am shook at how great and helpful these professionals are! They have perhaps one of the best essay Acadamic services and I am a fan now! Glad to have picked this platform for assistance!    ",
        },
        {
          title: "   Lindsay   ",
          discription:
            "Great service I must say. They not only helped me with my essay but also made sure that I get to learn new academic skills that would help me in the longer run. I am amazed at how an online Acadamic service can be so proficient and fulfilling!    ",
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
        img: 'assets/img/slider/avatar24.png',
        name: 'John David',
        title: 'Speech Enhancement Expert',
        discription: 'Transforms ordinary speeches into extraordinary experiences',
        rating: 'Ratings (4.9)',
      },
      {
        img: 'assets/img/slider/avatar25.png',
        name: 'Jane Alezender',
        title: 'Confidence Coach',
        discription: 'Empowers individuals to speak with confidence and conviction',
        rating: 'Ratings (4.8)',
      },
      {
        img: 'assets/img/slider/avatar26.jpg',
        name: 'Mike Johnson',
        title: 'Storytelling Specialist',
        discription: 'Masters the art of storytelling to captivate and inspire audiences',
        rating: 'Ratings (4.9)',
      },
      {
        img: 'assets/img/slider/avatar10.png',
        name: 'Mark L Wilson',
        title: 'Public Speaking Mentor',
        discription: 'Guides individuals in honing their public speaking skills for success',
        rating: 'Ratings (4.7)',
      },
      {
        img: 'assets/img/slider/avatar13.jpg',
        name: 'David Thompson',
        title: 'Presentation Expert',
        discription: 'Crafts impactful presentations that leave a lasting impression',
        rating: 'Ratings (4.8)',
      },
      {
        img: 'assets/img/slider/avatar18.jpg',
        name: 'Farank Davis',
        title: 'Speech Transformation Coach',
        discription: 'Helps individuals transform their speeches for maximum impact',
        rating: 'Ratings (4.9)',
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
            headerTitle={"Need Help With Composing The Most Astounding Speech?"}
            smallText={
               " Are you looking forward to impressing your audience by delivering the best speech of all time? Hire our speech professionals to guide you!"
            }
          />
          <FeaturesV1
            customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"
            heading={"This Is How We Remain To Be The Best!"}
            data={data}
          />
          <Helpease />
    
          <BlogSlider
            customClass="section-subtitle-2"
            heading={"Needless To Mention –Prestigious Universities"}
            headingTitle={"Our Experts Belong To Diverse Backgrounds "}
            text={
              "Assignment Help stays very vigilant about the quality of assistance that it provides to its students which is why only the most proficient experts are allowed to interact with you! These experts belong from various prestigious backgrounds including:"
            }
          />
    
          <ProductSliderV2
            dataReview={dataReview}
            heading={"Our Hall Of Fame!"}
          />
          <TeamV1
            heading={"The Pride Of Our Speech Help Service"}
            guruData={guruData}
          />
          <BookYourtutor
            heading={"Need Fool-Proof success?"}
            text={
              " Get our speech professionals on board now! Get a newbie discount upon registration!"
            }
          />
    
          <AddOnes
            heading={
              "Deliver A Speech That Is Worth Remembering!"
            }
            text={
              "If you are looking for foolproof ways to impress your audience, ask our speech professionals for some tips! We provide"
            }
            array={[
              "Skill Enhancement",
              "Professional Guidance",
              "Research World Access",
              "24/7 Assistance",
              " Unwavering support",
              "Budget-friendly Pricing",
            ]}
          />
          <CategoryV2
            heading={"Some Amazing Benefits"}
            text={"For You!"}
            categorydata={categorydata}
          />
          {/* <Text /> */}
          <Text heading1={'Simply Complex Concepts Through Our Live Sessions'} heading2={'Your Success Is Just One Live Session Away!'}/>
    
    
          {/* <CallToActionV1 /> */}
          <Footer />
        </div>
      );
}

export default Team_V1

