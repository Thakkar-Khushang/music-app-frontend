import { useState, useEffect } from 'react'
import MusicPlayer from './MusicPlayer'

function App() {
  let play = true;

  let [songs, setSongs] = useState([])

  useEffect(() => {
    fetch('https://iste-musicapp.azurewebsites.net/api/songs/search?q=take')
      .then((resp) => resp.json())
      .then((data) => {
        setSongs(data)
      })

    return () => { }
  })


  return (
    <div className="App">
      <MusicPlayer songs={songs} />
    </div>
  );
}

export default App;
