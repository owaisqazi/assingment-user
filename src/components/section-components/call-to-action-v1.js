import axios from 'axios';
import React, { useState } from 'react';
import {toast} from 'react-hot-toast'



const CallToActonV1 = () => {

	const [email, setEmail] = useState("")

	const NewsLetter = () => {
		const data = new FormData();
		data.append('email', email)
		axios
			.post('https://assignmenthelpapi.dev-sh.xyz/api/subscribe',data)
			.then((response) => {
				console.log(response, "response");
				toast.success(response.data.message);
				setEmail("")
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom" >
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
								<div className="coll-to-info text-color-white">
									<h1>Subscribe For NewsLetter</h1>
									<div className="input-item input-item-name ltn__custom-icon w-100">
										<input
											type="email"
											name="name"
											placeholder="Enter your email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
								</div>
								<div className="btn-wrapper go-top">
									<div className="btn btn-effect-3 btn-white" onClick={NewsLetter}>Subscribe <i className="icon-next" /></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}


export default CallToActonV1