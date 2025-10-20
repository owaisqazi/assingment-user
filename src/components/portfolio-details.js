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

const Portfolio_Details = () => {
    const data = [
        {
          title: "Personalized Assistance",
          discription:
            "Whether you need help with the written part of your presentation or the animation, we help according to your needs.",
        },
        {
          title: "Active Support",
          discription:
            "No need to spend sleepless nights before your presentation. Simply find our Experts for learning support at any time.",
        },
        {
          title: "Client-Oriented ",
          discription:
            "When you hire support for presentation writing, we make sure to keep our policies in your favor to offer you a good experience.",
        },
        {
          title: "High Quality",
          discription:
            "There is absolutely no room for any compromise when it comes to the quality of our service! Hire us for premium support.",
        },
        {
          title: "Ph.D. Experts",
          discription:
            "Assignment Help is known for hiring only the best in the market and we settle for experts with at least one Ph.D. in the field.",
        },
        {
          title: "Impressive Results",
          discription:
            "We guarantee results that will blow your mind! Our specialized help makes sure you get to see significant improvement!",
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
            "My friend recommended this amazing platform as I was really worried about my essay. And, she was right! This platform is a real grade saver. Not only did they help me with all the research work but also provided some amazing Acadamic Help!  ",
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
        img:'assets/img/slider/avatar15.jpg',
        name: 'Jane Smith',
        title: 'Presentation Winning Champion',
        discription: 'Mathematics, Science, English Literature',
        rating: 'Ratings (4.2)',
      },
      {
        img:'assets/img/slider/avatar9.jpg',
        name: 'Mike Johnson',
        title: 'Presentation Winning Champion',
        discription: 'History, Geography, Economics',
        rating: 'Ratings (4.7)',
      },
      {
        img:'assets/img/slider/avatar14.jpg',
        name: 'Jone Wilson',
        title: 'Presentation Winning Champion',
        discription: 'Computer Science, Programming, Data Analysis',
        rating: 'Ratings (4.9)',
      },
      {
        img:'assets/img/slider/avatar8.jpg',
        name: 'David Thompson',
        title: 'Presentation Winning Champion',
        discription: 'Physical Education, Sports Management',
        rating: 'Ratings (4.3)',
      },
      {
        img:'assets/img/slider/avatar11.jpg',
        name: 'Sarah Davis',
        title: 'Presentation Winning Champion',
        discription: 'Art, Music, Theater',
        rating: 'Ratings (4.6)',
      },
      {
        img:'assets/img/slider/avatar16.png',
        name: 'Michaela Rodriguez',
        title: 'Presentation Winning Champion',
        discription: 'Marketing, Communication, Public Speaking',
        rating: 'Ratings (4.8)',
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
            headerTitle={"Feeling Nervous? Get Presentation Writing Help Now!"}
            smallText={
              "Is your upcoming presentation making to tremble from all the anxiousness? Hire presentation support from Assignment Help right away!"
            }
          />
          <FeaturesV1
            customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"
            heading={"Outstanding Service Features and Guarantees!"}
            data={data}
          />
          <Helpease />
    
          <BlogSlider
            customClass="section-subtitle-2"
            heading={"Assignment Help Has Assisted Students From The Best Colleges Of The World"}
            headingTitle={"Tried & tested by clients around the globe"}
            text={
              "We have a track record of facilitating students from the top colleges of the world to meet their study goals successfully. Check out the colleges from which we have the highest number of clients coming to avail academic support!"
            }
          />
    
          <ProductSliderV2
            dataReview={dataReview}
            heading={"Real Testimonials"}
          />
          <TeamV1
            heading={"Meet The Heroes Behind Winning Presentations"}
            guruData={guruData}
          />
          <BookYourtutor
            heading={"Get Access To The Best Experts"}
            text={
              "Bringing the world’s no#1 experts within your reach! Hire right away! Feeling lucky? Apply for a discount now!"
            }
          />
    
          <AddOnes
            heading={
              "Looking For An All-Rounder Service?"
            }
            text={
              "Assignment Help combines premium quality perks with the lowest rates whenever you place an order with us. Here is everything you get to enjoy when you sign up to avail specialized help with your presentation:"
            }
            array={[
              "Infinite opportunities for growth",
              "Access to the best study tools",
              "A chance to make your work error-free",
              "Avail live consultation from experts",
              "Invest in your academic future",
              "Improvement in knowledge and skills",
            ]}
          />
          <CategoryV2
            heading={"A service full of"}
            text={"Rewards"}
            categorydata={categorydata}
          />
          {/* <Text /> */}
          <Text heading1={'Create Inspiring Presentations With The Help Of Experts'} heading2={'No More Embarrassment – Hire Specialists For Killer Presentations!'}/>
    
    
          {/* <CallToActionV1 /> */}
          <Footer />
        </div>
      );
}

export default Portfolio_Details

