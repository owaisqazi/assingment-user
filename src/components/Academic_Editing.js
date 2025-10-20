import React from 'react'
import Navbar from "./global-components/navbar-v3";
import BannerV5 from "./section-components/banner-v5";
import Footer from "./global-components/footer";
import CategoryV2 from "./section-components/category-v2";

const Academic_Editing = () => {
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
    <>
     <Navbar CustomClass="ltn__header-transparent gradient-color-2" />
    <BannerV5
        headerTitle={"Services for pre-submission and research communication to enhance your publication."}
        // typeWriterValue={[
        //     "Receive expert assistance in dissertation writing from a professional thesis writer to",
        //     "achieve honors upon graduation.",
        // ]}
        smallText={
            ""
        }
    />
    <div className="container mt-50 mb-0">
    <div className="text-center">
        <p>Are you seeking assistance in preparing your manuscript for submission to a journal and promoting your published article to a broader audience? Taylor & Francis provides a comprehensive range of services to handle the refinement of your manuscript and enhance its impact, allowing you to focus on your research.</p>
        <span className='usa_color text-decoration-underline'>The services we provide.</span>
    </div>
    </div>
        <CategoryV2
        heading={"Exciting Benefits Which You"}
        text={"Shouldn’t Overlook!"}
        categorydata={categorydata}
      />

<Footer />
    </>
  )
}

export default Academic_Editing
