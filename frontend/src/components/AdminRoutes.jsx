import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/AdminDashboard";
import AdminFeedbacks from "./AdminFeedbacks";
import AdminReports from "../components/AdminReports"

function AdminRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/feedbacks" element={<AdminFeedbacks/>}/>
        <Route path="/reports" element={<AdminReports/>}/>
        <Route path="/feedbacks" element={<AdminFeedbacks/>}/>
      </Routes>
    </div>
  );
}

export default AdminRoutes;
