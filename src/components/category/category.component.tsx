import React, { FC } from 'react';
import {Link} from "react-router-dom"

interface Props {
  
}

const Category : FC<Props> = () => {

  let categories = [];
  for (let i = 0; i < 6; i++) {
    categories.push(<div className="lg:grid-cols-1 p-0 flex md:grid-cols-1">
      <img src="https://s3-us-west-2.amazonaws.com/edizeven-images/bourdain/hp_v2/bartender.png" className="picTitle" alt="" />
    </div>)
  }
  return (
    <section id="Job-Category" className="background-color-white">
      <div className="container" style={{width: '48%'}}>
        <h2 className="text-center text-3xl">What work are you looking for?</h2>
        <div className="vertical-space-20"> </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-1">
          {categories}
        </div>
        <div className="vertical-space-40"></div>
        <Link to={{pathname:'/job-list'}} className="Brows-All-Category">ALL POSITIONS</Link>
      </div>
      <div className="vertical-space-30"></div>
    </section>
  )
}

export default Category;