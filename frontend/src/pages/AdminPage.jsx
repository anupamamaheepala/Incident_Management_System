import React from 'react'
import  AdminSideMenu from '../components/AdminSideMenu'
import AdminRoutes  from '../components/AdminRoutes'

import UserProfileHeader from '../components/UserProfileHeader'
import "../css/userProfile.css";
import "../css/userSettings.css";
import "../css/userSideMenu.css";

function AdminPage() {

  return (

    
    <div className="Emp_DashboardContainer"style={{overflowX : "hidden"}}>
    <UserProfileHeader/>
    <div className="Emp_DashboardContainer" >
      <div className="Emp_SideMenuAndPageContent">
        <AdminSideMenu />
        <div className="Emp_PageContent">
          <AdminRoutes />
        </div>
      </div>
      
    </div>
  </div>
  
);
}

export default AdminPage;