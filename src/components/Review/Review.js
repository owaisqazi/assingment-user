/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navbar from "../global-components/navbar-v3";
import BannerV5 from "../section-components/banner-v5";
import Footer from "../global-components/footer";
import ReviewComponent from "./ReviewComponent";
import Reviewslider_v2 from "./Reviewslider-v2";
const Review = () => {
  const WebsiteReview = [
    {
      title: "Essay Help",
      discription:
        "Wow! Incredible services.  I must say their Experts are professional and very cooperative. Due to them I can now write amazing essays.",
        star:"★ ★ ★ ★ ☆",
        date:"25 dec 2024"
    },
    {
      title: "Presentation Writing ",
      discription:
        "Had the best online learning experience! The Experts helped me in making my presentation and also provided smart tips that caused me to score highest marks in the class.",
        star:"★ ★ ★ ★ ☆",
        date:"25 dec 2024"
    },
    {
      title: " Lab Report Writing",
      discription:
        "I must say they are the best place to seek help. Because of them I was able to submit an excellent lab report. Thank You.",
        star:"★ ★ ★ ★ ☆",
        date:"25 dec 2024"
    },
    {
      title: " Math Solver ",
      discription:
        "The Experts I was given was far better than my Math teacher. Thank you so much for helping me with my Math problems. ",
        star:"★ ★ ★ ★ ☆",
        date:"25 dec 2024"
    },
    {
      title: "  Assignment Help  ",
      discription:
        "I am highly grateful to my Experts for explaining me the assignment so deeply. Without them I wouldn’t be able to submit my assignment on time.   ",
        star:"★ ★ ★ ★ ☆",
        date:"25 dec 2024"
    },
    {
      title: "  Video Sessions   ",
      discription:
        "I advise everyone to take their video sessions. They are amazing and helped me in understanding many topics easily. Keep the good work up!  ",
        star:"★ ★ ★ ★ ☆",
        date:"25 dec 2024"
    },
    {
      title: "   Speech Writing    ",
      discription:
        "Best service at best price rates. Their Experts are amazing and helped me with my speech writing. Thank you so much.    ",
        star:"★ ★ ★ ★ ☆",
        date:"25 dec 2024"
    },
  ];
  const OtherReview = [
    {
      title: "Veronica / Ronni",
      discription:
        "I was searching for composing help for my exploration paper and my companion recommended me to contact this site. I checked the examples and sites and chose to take composing help. I am so content with my choice as I got An in my paper. Much appreciated!",
        star:"★ ★ ★ ★ ☆",
        date:"25 dec 2024"
    },
    {
      title: "John Burger / Driff",
      discription:
        "Because of absence of time, I can't alter and re-read my theory. So I chose to take the assistance of this site. These individuals edit and altered the record very well so that there are no mistakes. So thankful for these folks!",
        star:"★ ★ ★ ★ ☆",
        date:"25 dec 2024"
    },
    {
      title: "JMaria / Mia",
      discription:
        "Finding support on my proposition was the best choice. I have an extraordinary recognize that I've generally longed for. Much thanks to you to each and every individual who made my fantasies work out. Appreciative!!!",
        star:"★ ★ ★ ★ ☆",
        date:"25 dec 2024"
    },
    {
      title: "Fernanda / Fer",
      discription:
        "Today I got the aftereffects of the test you ready for me. I got A + in it. I'm so cheerful. I would never have scored such valid statements all alone. Much obliged!!!",
        star:"★ ★ ★ ★ ☆",
        date:"25 dec 2024"
    },
    {
      title: "Mazz / Kitt",
      discription:
        "Many thanks for aiding me in my exploration work for this venture around then. It is consoling get-togethers tests. Much obliged.!!",
        star:"★ ★ ★ ★ ☆",
        date:"25 dec 2024"
    },
    {
      title: "Sophia / Emmi",
      discription:
        "This site rings a bell at whatever point I need assistance with my administration expositions. The explanation is they have incredible scholars who compose great papers for me. I wouldn't have had the option to get a decent score in the event that I didn't get support from this site.",
        star:"★ ★ ★ ★ ☆",
        date:"25 dec 2024"
    },
    {
      title: "William / Smit",
      discription:
        "I was searching for help composing my exploration paper and my companion recommended that I contact this site. I took a gander at the models and web journals and chose to request assist with composing. I'm exceptionally content with my choice when I got An in my article. Much obliged!",
        star:"★ ★ ★ ★ ☆",
        date:"25 dec 2024"
    },
    {
      title: "Jhon / Cardiff",
      discription:
        "As a non-English speaker, I think that its hard to compose my theory impeccably. I had terrible grades on my past tests, however presently I have passing marks. It simply happened on account of this site. Much thanks to all of you!",
        star:"★ ★ ★ ★ ☆",
        date:"25 dec 2024"
    },
  ];
  return (
    <div>
      <Navbar CustomClass="ltn__header-transparent gradient-color-2" />
      <BannerV5
        headerTitle={"Reviews"}
        typeWriterValue={[
          "Or half-hearted? Check out our real reviews!",
          "Hear the opinions of our 98% satisfied customers",
        ]}
        smallText={
          ""
        }
      />
      <ReviewComponent
      customClass="ltn__feature-area section-bg-1 py-5 mb-120---"
      heading={"Recently Website Reviews"}
      />

      <Reviewslider_v2 dataReview={WebsiteReview} />
      <ReviewComponent
      customClass="ltn__feature-area section-bg-1 py-5 mb-120---"
      heading={"Recently Other Platform Reviews"}
      />
      <Reviewslider_v2 dataReview={OtherReview} />
      <Footer />
    </div>
  );
};

export default Review;
