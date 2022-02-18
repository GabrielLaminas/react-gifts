import React from 'react'
import GiftList from './components/GiftList';
import Header from './components/Header';
import Fetch  from './services/Fetch';

const App = () => {
  const { trending, loading, searchGif, setSearchGif } = Fetch();

  return (
    <>
      <Header value={searchGif} setValue={setSearchGif} />
      <GiftList gifs={trending} load={loading} />
    </>
  );
}

export default App;