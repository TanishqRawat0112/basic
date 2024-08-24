import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [animes,setAnimes] = useState([]);
  useEffect(() => {
    axios.get('/api/animes')
     .then(response=>setAnimes(response.data))
     .catch((error)=>{
        console.log(error);
     })
  })
  
  return (
    <>
      <h1>
        FullStack Development
      </h1>
      <p>Animes : {animes.length}</p>

      {
        animes.map((anime)=>(
          <div key={anime.id}>
            <h2>
              {anime.title}
            </h2>
            <p>
              {anime.content}
            </p>
          </div>
        ))
      }
    </>
  )
}

export default App
