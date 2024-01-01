import { useCallback, useEffect, useState } from "react";

export async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();
  if (!response.ok) throw new Error(resData.message || "Something went wrong!");
  return resData;
}

export function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState();

  const sendRequest = useCallback(async function sendRequest() {
    setIsLoading(true);
    try {
      const resData = await sendHttpRequest(url, config);
      setData(resData);
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, [url, config])

  useEffect(() => {
    if(!config || (config && (config.method === 'GET' || !config.method))) {
     sendRequest(config)
    }
  }, [config, sendRequest])  
  return {
    data,
    isLoading,
    error,
    sendRequest
  }
}

export default useHttp;