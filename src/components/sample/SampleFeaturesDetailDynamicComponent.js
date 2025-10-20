import React from "react";
import { useLocation } from "react-router-dom";
import DynamicContentPage from "./DynamicContentPage";

const SampleFeaturesDetailDynamicComponent = ({ customClass, heading }) => {
  const location = useLocation();
  const items = location.state?.items || {}; // ✅ Prevents error if no items
  console.log(items,location.state, "details-->");



  return (
    <>
    <div className={customClass} style={{background:"#ff5a3c"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__section-title-2--- text-center">
              <h1 className="section-title">{heading}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={customClass}>
      <DynamicContentPage items={items}/>
    </div>
    </>
  );
};

export default SampleFeaturesDetailDynamicComponent;
