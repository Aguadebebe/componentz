import React, { useState } from "react";
import "../CompCSS/Data.css";

 

function Data() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Replace with your API
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
       
      <button onClick={fetchData} className="button-fetch">Fetch Data</button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p className="api-text">{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default Data;
