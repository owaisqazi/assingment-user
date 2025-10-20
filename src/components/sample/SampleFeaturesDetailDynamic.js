/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Footer from '../global-components/footer';
import NavbarV3 from '../global-components/navbar-v3';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import SampleFeaturesDetailDynamicComponent from './SampleFeaturesDetailDynamicComponent';
import Sample_Page_header from './Sample-page-header';

const SampleFeaturesDetailDynamic = () => {
    const { name } = useParams();
    const originalTitle = name.replace(/-/g, ' ')
    return <div>
        <NavbarV3 />
        <Sample_Page_header headertitle={originalTitle} />
        <SampleFeaturesDetailDynamicComponent
        customClass="ltn__feature-area section-bg-1 py-5 mb-120---"
        heading={`Report on ${originalTitle}`}
      />
        <Footer />
    </div>
}

export default SampleFeaturesDetailDynamic

