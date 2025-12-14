//Basic Fetching Pattern (useEffect + fetch)
import React, { useEffect, useState } from "react";

function BasicFetchingPattern() {
  const [responseData, setResponseData] = useState([]);
  const [loding, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setResponseData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  console.log(responseData);
  return (
    <div>
        {responseData.map((item)=>(
            <p>{item.name}</p>
        ))}
    </div>
  );
}

export default BasicFetchingPattern;
