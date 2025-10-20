import React from "react";
import { useLocation,Link } from "react-router-dom";

const SampleFeaturesDetailHeading = ({ customClass, heading, text }) => {
  const location = useLocation();
  const details = location.state?.details || {}; // ✅ Prevents error if no details
  console.log(details,location.state, "details-->");



  return (
    <div className={customClass}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <h1 className="section-title">{heading}</h1>
              <p className="sextion-text">{text}</p>
            </div>
          </div>
          {details?.map((item, index) => (
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4"
              key={index}
            >
              <div className="SampleFeaturesDetailHeadingCard h-100 px-3">
                <Link to={{
                pathname: `/sample-feature-detail-dynamic/${encodeURIComponent(
                  item?.title?.replace(/\s+/g, "-")
                )}`,
                state: { items:item?.peragraph },
              }} className="card-body text-center">
                  <h5 className="card-title border-bottom pb-2 fw-bold">
                    {item?.title}
                  </h5>
                  <div className="text-start text-muted row">
                    <div className="col-lg-6">
                      <p className="mb-1">
                        <strong>Number of pages:</strong>
                      </p>
                      <p className="mb-1">
                        <strong>Writer’s Qualifications:</strong>
                      </p>
                      <p className="mb-1">
                        <strong>Academic level:</strong>
                      </p>
                      <p className="mb-1">
                        <strong>Tags:</strong>
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <p className="mb-1"> {item?.pages}</p>
                      <p className="mb-1">{item?.qualification}</p>
                      <p className="mb-1"> {item?.level}</p>
                      <p className="mb-1">{item?.tags}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SampleFeaturesDetailHeading;
