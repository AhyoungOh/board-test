import axios from "axios";
import { useState, useEffect } from "react";
import useApiCall from "../../hooks/useApiCall";

function ApiCall() {
  const [loading, payload, error] = useApiCall(
    "http://localhost:4000/api/board"
  );

  if (loading === true) {
    return <div>loading</div>;
  }

  if (error !== null) {
    return <div>Error</div>;
  }
  return <div>{JSON.stringify(payload)}</div>;
}

export default ApiCall;
