import React, { } from 'react';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import NotFoundComponent from '../../components/not-found/not-found.component'
const NotFound = () => {
   
    return (
        <>
          <Header/>
            <NotFoundComponent/>
          <Footer/>
        </>
    );
}

export default NotFound