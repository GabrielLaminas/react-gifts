import React from 'react'

const bestGifs = 'https://api.giphy.com/v1/gifs/trending?api_key=e6jY3jQIJ61sebCJkQkNwKQyYuNu58If&limit=25&rating=g';

export default function Fetch(){
  const [trending, setTrending] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [searchGif, setSearchGif] = React.useState('');

  const searchGifs = `https://api.giphy.com/v1/gifs/search?api_key=e6jY3jQIJ61sebCJkQkNwKQyYuNu58If&q=${searchGif}&limit=25&offset=10&rating=g&lang=en`;

  React.useEffect(() => {
    async function initFetch(){
      try{
        const response = (searchGif === '') 
          ? await fetch(bestGifs) 
          : await fetch(searchGifs);
        const data = await response.json();
        setTrending(data);
      }
      catch(e){
        console.log(e);
      }
      finally{ setLoading(false) }
    }
    initFetch()
  }, [searchGif]);

  return { trending, loading, searchGif, setSearchGif }
}