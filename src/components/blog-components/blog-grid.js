import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const BlogGrid = () => {
	const [post, setPost] = useState([])
	const [date, setDate] = useState()

	const Post = () => {

		axios
			.get('https://assignmenthelpapi.dev-sh.xyz/api/post')
			.then((response) => {
				console.log(response, "response");
				const formattedDates = response.data?.post?.map((e) => {
					// Parse each date string in the array
					const date = new Date(e?.created_at);
					const year = date.getUTCFullYear();
					const month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
					const day = ("0" + date.getUTCDate()).slice(-2);
					return `${year}-${month}-${day}`;
				});
				console.log(formattedDates, "formattedDates");

				// Update state with formatted dates
				setDate(formattedDates[0]);
				// setDate(moment(response.data?.post?.map((e) => e?.created_at)).format('YYYY-MM-DD HH:mm:ss'));
				setPost(response.data?.post);

			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {

		Post();

	}, [post]);


	
	return (
		<div className="ltn__blog-area ltn__blog-item-3-normal mb-100 go-top">
			<div className="container">
				<div className="row">
					{/* Blog Item */}
					{post?.map((e) => {
						return (
							<>
								<div className="col-lg-4 col-sm-6 col-12">
									<div className="ltn__blog-item ltn__blog-item-3">
										<div className="ltn__blog-img">
											<Link to={`/blog-details/${encodeURIComponent(e?.title.replace(/\s+/g, '-'))}`}><img src={'https://assignmenthelpapi.dev-sh.xyz/storage/' + e?.image} alt="#" loading="lazy" width={"100%"}
                            height={"100%"}/></Link>
										</div>
										<div className="ltn__blog-brief">
											<div className="ltn__blog-meta">
												<ul>
													<li className="ltn__blog-author go-top">
														<Link to="#"><i className="far fa-user" />by: Admin</Link>
													</li>
													<li className="ltn__blog-tags go-top">
														<Link to="/service"><i className="fas fa-tags" />Services</Link>
													</li>
												</ul>
											</div>
											<h3 className="ltn__blog-title"><Link to={`/blog-details/${encodeURIComponent(e?.title.replace(/\s+/g, '-'))}`}>{e?.title}</Link></h3>
											<div className="ltn__blog-meta-btn">
												<div className="ltn__blog-meta">
													<ul>
														<li className="ltn__blog-date"><i className="far fa-calendar-alt" />{date}</li>
													</ul>
												</div>
												<div className="ltn__blog-btn">
													<Link to={`/blog-details/${encodeURIComponent(e?.title.replace(/\s+/g, '-'))}`}>Read more</Link>
												</div>
											</div>
										</div>
									</div>
								</div>

							</>
						)
					})}

				</div>
				{/* <div className="row">
				<div className="col-lg-12">
				<div className="ltn__pagination-area text-center">
					<div className="ltn__pagination">
					<ul>
						<li><Link to="#"><i className="fas fa-angle-double-left" /></Link></li>
						<li><Link to="#">1</Link></li>
						<li className="active"><Link to="#">2</Link></li>
						<li><Link to="#">3</Link></li>
						<li><Link to="#">...</Link></li>
						<li><Link to="#">10</Link></li>
						<li><Link to="#"><i className="fas fa-angle-double-right" /></Link></li>
					</ul>
					</div>
				</div>
				</div>
			</div> */}
			</div>
		</div>

	)
}


export default BlogGrid;
