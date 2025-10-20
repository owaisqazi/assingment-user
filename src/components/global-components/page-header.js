import React from 'react';
import { Link } from 'react-router-dom';
const Page_header = ({headertitle,subheader,customclass,img})=> {

        // let HeaderTitle = props.headertitle;
        let publicUrl = process.env.PUBLIC_URL+'/'
        // let Subheader = props.subheader ? this.props.subheader : HeaderTitle
		// let CustomClass = props.customclass ? this.props.customclass : ''
        // let Img = props.img;

        return (

		<div className={"ltn__breadcrumb-area text-left  bg-image  "+customclass} data-bs-bg={publicUrl + img} >
			<div className="container">
				<div className="row">
				<div className="col-lg-12" style={{marginTop:'100px'}}>
					<div className="ltn__breadcrumb-inner">
					<h1 className="page-title text-center" style={{color:'white'}}>{ headertitle }</h1>
					<div className="ltn__breadcrumb-list">
						<ul className='text-center'>
						<li><Link to="/" style={{color:'white'}}><span style={{color:'white'}}><i className="fas fa-home" /></span> Home</Link></li>
						<li style={{color:'white'}}>{ subheader }</li>
						</ul>
					</div>
					</div>
				</div>
				</div>
			</div>
		</div>


        )
    }



export default Page_header