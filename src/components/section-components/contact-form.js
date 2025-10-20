import axios from "axios";
import React, { useState } from "react";
import {toast,Toaster} from 'react-hot-toast'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    agree: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    const formDatat = new FormData();
    formDatat.append("name", formData.name);
    formDatat.append("email", formData.email);
    formDatat.append("phone", formData.phone);
    formDatat.append("description", formData.description);
    var config = {
      method: "post",
      url: "https://assignmenthelpapi.dev-sh.xyz/api/contact",
      data: formDatat,
      headers: {
        Accept: "application/json",
      },
    };

    if (validateForm()) {
      axios(config)
        .then((response) => {
          console.log(response.data);
          if (response.data.status === true) {
            toast.success(response.data.description);
          }
          setFormData({
            name: '',
            email: '',
            phone: '',
            description: ''
          });
        })
        .catch((error) => {
          toast.error("This didn't work.")
        });
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));

    validateField(name, fieldValue);
  };

  const validateField = (fieldName, value) => {
    let errordescription = "";

    switch (fieldName) {
      case "name":
        errordescription = value ? "" : "Name is required";
        break;
      case "email":
        errordescription = isValidEmail(value) ? "" : "Invalid email address";
        break;
      case "phone":
        errordescription = value ? "" : "phone number is required";
        break;
      case "description":
        errordescription = value ? "" : "description is required";
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: errordescription,
    }));
  };

  const validateForm = () => {
    let isValid = true;

    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const value = formData[key];
        validateField(key, value);
        if (errors[key]) {
          isValid = false;
        }
      }
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className=" ">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__form-box contact-form-box white-bg">
              <h4 className="title-2">Get A Quote</h4>
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && errors.name}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-email ltn__custom-icon">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <span className="error-message">{errors.email}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-item input-item-phone ltn__custom-icon">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && (
                        <span className="error-message">{errors.phone}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="input-item input-item-textarea ltn__custom-icon">
                  <textarea
                    name="description"
                    placeholder="Enter description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                  {errors.description && (
                    <span className="error-message">{errors.description}</span>
                  )}
                </div>
               
                <div className="btn-wrapper mt-0 ">
                  <button
                    className="btn  theme-btn-1 btn-effect-1 text-uppercase"
                    type="submit"
                  >
                    get in Touch
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
