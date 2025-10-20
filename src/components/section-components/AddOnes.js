import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const AddOnes=({heading,text,array})=> {
  return (
    <div className="container-fluid px-3 py-5" style={{backgroundColor:'#eef6ff'}}>
      <div className="container">
      <div className="row">
        <div className="col-md-6 ">
        <img
            src={process.env.PUBLIC_URL + "/assets/img/slider/image-help.webp"}
            alt="img"
             loading="lazy"
             style={{height:"100%",width:"100%"}}
              width={100}
              height={100}
          />
         
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center pt-10">
        <h1>{heading}</h1>
          <p className="my-2">
            {text}
          </p>
          <ul>
            {array.map((data,index)=>{
              return(
                <li key={index}>
                  {data}
                </li>
              )
            })}
          
          </ul>
          <div className="row mt-3">
             <button className="col-4 btn theme-btn-1 ">
              <Link to={'/contact'}>Order Now</Link>
             </button>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AddOnes