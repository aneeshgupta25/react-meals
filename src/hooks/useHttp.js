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

  function clearData() {
    setData(initialData)
  }

  const sendRequest = useCallback(async function sendRequest(data) {    
    setIsLoading(true);
    try {
      const resData = await sendHttpRequest(url, {...config, body: data});
      setData(resData);
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, [url, config])

  useEffect(() => {
    if(!config || (config && (config.method === 'GET' || !config.method))) {
     sendRequest()
    }
  }, [config, sendRequest])  
  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData
  }
}

export default useHttp;