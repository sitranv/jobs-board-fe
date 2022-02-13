import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
}

const SearchBox : FC<Props> = () => {

  const [search, setSearch] = useState("");

  const changeSearch = (e: any) => {
    setSearch(e.target.value);
  }

  return (
    <div id="search-box">
      <div className="container search-box" style={{width: '60%'}}>
        <form action="#" id="search-box_search_form_3"
          className="search-box_search_form d-flex flex-lg-row flex-column align-items-center justify-content-between ">
          <div className="d-flex flex-row align-items-center justify-content-start inline-block">
            <span className="large material-icons search">search</span>
            <input className="search-box_search_input" placeholder="Job title, company, keywords" type="search" onChange={changeSearch}/>
          </div>
          <Link to={{pathname: `/job-list`, state: { search1: search }}}><button type="submit" className="search-box_search_button"><i className="fas fa-search"></i></button></Link>
        </form>
      </div>
    </div>
  )
}

export default SearchBox;