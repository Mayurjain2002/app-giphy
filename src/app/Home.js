import axios from 'axios'
import React, { useState,useEffect } from 'react'

const Home = () => {
    const [query,setQuery] = useState('')
  const [results,setResults] = useState([])
  const [offset, setOffset] = useState(0);
  // this is used for pagination purposes 
  // and i have set limit of 5 items at one time

  const limit = 5;
  useEffect(() => {
    search();
  }, [offset]);

  const search = async () =>{
    try {
      const api = "GlVGYHkr3WSBnllca54iNt0yFbjz7L65";
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${query}&limit=${limit}&offset=${offset}`;
      const res = await axios.get(url);
      setResults(res.data.data);
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const handle = (e) =>{
    setQuery(e.target.value)
  }

  const handleSearch = () => {
    setOffset(0);
    search();
  };

  const handleNextPage = () => {
    setOffset(offset + limit);
  };

  const handlePrevPage = () => {
    if (offset >= limit) {
      setOffset(offset - limit);
    }
  };
  return (
    <div className='ser'>
    <div className='search'>
    <div className='search1'>
      
    <input  className='search2' type='text'  placeholder='Article name or keywords...' value={query} onChange={handle} />
    <button className='btn' onClick={handleSearch}>Search</button>
    </div>
    <div className='main'>
      {results.map((gif) =>(
        <img className='main1' src={gif.images.fixed_height.url} key={gif.id} alt={gif.title}/>
      ))}
    </div>
    <div className='btnn'>
        <button className='btn' onClick={handlePrevPage} disabled={offset === 0}>
          Previous
        </button>
        <button className='btn' onClick={handleNextPage}>Next</button>
      </div>
   </div>
   </div>
  )
}

export default Home