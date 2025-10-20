import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import ContactForm from "./contact-form";
const TeamV1 = ({ heading, Linkheading, guruData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <div className="ltn__team-area pt-115 pb-90 go-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                Team
              </h6>
              <h1 className="section-title">
                {heading}
                <span onClick={handleShow}>{Linkheading}</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {guruData.map((data, index) => (
            <div className="col-lg-4 col-sm-6" key={index}>
              <div className="ltn__team-item ltn__team-item-3---">
                <div className="team-img">
                  <img
                    src={publicUrl + data.img}
                    alt="Images"
                    height={"300px"}
                  />
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/contact">{data.name}</Link>
                  </h4>
                  <h6 className="ltn__secondary-color">{data.title}</h6>
                  <p>{data.discription} </p>
                  <p>{data.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Modal  show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Contact With Expert</Modal.Title>
          </Modal.Header>
          <Modal.Body>
			<ContactForm/>
		  </Modal.Body>
         
        </Modal>
      </div>
    </div>
  );
}

export default TeamV1;