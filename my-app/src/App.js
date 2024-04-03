import './App.css';
import songData from "./assets/song-data.json";
import SongItem from "./components/SongItem.js";
import { useState } from "react";
import {RatingDropDown} from "./components/RatingDropDown.js"

//filter = funnel
//sort = in order



function App() {

    const [favorites, setFavorites] = useState([])

    const addToFavorites = (songName) => {
        const updatedFavorites = [...favorites, songName]
        setFavorites(updatedFavorites)
      }

    const removeFromFavorites = (songName) => {
        const updatedFavorites = favorites.filter(item => item !== songName)
        setFavorites(updatedFavorites)
    }  

  return (

    <div className="App">
    <h1 className="header"> Simple Spotify</h1>

    

    <button> filter genre </button>
    <button> sorting time </button>

       <div className="song-list-side">
      
            <div className="song-item-grid">
                {songData.map((item, index) => (
                <SongItem key={index} song={item} index={index} addToFavorites={addToFavorites} /> 
              ))}
            </div>
    </div>

    <div class="favorite-song-side">

      <h3>Favorite Songs</h3>
      <p>Please add your favorite songs!</p>
      {favorites.map((item,index) => (
        <div className="favorites-list">
            {index + 1}. {item}
            <button className="add-to-cart" onClick={() => removeFromFavorites(item)}>
                -
            </button>
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;
