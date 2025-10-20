import React from 'react'

const DynamicContentPage = ({items}) => {
  return (
    <>
    <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__section-title-2--- text-start">
            <div dangerouslySetInnerHTML={{ __html: items || "<p>No content available</p>" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DynamicContentPage