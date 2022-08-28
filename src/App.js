import logo from './logo.svg';
import './App.css';
import Searchbar from './Components/Searchbar/Searchbar'
import Videolist from './Components/Videolist/Videolist'
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  //states
  const [videos, setVideos] = useState([]);


  //effects
  useEffect(() => {
    handleTerm('tutorials');
  
  }, [])
  


  //Handlers
  const handleTerm = async (term) => {

    const response = await axios.get('https://www.googleapis.com/youtube/v3/search',{
      params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: process.env.REACT_APP_APIKEY,
        q: term
      }
    })
    setVideos(response.data.items)
  }
  
  return (
    <>
      <div className='container-fluid'>
        <Searchbar onTerm={handleTerm} />
        <Videolist className='bg-light' videos={videos} />
      </div>
    </>
  );
}

export default App;
