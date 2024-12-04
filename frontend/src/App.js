import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState(null); // Start with null

  useEffect(() => {
    fetch("/home")
      .then((res) => res.json())
      .then((data) => {
        setData(data); // Set the entire response
        console.log(data);
      });
  }, []);

  return (
    <div>
      {/* Check if data is null */}
      {!data ? (
        <p>Loading...</p>
      ) : (
        <p>{data.message}</p> // Display the "message" property
      )}
    </div>
  );
}

export default App;
