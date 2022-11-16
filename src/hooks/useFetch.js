import {useState, useEffect} from 'react';
import request from '../api/fetcher';

export default function useFetch(path) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

    useEffect(() => {
      request(path).then((response)=>{
        setData(response.data);
        setIsLoading(false);
        setIsError(false);
        setError(null);
      }).catch((error)=>{
        setIsError(true)
        setError(error);
      });
    }, [path]);
    
    return { data, isLoading , isError, error };
  }