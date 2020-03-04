/* eslint-disable no-return-assign */
import { useState, useEffect } from 'react';
import { TMDb } from '../Services/TMDbConfig';

function useFetchTMDb(endpoint) {
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
        const queryOptions = options
          ? Object.keys(options).reduce(
              // eslint-disable-next-line no-param-reassign
              (acc, option) => (acc += `/${options[option]}`),
              endpoint,
            )
          : endpoint;
        const rawResponse = await TMDb.get(
          `${queryOptions}&${process.env.REACT_APP_TMDb_API_Key}`,
        );
        const response = rawResponse.data;

        setData(response.data);
        setIsLoading(false);
        setStatusMessage(response.statusMessage);
      } catch (error) {
        setStatusMessage(`Data fetch failed due to: ${error}`);
        setThereIsAnError(true);
      }
    };
    if (endpoint) {
      fetchData();
    }
  }, [options]);
  return [data, statusMessage, isLoading, thereIsAnError, setOptions];
}

export default useFetchTMDb;
