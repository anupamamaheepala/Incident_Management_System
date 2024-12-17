import React from 'react'
import  UserSideMenu from '../components/UserSideMenu'
import UserRoutes  from '../components/UserRoutes'

import UserProfileHeader from '../components/UserProfileHeader'
import "../css/userProfile.css";
import "../css/userSettings.css";
import "../css/userSideMenu.css";

function UserProfile() {

  return (

    
    <div className="Emp_DashboardContainer"style={{overflowX : "hidden"}}>
    <UserProfileHeader/>
    <div className="Emp_DashboardContainer" >
      <div className="Emp_SideMenuAndPageContent">
        <UserSideMenu />
        <div className="Emp_PageContent">
          <UserRoutes />
        </div>
      </div>
      
    </div>
  </div>
  
);
}

export default UserProfile