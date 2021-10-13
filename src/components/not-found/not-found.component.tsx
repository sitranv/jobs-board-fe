import React, { FC } from 'react'

interface Props {
  
}

const NotFound : FC<Props> = () => {
  return (
    <section id="resent-job-post" className="background-color-jobs">
      <div className="vertical-space-80"></div>
      <div className="container text-center">
        <img src="/assets/images/not-found.jpg" alt="not-found"/>
      </div>
      <div className="vertical-space-60"></div>
    </section>
  )
}


export default NotFound;