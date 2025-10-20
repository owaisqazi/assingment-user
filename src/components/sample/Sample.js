import React from "react";
import Navbar from "../global-components/navbar-v3";
import PageHeader from "../global-components/page-header";
import Footer from "../global-components/footer";
import SampleFeatures from "./SampleFeatures";

const Sample = () => {
  return (
    <div>
      <Navbar />
      <PageHeader
        img="../../../assets/img/slider/uni4.webp"
        headertitle="Get help from the FREE samples delivered by our expert writers"
        subheader="Sample"
        smallText={"The assignment-Writing"}
      />
      <SampleFeatures
        customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"
        heading={"Get the Best Samples to Improve Your Grade"}
        text={"The assignment-Writing"}
      />
      <Footer />
    </div>
  );
};

export default Sample;
