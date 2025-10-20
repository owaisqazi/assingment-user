import React, { Component } from 'react';
import axios from "axios";
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';
import { Modal } from 'react-bootstrap';

class NavbarV3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			formData: {

				email: "",
				phone: "",
				query: "",
				agree: false,
			},
			errors: {

				email: "",
				phone: "",
				query: "",
			}
		};
	}

	componentDidMount() {
		// Automatically open the modal after 5 seconds
		this.modalTimer = setTimeout(() => {
			this.setState({ showModal: true });
		}, 9000);
	}

	componentWillUnmount() {
		clearTimeout(this.modalTimer);
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const { formData } = this.state;

		const formDatat = new FormData();
		formDatat.append("email", formData.email);
		formDatat.append("phone", formData.phone);
		formDatat.append("query", formData.query);

		axios.post("https://assignmenthelpapi.dev-sh.xyz/api/query", formDatat, {
			headers: {
				Accept: "application/json",
			},
		})
			.then((response) => {
				console.log(response.data);
				if (response.data.status === true) {
					toast.success(response.data.query);
					// Reset form data after successful submission
					this.setState({
						formData: {
							email: '',
							phone: '',
							query: ''
						},
						errors: {
							email: "",
							phone: "",
							query: "",
						}
					});
				}
			})
			.catch((error) => {
				toast.error("This didn't work.")
			});
	};

	handleChange = (event) => {
		const { name, value, type, checked } = event.target;
		const fieldValue = type === "checkbox" ? checked : value;

		this.setState(prevState => ({
			formData: {
				...prevState.formData,
				[name]: fieldValue,
			}
		}), () => {
			this.validateField(name, fieldValue);
		});
	};

	validateField = (fieldName, value) => {
		let errorquery = "";

		switch (fieldName) {
			case "name":
				errorquery = value ? "" : "Name is required";
				break;
			case "email":
				errorquery = this.isValidEmail(value) ? "" : "Invalid email address";
				break;
			case "phone":
				errorquery = value ? "" : "phone number is required";
				break;
			case "query":
				errorquery = value ? "" : "query is required";
				break;
			default:
				break;
		}

		this.setState(prevState => ({
			errors: {
				...prevState.errors,
				[fieldName]: errorquery,
			}
		}));
	};

	validateForm = () => {
		const { formData } = this.state;
		let isValid = true;

		for (const key in formData) {
			if (formData.hasOwnProperty(key)) {
				const value = formData[key];
				this.validateField(key, value);
				if (this.state.errors[key]) {
					isValid = false;
				}
			}
		}

		return isValid;
	};

	isValidEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	render() {
		let publicUrl = process.env.PUBLIC_URL + '/';
		const { formData, errors } = this.state;

		return (
			<div>
				<header className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent gradient-color-4---">
					<div className="ltn__header-top-area top-area-color-white">
						<div className="container-fluid">
							<div className="row ">
								<div className="col-md-12">
									<div className="ltn__top-bar-menu">
										<ul className='d-flex flex-wrap align-items-center justify-content-center'>
											<li><a href="mailto:Info@assignmenthelps.org"><i className="icon-mail" />Info@assignmenthelps.org</a></li>
											<li><a href="mailto:assignmenthelp12@gmail.com"><i className="icon-mail" />assignmenthelp12@gmail.com</a></li>
											{/* <li><a href="https://wa.me/07597701182?text=Referral%20link%20website%3A%20www.assignmenthelps.org" target="_blank" rel="noopener noreferrer"> <i className="icon-call" /> <i className='icon-whatsapp' /> UK : 07597 701182 </a></li>
											<li><a href="https://wa.me/4915216652405?text=Referral%20link%20website%3A%20www.assignmenthelps.org" target="_blank" rel="noopener noreferrer"><i className="icon-call" /> <i className='icon-whatsapp' />  Europe : +49 1521 6652405 </a></li>
											<li><a href="https://wa.me/16473766811?text=Referral%20link%20website%3A%20www.assignmenthelps.org" target="_blank" rel="noopener noreferrer"><i className="icon-call" /><i className='icon-whatsapp' />  US & Canada: +1 (647) 376-6811</a></li> */}
											<li>
												<a href="https://wa.me/442045155008?text=Referral%20link%20website%3A%20www.assignmenthelps.org" target="_blank" rel="noopener noreferrer">
													<i className='icon-whatsapp' /> Call UK: +44 (20) 4515 5008
												</a>
											</li>
											<li>
												<a href="https://wa.me/447440451891?text=Referral%20link%20website%3A%20www.assignmenthelps.org" target="_blank" rel="noopener noreferrer">
													<i className='icon-whatsapp' /> UK WhatsApp: +44 7440 451891
												</a>
											</li>
											{/* <li>
												<a href="https://wa.me/14099952520?text=Referral%20link%20website%3A%20www.assignmenthelps.org" target="_blank" rel="noopener noreferrer">
													<i className='icon-whatsapp' /> US WhatsApp:
													+1 (616) 274‑2630‬
												</a>
											</li> */}

											{/* <li><a href="https://wa.me/+9093513911?text=Referral%20link%20website%3A%20www.assignmenthelps.org"  target="_blank"  rel="noopener noreferrer"><i className='icon-whatsapp' style={{color:'green',fontSize:'20px'}} /> US & Canada: (909) 351 3911 </a></li> */}
										</ul>
									</div>
								</div>
								{/* <div className="col-md-5">
			          <div className="top-bar-right text-end">
			            <div className="ltn__top-bar-menu">
			              <ul>
			                <li>
			                  ltn__language-menu
			                  <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
			                    <ul>
			                      <li><Link to="#" className="dropdown-toggle"><span className="active-currency">English</span></Link>
			                        <ul>
			                          <li><Link to="#">Arabic</Link></li>
			                          <li><Link to="#">Bengali</Link></li>
			                          <li><Link to="#">Chinese</Link></li>
			                          <li><Link to="#">English</Link></li>
			                          <li><Link to="#">French</Link></li>
			                          <li><Link to="#">Hindi</Link></li>
			                        </ul>
			                      </li>
			                    </ul>
			                  </div>
			                </li>
			                <li>
							<Social />
			                </li>
			              </ul>
			            </div>
			          </div>
			        </div> */}
							</div>
						</div>
					</div>
					<div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black">
						<div className="container-fluid">
							<div className="row">
								<div className="col">
									<div className="site-logo-wrap">
										<div className="site-logo go-top">
											<Link to="/">
												<picture>
													<source
														srcSet={publicUrl + "assets/img/slider/logo-5.png"}
														type="image/webp"
													/>
													<source
														srcSet={publicUrl + "assets/img/slider/logo-5.png"}
														type="image/png"
													/>
													<img
														src={publicUrl + "assets/img/slider/logo-5.png"}
														className='usa_hw'
														alt="Website Logo" // Alt text ko behtar kiya
														width={200} // <-- **IMP: Yahan logo ki actual width dein** (e.g., 200)
														height={50} // <-- **IMP: Yahan logo ki actual height dein** (e.g., 50)
														loading="eager" // Logo usually "above the fold" hota hai, isliye eager load karein.
														fetchPriority="high" // Modern browsers ko batata hai ki ye important hai.
													/>
												</picture>
											</Link>
										</div>
										<div className="get-support clearfix d-none">
											<div className="get-support-icon">
												<i className="icon-call" />
											</div>
											<div className="get-support-info">
												<h6>Get Support</h6>
												<h4><a href="https://wa.me/+447312675064?text=Referral%20link%20website%3A%20www.assignmenthelps.org" target="_blank" rel="noopener noreferrer"> 0044 7312 675064</a></h4>
											</div>
										</div>
									</div>
								</div>
								<div className="col header-menu-column menu-color-white">
									<div className="header-menu d-none d-xl-block go-top">
										<nav>
											<div className="ltn__main-menu">
												<ul>
													<li className="">
														<a href="a">
															<Link to="/">Home </Link>
														</a>

													</li>
													<li className=""><Link to="/Assignment-help">Service</Link>
														<ul>
															<div className="row col-lg-12">
																<div className="col-lg-4">
																	<li><Link to="/Assignment-help">Assignment Help</Link></li>
																	<li><Link to="/Dissertation-Help">Dissertation Help</Link></li>
																	<li><Link to="/Essay-Help">Essay Help</Link></li>
																	<li><Link to="/Live-session">Live Sessions</Link></li>
																	<li><Link to="/Presentation-Writing">Presentation Writing</Link></li>
																	<li><Link to="/Speech-Help">Speech Help</Link></li>
																	<li><Link to="/Video-solution">Video Solutions</Link></li>
																	<li><Link to="/project-Report">Project Report Writing</Link></li>
																	<li><Link to="/Lab-Report">Lab Report</Link></li>
																	<li><Link to="/philosophy-assignments-help">Philosophy</Link></li>
																	<li><Link to="/academic-editing-services-assignments-help">Academic Editing Services</Link></li>
																</div>

																<div className="col-lg-4">
																	<li><Link to="/physics-assignments-help">Physics</Link></li>
																	<li><Link to="/programming-assignments-help">Programming</Link></li>
																	<li><Link to="/psychology-assignments-help">psychology</Link></li>
																	<li><Link to="/Sociology-assignments-help">Sociology</Link></li>
																	<li><Link to="/statistics-assignments-help">Statistics</Link></li>
																	<li><Link to="/nursing-assignments-help">Nursing</Link></li>
																	<li><Link to="/management-assignments-help">Management</Link></li>
																	<li><Link to="/linguistics-assignments-help">Linguistics</Link></li>
																	<li><Link to="/computer-science-assignments-help">Computer Science</Link></li>
																	<li><Link to="/business-assignments-help">Business</Link></li>
																	<li><Link to="/chemistry-assignments-help">Chemistry</Link></li>
																	<li><Link to="/dissertation-support-assignments-help">Dissertation Support</Link></li>

																</div>
																<div className="col-lg-4">
																	<li><Link to="/accounting-assignments-help">Accounting</Link></li>
																	<li><Link to="/IT-assignments-help">IT Assignments</Link></li>
																	<li><Link to="/engineering-assignments-help">Engineering</Link></li>
																	<li><Link to="/english-assignments-help">English</Link></li>
																	<li><Link to="/biology-science-assignments-help">Biology Science</Link></li>
																	<li><Link to="/marketing-assignments-help">Marketing</Link></li>
																	<li><Link to="/math-assignments-help">Math</Link></li>
																	<li><Link to="/finance-assignments-help">Finance</Link></li>
																	<li><Link to="/economic-assignments-help">Economic</Link></li>
																	<li><Link to="/history-assignments-help">History</Link></li>
																	<li><Link to="/geography-assignments-help">Geography</Link></li>
																	<li><Link to="/law-assignments-help">Law</Link></li>
																</div>
															</div>
														</ul>
													</li>
													<li className=""><Link to="/contact">Contact us</Link>

													</li>
													<li className=""><Link to="/blog-grid">Blog</Link>

													</li>

													<li><Link to="/faq">FAQS</Link></li>
													<li className="special-link">

														<a href={`https://wa.me/+447440451891?text=Referral%20link%20website%3A%20www.assignmenthelps.org"`} target="_blank" rel="noopener noreferrer">
															<BsWhatsapp style={{ fontSize: '28px', marginRight: '10px' }} />
															WhatsApp
														</a>
													</li>
													<li className="special-link">

														<a href={`https://tawk.to/chat/5d2346a222d70e36c2a4b1b9/1fuov8514`} target="_blank" rel="noopener noreferrer" >Live Chat</a>
													</li>
												</ul>
											</div>
										</nav>
									</div>
								</div>
								<div className="col--- ltn__header-options ltn__header-options-2 ">
									{/* Mobile Menu Button */}
									<div className="mobile-menu-toggle d-xl-none">
										<a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
											<svg viewBox="0 0 800 600">
												<path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top" />
												<path d="M300,320 L540,320" id="middle" />
												<path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
				<div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
					<div className="ltn__utilize-menu-inner ltn__scrollbar">
						<div className="ltn__utilize-menu-head">
							<div className="site-logo">
								<Link to="/"><img src={publicUrl + "assets/img/slider/logo-6.png"} alt="Logo" /></Link>
							</div>
							<button className="ltn__utilize-close">×</button>
						</div>

						<div className="ltn__utilize-menu">
							<ul>
								<li><Link to={'/'} >Home</Link>

								</li>
								<li><Link to="/Assignment-help">Service</Link>
									<ul class="sub-menu full-width row col-lg-12">
										<div className="">
											<div className="col-lg-4">
												<li><Link to="/Assignment-help">Assignment Help</Link></li>
												<li><Link to="/Dissertation-Help">Dissertation Help</Link></li>
												<li><Link to="/Essay-Help">Essay Help</Link></li>
												<li><Link to="/Live-session">Live Sessions</Link></li>
												<li><Link to="/Presentation-Writing">Presentation Writing</Link></li>
												<li><Link to="/Speech-Help">Speech Help</Link></li>
												<li><Link to="/Video-solution">Video Solutions</Link></li>
												<li><Link to="/project-Report">Project Report Writing</Link></li>
												<li><Link to="/Lab-Report">Lab Report</Link></li>
												<li><Link to="/philosophy">Philosophy</Link></li>
												<li><Link to="/academic-editing-services-assignments-help">Academic Editing Services</Link></li>
											</div>

											<div className="col-lg-4">
												<li><Link to="/physics-assignments-help">Physics</Link></li>
												<li><Link to="/programming-assignments-help">Programming</Link></li>
												<li><Link to="/psychology-assignments-help">psychology</Link></li>
												<li><Link to="/sociology-assignments-help">Sociology</Link></li>
												<li><Link to="/statistics-assignments-help">Statistics</Link></li>
												<li><Link to="/nursing-assignments-help">Nursing</Link></li>
												<li><Link to="/management-assignments-help">Management</Link></li>
												<li><Link to="/linguistics-assignments-help">Linguistics</Link></li>
												<li><Link to="/computer-science-assignments-help">Computer Science</Link></li>
												<li><Link to="/business-assignments-help">Business</Link></li>
												<li><Link to="/chemistry-assignments-help">Chemistry</Link></li>
												<li><Link to="/dissertation-support-assignments-help">Dissertation Support</Link></li>
											</div>
											<div className="col-lg-4">
												<li><Link to="/accounting-assignments-help">Accounting</Link></li>
												<li><Link to="/IT-assignments-help">IT Assignments</Link></li>
												<li><Link to="/engineering-assignments-help">Engineering</Link></li>
												<li><Link to="/english-assignments-help">English</Link></li>
												<li><Link to="/biology-science-assignments-help">Biology Science</Link></li>
												<li><Link to="/marketing-assignments-help">Marketing</Link></li>
												<li><Link to="/math-assignments-help">Math</Link></li>
												<li><Link to="/finance-assignments-help">Finance</Link></li>
												<li><Link to="/economic-assignments-help">Economic</Link></li>
												<li><Link to="/history-assignments-help">History</Link></li>
												<li><Link to="/geography-assignments-help">Geography</Link></li>
												<li><Link to="/law-assignments-help">Law</Link></li>
											</div>
										</div>
									</ul>
								</li>

								<li><Link to="/contact">Contact</Link></li>
								{/* <li><Link to="/contact">Review</Link></li> */}
								<li><Link to="/faq">FAQ</Link></li>
							</ul>
						</div>

						<div className="ltn__social-media-2">
							<ul>
								<li><a href="https://www.facebook.com/profile.php?id=100066920298893" target="_blank" rel="noopener noreferrer" title="Facebook" ><i className="fab fa-facebook-f" /></a></li>
								<li><a href="https://www.linkedin.com/company/assignmenthelps/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
							</ul>
						</div>
					</div>
				</div>

				<Modal className='mt-10' show={this.state.showModal} onHide={() => this.setState({ showModal: false })}>
					<Modal.Header closeButton>
						<Modal.Title>Assignment Help</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form id="contact-form" onSubmit={this.handleSubmit}>
							<div className="row">

								<div className="col-md-12">
									<div className="input-item input-item-email ltn__custom-icon">
										<input
											type="email"
											name="email"
											placeholder="Enter email address"
											value={formData.email}
											onChange={this.handleChange}
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
											onChange={this.handleChange}
										/>
										{errors.phone && (
											<span className="error-message">{errors.phone}</span>
										)}
									</div>
								</div>
							</div>
							<div className="input-item input-item-textarea ltn__custom-icon">
								<textarea
									name="query"
									placeholder="Enter query"
									value={formData.query}
									onChange={this.handleChange}
								/>
								{errors.query && (
									<span className="error-message">{errors.query}</span>
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
					</Modal.Body>
					<Modal.Footer>
						{/* Optionally, you can add a close button here */}
					</Modal.Footer>
				</Modal>
			</div>
		)
	}
}


export default NavbarV3