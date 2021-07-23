import React, { } from 'react';

const Category = () => {

  let categories = [];
  for (let i = 0; i < 6; i++) {
    categories.push(<div className="col-lg-4 col-md-6 p-0">
      <img src="https://s3-us-west-2.amazonaws.com/edizeven-images/bourdain/hp_v2/bartender.png" className="picTitle" alt="" />
    </div>)
  }
  return (
    <section id="Job-Category">
      <div className="container">
        <h3 className="text-center">What work are you looking for?</h3>
        <div className="vertical-space-20"> </div>
        <div className="row">
          {categories}
        </div>
        <div className="vertical-space-40"></div>
        <a href="#" className="Brows-All-Category">ALL POSITIONS</a>
      </div>
      <div className="vertical-space-30"></div>
    </section>
  )
}

export default Category;