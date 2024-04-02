import './App.css';
import songData from "./assets/song-data.json";
import SongItem from "./components/SongItem.js";

function App() {
  return (
    <div className="App">
       <h1> Simple Spotify</h1>

       <div className="song-list-side">
            <div className="song-item-grid">
                {songData.map((item, index) => (
                <SongItem key={index} song={item} index={index} /> 
              ))}
            </div>
    </div>

    <div class="favorite-song-side">
      Favorite Songs
    </div>
    </div>
  );
}

export default App;
