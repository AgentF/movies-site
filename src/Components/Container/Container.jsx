import React, { useState, useEffect } from 'react';
import useFetchTMDb from '../../hooks/useFetchTMDb';
import MoviesList from '../MoviesList';
import Header from '../Header';
import './Container.css';

function App() {
  const [search, setSearch] = useState('');
  const [
    data,
    statusMessage,
    isLoading,
    thereIsAnError,
    setOptions,
    setPage,
  ] = useFetchTMDb('trending');

  useEffect(() => {
    setOptions(['movie', 'week']);
  }, []);

  return (
    <>
      {thereIsAnError ? (
        <>
          <p>{statusMessage}</p>
        </>
      ) : (
        <>
          {data && (
            <div className="container">
              <Header
                isLoading={isLoading}
                total_pages={data.total_pages}
                page={data.page}
                setPage={setPage}
                setSearch={setSearch}
                search={search}
              />
              <MoviesList
                data={data}
                search={search}
                setSearch={setSearch}
                isLoading={isLoading}
              />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;
