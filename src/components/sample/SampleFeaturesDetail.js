/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Page_header from '../global-components/page-header';
// import BlogDetails from '../blog-components/blog-details';
import Footer from '../global-components/footer';
import NavbarV3 from '../global-components/navbar-v3';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import SampleFeaturesDetailHeading from './SampleFeaturesDetailHeading';

const SampleFeaturesDetail = () => {
    const { name } = useParams();
    const originalTitle = name.replace(/-/g, ' ')
    return <div>
        <NavbarV3 />
        <Page_header headertitle={originalTitle} />
        <SampleFeaturesDetailHeading
        customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"
        heading={`Get the Best ${originalTitle} to Improve Your Grade`}
        text={"Delivered by our expert writers"}
      />
        <Footer />
    </div>
}

export default SampleFeaturesDetail

