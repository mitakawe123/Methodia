import React from 'react'
import '../css/404.css'
function PageNotFound() {
  return (
    <div className='main-container-error'>
        <div className="flex-center position-ref full-height">
            <div className="error-four"> 404 </div>
            <div className="page-offline-message">Page is offilne </div>
        </div>
    </div>
  )
}

export default PageNotFound