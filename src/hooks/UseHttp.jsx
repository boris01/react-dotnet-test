import { useEffect } from "react";
import { useState } from "react";

export function useHttp(httpFn, initialValue ) {
  const [isLoading, setIsLoading] = useState();
  const [httpData, setHttpData] = useState(initialValue);
  const [httpError, setHttpError] = useState();

  useEffect(() => {

    async function fetchData() {
      setIsLoading(true);
      try {
        const data = await httpFn();

        // navigator.geolocation.getCurrentPosition((position)=>{
        //   data.lat = position.coords.latitude;
        //   data.lon = position.coords.longitude; 
             
        // });
        
        setHttpData(data); 
        setIsLoading(false);   
      } catch (error) {
        setHttpError({ message: error.message || 'Failed to fetch/post data' });
        setIsLoading(false);
      } 
    }
    fetchData();
  }, [httpFn]);
return {
    isLoading,
    httpData,
    httpError,

}
}
