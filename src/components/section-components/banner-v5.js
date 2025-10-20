import React  from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import {Toaster} from 'react-hot-toast'
// import axios from "axios";



const BannerV5 = ({headerTitle,typeWriterValue,smallText}) => {
  // let publicUrl = process.env.PUBLIC_URL + "/";
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  //   agree: false,
  // });

  // const [errors, setErrors] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // });

  // const handleSubmit = () => {
  //   console.log(formData);

  //   const formDatat = new FormData();
  //   formDatat.append("name", formData.name);
  //   formDatat.append("email", formData.email);
  //   formDatat.append("phone_no", formData.phone);
  //   formDatat.append("message", formData.message);
  //   var config = {
  //     method: "post",
  //     url: "https://assignmentapi.dev-nuh.xyz/api/sent/email",
  //     data: formDatat,
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   };

  //   if (validateForm()) {
  //     axios(config)
  //       .then((response) => {
  //         console.log(response.data);
  //         if (response.data.status === true) {
  //           toast.success(response.data.message);
  //         }
  //         setFormData({
  //           name: '',
  //           email: '',
  //           phone: '',
  //           message: ''
  //         });
  //       })
  //       .catch((error) => {
  //         toast.error("Fill the from first")
  //       });
  //   }
  // };

  // const handleChange = (event) => {
  //   const { name, value, type, checked } = event.target;
  //   const fieldValue = type === "checkbox" ? checked : value;

  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: fieldValue,
  //   }));

  //   validateField(name, fieldValue);
  // };

  // const validateField = (fieldName, value) => {
  //   let errorMessage = "";

  //   switch (fieldName) {
  //     case "name":
  //       errorMessage = value ? "" : "Name is required";
  //       break;
  //     case "email":
  //       errorMessage = isValidEmail(value) ? "" : "Invalid email address";
  //       break;
  //     case "phone":
  //       errorMessage = value ? "" : "Phone number is required";
  //       break;
  //     case "message":
  //       errorMessage = value ? "" : "Message is required";
  //       break;
  //     default:
  //       break;
  //   }

  //   setErrors((prevErrors) => ({
  //     ...prevErrors,
  //     [fieldName]: errorMessage,
  //   }));
  // };

  // const validateForm = () => {
  //   let isValid = true;

  //   for (const key in formData) {
  //     if (formData.hasOwnProperty(key)) {
  //       const value = formData[key];
  //       validateField(key, value);
  //       if (errors[key]) {
  //         isValid = false;
  //       }
  //     }
  //   }

  //   return isValid;
  // };

  // const isValidEmail = (email) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };
  return (
    <div className="ltn__slider-area ltn__slider-4">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">
        {/* ltn__slide-item */}
        <div
          className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-4 bg-image bg-overlay-theme-black-60"
          // data-bs-bg={publicUrl + "assets/img/slider/bg-1.jpg"}
        >
          <div className="">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-md-12 mt-3 ltn__slide-animation text-center">
                  <h1
                    className="animated"
                    style={{ color: "white" }}
                  > 
                  {headerTitle}
                  </h1>
                  <p className="animated" style={{ color: "white", fontSize: "1.3rem" }}>
                    <Typewriter
                      options={{
                        strings: typeWriterValue,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </p>
                  {/* <h2 className="animated" style={{ color: "white" }}>
                    Online Academic help Services
                  </h2> */}
                  <p className="animated" style={{ color: "white" }}>
                   {smallText}
                  </p>
                  <div className="row justify-content-center">
                  <div className="btn-wrapper mt-0">
                    <button
                      className="theme-btn-1 px-3 btn-effect-3 text-uppercase mx-auto mb-10"
                      style={{height:'45px'}}
                      type="submit"
                    >
                      <Link className="ltn__service-btn" to={'/contact'}>Get In Touch</Link>
                    </button>
                  </div>
                  </div>
                </div>
                {/* <div
                  className="col-md-6 py-3 px-5  ltn__slide-animation"
                  style={{ backgroundColor: "rgba(0,0,0,0.6)",maxHeight:'380px' }}
                >
                  <div className="row">
                   
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="input-item input-item-name ltn__custom-icon " >
                        <input
                          type="text"
                          name="name"
                          className="bg-transparent animated mb-2"
                          style={{ height: "50px" , border: errors.name ? '2px solid red' : '' }}
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-6 ">
                      <div className="input-item input-item-email ltn__custom-icon">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter email address"
                          className="bg-transparent animated mb-2"
                          style={{ height: "50px" , border: errors.email ? '2px solid red' : '' }}

                          value={formData.email}
                           onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="input-item input-item-phone ltn__custom-icon">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Enter phone number"
                          className="bg-transparent animated mb-2"
                          style={{ height: "50px" , border: errors.phone ? '2px solid red' : '' }}
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="input-item input-item-textarea ltn__custom-icon">
                        <textarea
                          name="message"
                          placeholder="Enter message"
                          defaultValue={""}
                          style={{ border: errors.message ? '2px solid red' : '' }}
                          className="bg-transparent animated  mb-0"
                          value={formData.message}
                         onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                  <div className="btn-wrapper mt-0">
                    <button
                      className="btn theme-btn-1 btn-effect-1 text-uppercase mx-auto"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Request A Call back
                    </button>
                  </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerV5