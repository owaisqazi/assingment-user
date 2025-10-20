import React from 'react';
import Navbar from './global-components/navbar-v3';

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
import BlogSlider from './blog-components/blog-slider-v1';

const ProjectReport = () => {
    const data = [
        {
          title: "1-0n-1 Contact",
          discription:
            "Having direct communication with your Experts or expert will help you convey your requirements easily.",
        },
        {
          title: "Client-First Policy",
          discription:
            "From cash-back guarantees to free unlimited revisions, we go to all lengths to keep our clients happy!",
        },
        {
          title: "Always On Time ",
          discription:
          "There is no better way to meet your impossible deadlines than a service that always delivers on time!",
        },
        {
          title: "Accurate Content",
          discription:
            "We provide study material, sources, and samples that are verified and accurate for your assistance.",
        },
        {
          title: "Ph.D. Specialists",
          discription:
            "Assignment Help has multiple departments for each subject, all with experts having postgraduate degrees.",
        },
        {
          title: "User-Friendly",
          discription:
            "Our page is easy to use and accessible from any device to help you place orders within a few seconds.",
        }
      ];
     
      const dataReview = [
        {
          title: "Sophie Johnson",
          discription: "I struggled with understanding complex concepts, but thanks to Assignment Help, I was able to improve my understanding and boost my grades. Their support and guidance were invaluable!",
        },
        {
          title: "Oliver Smith",
          discription: "I can't thank Assignment Help enough for their essay writing service. They helped me enhance my writing skills and provided excellent guidance throughout the process. Highly recommended!",
        },
        {
          title: "Emma Thompson",
          discription: "I had an amazing experience with this platform. The experts not only helped me with my research work but also provided valuable insights to improve the overall quality of my essay. I'm truly grateful!",
        },
        {
          title: "William Davis",
          discription: "A friend recommended Assignment Help to me, and I'm so glad I tried their services. They exceeded my expectations with their exceptional Experts and assistance. It's definitely a grade-saving platform!",
        },
        {
          title: "Sophia Wilson",
          discription: "I'm thoroughly impressed with the professionalism and expertise of the Experts at Assignment Help. They not only helped me with my essay but also equipped me with valuable academic skills. Highly satisfied!",
        },
        {
          title: "Ethan Brown",
          discription: "The affordability and reliability of Assignment Help are unbeatable. They provided top-notch assistance with my essay without breaking the bank. I would rate them 10/10!",
        },
        {
          title: "Ava Johnson",
          discription: "I'm amazed at the comprehensive and fulfilling services provided by Assignment Help. Their online Acadamic helped me improve my academic skills and achieve better results. Highly recommended!",
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
        img: 'assets/img/slider/avatar7.webp', 
        name: 'John David',
        title: 'Expertise',
        discription: 'Marketing, Sales, Project Management',
        rating: 'Ratings (4.8)'
      },
      {
        img: 'assets/img/slider/avatar13.jpg',
        name: 'Jane Smith',
        title: 'Expertise',
        discription: 'Graphic Design, Branding, Illustration',
        rating: 'Ratings (4.9)'
      },
      {
        img: 'assets/img/slider/avatar15.jpg',
        name: 'Mike Johnson',
        title: 'Expertise',
        discription: 'Software Development, Data Science',
        rating: 'Ratings (4.7)'
      },
      {
        img: 'assets/img/slider/avatar20.png',
        name: 'Allen Thompson',
        title: 'Expertise',
        discription: 'Finance, Accounting, Economics',
        rating: 'Ratings (4.6)'
      },
      {
        img: 'assets/img/slider/avatar19.png',
        name: 'Alex Wilson',
        title: 'Expertise',
        discription: 'Photography, Videography, Editing',
        rating: 'Ratings (4.9)'
      },
      {
        img: 'assets/img/slider/avatar24.png',
        name: 'Mark v David',
        title: 'Expertise',
        discription: 'Writing, Editing, Content Strategy',
        rating: 'Ratings (4.8)'
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
            headerTitle={"Simplify Project Report Writing With Expert Help"}
            smallText={
              "Too confused to compose a project report? Don’t worry! With the help of Assignment Help specialists, consider your entire project report done."
            }
          />
          <FeaturesV1
            customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"
            heading={"What Guarantees Your Satisfaction?"}
            data={data}
          />
          <Helpease />
    
          <BlogSlider
            customClass="section-subtitle-2"
            heading={"We Have A Huge Fan-Following Of Loyal Clients From The Best Colleges"}
            headingTitle={"Recommended by students around the world"}
            text={
              "Assignment Help is a leading service in the industry of project report writing support and learning assistance for years. Our service has been tried, tested, and loved by students from every corner of the world including the following colleges"
            }
          />
    
          <ProductSliderV2
            dataReview={dataReview}
            heading={"Honest Reviews"}
          />
          <TeamV1
            heading={"Explore Our Team From The Pool Of Profiles"}
            guruData={guruData}
          />
          <BookYourtutor
            heading={"Let’s Connect You To Experts"}
            text={
              " Find the most suitable project report writing help instantly! Get discounts on your first order."
            }
          />
    
          <AddOnes
            heading={
              "Sign Up To Avail Infinite Perks!"
            }
            text={
              "Assignment Help looks for ways to reward you. Thousands of students who sign up for our project report writing services get to enjoy countless service features. Here, have a look and find out for yourself!"
            }
            array={[
              "Tons of discount opportunities",
              "Make your work plagiarism-free",
              "A lifetime solution for all academic problems",
              "No space for errors and mistakes",
              "Results that you would be proud of",
              "Learn with the best experts",
            ]}
          />
          <CategoryV2
            heading={"A range of exciting"}
            text={"Features"}
            categorydata={categorydata}
          />
          {/* <Text /> */}
          <Text heading1={'Let’s Take Your Project Report From Average To Perfect'} heading2={'Assignment Help: A Trusted Solution For Project Report Writing'}/>
    
    
          {/* <CallToActionV1 /> */}
          <Footer />
        </div>
      );
}

export default ProjectReport