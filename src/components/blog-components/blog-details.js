/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
const BlogDetails = () => {
	let publicUrl = process.env.PUBLIC_URL + '/'
	const { name } = useParams();
	const originalTitle = name.replace(/-/g, ' ')
	console.log(originalTitle, "name")
	const [post, setPost] = useState()
	const [Allpost, setAllPost] = useState([])
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
				setAllPost(response?.data?.post)
				const filter = response?.data?.post?.find((e) => e?.title === originalTitle)
				setPost(filter);
				console.log(filter, "response");

			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		Post();
	}, [setPost]);

	return (
		<div className="ltn__page-details-area ltn__blog-details-area mb-120">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="ltn__blog-details-wrap">
							<div className="ltn__page-details-inner ltn__blog-details-inner">

								<h2 className="ltn__blog-title">{post?.title}
								</h2>
								<div className="ltn__blog-meta">
									<ul>
										<li className="ltn__blog-author go-top">
											<Link to="/team-details"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="photos" loading="lazy"
												width={30}
												height={30} className='team-details_image1'/>By: Ethanss</Link>
										</li>
										<li className="ltn__blog-date">
											<i className="far fa-calendar-alt" />June 22, 2020
										</li>
										<li>
											<Link to="#"><i className="far fa-comments" />35 Comments</Link>
										</li>
									</ul>
								</div>
								<div dangerouslySetInnerHTML={{ __html: post?.discription }}></div>
							</div>




						</div>
					</div>
					<Sidebar AllPost={Allpost} Date={date} />
				</div>
			</div>
		</div>
	)
}


export default BlogDetails;
