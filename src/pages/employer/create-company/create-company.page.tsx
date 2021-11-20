import React, { } from 'react';
import CreateCompanyComponent from '../../../components/employer/create-company/create-company.component';
import Footer from '../../../components/footer/footer.component';
import Header from '../../../components/header/header.component';

const CreateCompany = () => {
   
    return (
      <div style={{ backgroundColor: "white" }}>
      <Header />
        <CreateCompanyComponent />
      <Footer />
    </div>
    );
}

export default CreateCompany;