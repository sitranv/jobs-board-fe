import React, { } from 'react';
import Category from '../../components/category/category.component';
import Header from '../../components/header/header.component';
import Intro from '../../components/intro/intro.component';
import RecentJob from '../../components/recentJob/recent-jobs.component';
import SearchBox from '../../components/searchbox/searchbox.component';

const HomePage = () => {
   
    return (
        <>
          <Header/>
          <Intro/>
          <SearchBox/>
          <Category/>
          <RecentJob/>
        </>
    );
}

export default HomePage