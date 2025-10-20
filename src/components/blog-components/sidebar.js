import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast'
import axios from 'axios';



const Sidebar = ({ AllPost, Date }) => {

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
						toast.success(response.data.message);
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
		const { name, value } = event.target;


		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));

		validateField(name, value);
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

	let publicUrl = process.env.PUBLIC_URL + '/'
	return (
		<div className="col-lg-4 go-top">
			<aside className="sidebar-area blog-sidebar ltn__right-sidebar">
				{/* Form Widget */}
				<div className="widget ltn__form-widget">
					<h4 className="ltn__widget-title ltn__widget-title-border-2">Drop Messege For Book</h4>
					<form action="#" onSubmit={handleSubmit}>
						<input type="text" name="name" value={formData.name} placeholder="Your Name*" onChange={handleChange} />
						{errors.name && <span className="text-danger">{errors.name}</span>}
						<input type="text" name="email" value={formData.email} placeholder="Your e-Mail*" onChange={handleChange} />
						{errors.email && (
							<span className="text-danger">{errors.email}</span>
						)}
						<input type='text' name="phone" value={formData.phone} placeholder="xxxxxxxxxx" onChange={handleChange} />
						{errors.phone && (
							<span className="text-danger">{errors.phone}</span>
						)}
						<textarea name="description" placeholder="Write Message..." value={formData.description} defaultValue={""} onChange={handleChange} />
						{errors.description && (
							<span className="text-danger">{errors.description}</span>
						)}
						<button type="submit" className="btn theme-btn-1" onClick={handleSubmit}>Send Messege</button>
					</form>
				</div>

				{/* Popular Post Widget */}
				<div className="widget ltn__popular-post-widget">
					<h4 className="ltn__widget-title ltn__widget-title-border-2">Leatest Blogs</h4>
					<ul>
						{AllPost?.map((e) => {
							return (
								<>
									<li>
										<div className="popular-post-widget-item clearfix">
											<div className="popular-post-widget-img">
												<Link to="/blog-details"><img src={'https://assignmenthelpapi.dev-sh.xyz/storage/' + e?.image} alt="#" loading="lazy"
                      width={100}
                            height={100}  /></Link>
											</div>
											<div className="popular-post-widget-brief">
												<h6><Link to="/blog-details">{e?.title}</Link></h6>
												<div className="ltn__blog-meta">
													<ul>
														<li className="ltn__blog-date">
															<Link to="#"><i className="far fa-calendar-alt" />{Date}</Link>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</li>
								</>
							)
						})}

					</ul>
				</div>

				{/* Social Media Widget */}
				<div className="widget ltn__social-media-widget">
					<h4 className="ltn__widget-title ltn__widget-title-border-2">Follow us</h4>
					<div className="ltn__social-media-2">
						<ul>
							<li><a href="#index" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
							<li><a href="#index" title="Twitter"><i className="fab fa-twitter" /></a></li>
							<li><a href="#index" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
							<li><a href="#index" title="Instagram"><i className="fab fa-instagram" /></a></li>
						</ul>
					</div>
				</div>

				{/* Banner Widget */}
				<div className="widget ltn__banner-widget d-none go-top">
					<Link to="/shop"><img src={publicUrl + "assets/img/banner/2.jpg"} alt="#" loading="lazy"
                      width={100}
                            height={100}  /></Link>
				</div>
			</aside>
		</div>
	)
}


export default Sidebar;
