import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "../components/UserProfile";
import UserSettings from "../components/UserSettings";
import UserIncidents from "../components/UserIncidents";

function UserRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/UserSettings" element={<UserSettings />} />
        <Route path="/UserIncidents" element={<UserIncidents />} />
      </Routes>
    </div>
  );
}

export default UserRoutes;
