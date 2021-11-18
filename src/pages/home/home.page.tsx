import React, { } from 'react';
import Category from '../../components/category/category.component';
import FilterJob from '../../components/filter-jobs-17$/filter-jobs.component';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import Intro from '../../components/intro/intro.component';
import RecentJob from '../../components/recent-jobs/recent-jobs.component';
import SearchBox from '../../components/searchbox/searchbox.component';

const HomePage = () => {
   
    return (
        <>
          <Header/>
          <Intro/>
          <SearchBox/>
          <Category/>
          <RecentJob/>
          {/* <FilterJob/> */}
          <Footer/>
        </>
    );
}

export default HomePage