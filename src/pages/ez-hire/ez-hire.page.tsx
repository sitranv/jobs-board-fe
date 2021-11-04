import React, { } from 'react';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import EZHireComponent from '../../components/ez-hire/ez-hire.component';

const EZHire = () => {
   
    return (
        <>
          <Header/>
            <EZHireComponent/>
          <Footer/>
        </>
    );
}

export default EZHire;