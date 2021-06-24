import axios from "axios";
import { useState, useEffect } from "react";

function ApiCall() {
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState(null); //요청해서 받아오는 데이터
  const [error, setError] = useState(null); //error handling

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:4000/api/board");
        setLoading(false);
        console.log("response ", response);
        setPayload(response.data);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (loading === true) {
    return <div>loading</div>;
  }

  if (error !== null) {
    return <div>Error</div>;
  }
  return <div>{JSON.stringify(payload)}</div>;
}

export default ApiCall;
