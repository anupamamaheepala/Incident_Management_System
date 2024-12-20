// import React, { useState, useEffect } from 'react'

// function App() {
//   const [data, setData] = useState(null); // Start with null

//   useEffect(() => {
//     fetch("/home")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data); // Set the entire response
//         console.log(data);
//       });
//   }, []);

//   return (
//     <div>
//       {/* Check if data is null */}
//       {!data ? (
//         <p>Loading...</p>
//       ) : (
//         <p>{data.message}</p> // Display the "message" property
//       )}
//     </div>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';

import Signin from './pages/Signin';
import UserProfile from './pages/UserProfile';
import AdminPage from './pages/AdminPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/userProfile/*" element={<UserProfile />} />
        <Route path="/dashboard/*" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
