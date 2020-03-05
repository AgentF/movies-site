/* eslint-disable no-return-assign */
import { useState, useEffect } from 'react';
import { TMDb } from '../Services/TMDbConfig';

function useFetchTMDb(endpoint) {
  const [page, setPage] = useState(0);
  const [options, setOptions] = useState(null);
  const [data, setData] = useState(null);
  const [statusMessage, setStatusMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [thereIsAnError, setThereIsAnError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setStatusMessage('Fetching data...');
      try {
        let query = `${endpoint}/`;
        if (Array.isArray(options)) {
          query += options.join('/');
        }
        query += `?api_key=${process.env.REACT_APP_TMDb_API_Key}`;
        if (endpoint === 'trending' && page) {
          query += `&page=${page}`;
        }
        const rawResponse = await TMDb.get(query);
        const response = rawResponse.data;

        setData(response);
        setIsLoading(false);
        setStatusMessage('Succesfully Fetched!');
      } catch (error) {
        setStatusMessage(`Data fetch failed due to: ${error}`);
        setThereIsAnError(true);
      }
    };
    if (endpoint && Array.isArray(options)) {
      fetchData();
    }
  }, [endpoint, page, options]);
  return [data, statusMessage, isLoading, thereIsAnError, setOptions, setPage];
}

export default useFetchTMDb;
