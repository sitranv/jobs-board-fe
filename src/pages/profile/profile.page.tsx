import React, { } from 'react';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import UserProfile from '../../components/user-profile/profile.component';

const UserProfilePage = () => {
   
    return (
      <div style={{ backgroundColor: "white" }}>
          <Header/>
            <UserProfile/>
          <Footer/>
      </div>
    );
}

export default UserProfilePage;