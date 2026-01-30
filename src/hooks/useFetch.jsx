
// importing Default hooks and Dependancies 
import { useState, useEffect, useCallback } from "react";

// Main useFetch function 
const useFetch = (url) => {
  // taking data , loading, error with the help of useState()
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Data fetching arrow function , fetching data from URL
  const fetchData = useCallback(async () => {
    // first Loading is true & error is null , before data fetching
    setLoading(true);
    setError(null);

    // try{}catch() method for fetching data with possible error's
    try {
      // the response from URL
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      // storing data in the form of JSON
      const result = await response.json();
      setData(result);
    } catch (err) {
      // show message if any error is occured
      setError(err.message);
    } finally {
      // Laoding false if error accured or Not
      setLoading(false);
    }
  }, [url]); // if URL will change then only new fetch data will process

  // useEffect() function , one time data will fetched
  useEffect(() => {
    // if URL is occured then run the fetchData() function
    if (url) {
      fetchData();
    }
    // when URL and fetchdata() will run then the Effect will shown directly
  }, [fetchData, url]);

  // returning the value from the hooks function to another component
  return { data, loading, error };
};

export default useFetch;
