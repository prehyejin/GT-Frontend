import {useState, useEffect} from 'react';
import {fetcher} from '../api/fetcher';

export default function useFetch(initData, delay = 1500) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
  
    useEffect(() => {
      fetcher(initData, delay).then((response) => {
        setData(response);
        setIsLoading(false);
      });
    }, [initData]);
    
    return { data, setData, isLoading };
  }