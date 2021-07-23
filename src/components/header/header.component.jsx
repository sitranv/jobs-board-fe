import React, { } from 'react';

import logo from './images/logo.png'
const Header = () => {

  return (
    <header class="header">
      <div class="header_container background-header-color">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="header_content d-flex flex-row align-items-center justify-content-start mt-1">
                <div class="logo_container">
                  <a href="index.html">
                    <img src={logo} class="logo-text" alt="" />
                  </a>
                </div>
                <nav class="main_nav_contaner ml-auto">
                  <ul class="main_nav">
                    <li><a href="/#">Home</a></li>
                    {/* <li class="dropdown active ">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">Home
                      <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><a href="index.html">Home variation 1</a></li>
                      <li><a href="index2.html">Home variation 2</a></li>
                    </ul>
                  </li>
                  <li class="dropdown ">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">Job
                      <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><a href="job_category.html">Job List</a></li>
                      <li><a href="job_detail.html">Job Detail</a></li>
                    </ul>
                  </li> */}
                    <li><a href="blog_page.html">Blog</a></li>
                    <li><a href="about_us.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                  <div class=" Post-Jobs">
                    <a href="post_job.html" class="">
                      Post Jobs
                    </a>
                  </div>
                  <div class="hamburger menu_mm menu-vertical">
                    <i class="large material-icons font-color-white menu_mm menu-vertical">menu</i>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header