import React, { } from 'react';

const SearchBox = () => {
  return (
    <div id="search-box">
      <div className="container search-box">
        <form action="#" id="search-box_search_form_3"
          className="search-box_search_form d-flex flex-lg-row flex-column align-items-center justify-content-between ">
          <div className="d-flex flex-row align-items-center justify-content-start inline-block">
            <span className="large material-icons search">search</span>
            <input className="search-box_search_input" placeholder="Job title, restaurant, keywords" required="required" type="search" />
          </div>
          <button type="submit" className="search-box_search_button"><i className="fas fa-search"></i></button>
        </form>
      </div>
    </div>
  )
}

export default SearchBox;