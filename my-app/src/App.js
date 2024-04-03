import './App.css';
import songData from "./assets/song-data.json";
import SongItem from "./components/SongItem.js";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

function convertToSeconds (length) {
  const [minutes, seconds] = length.split(":").map(Number);
  return minutes * 60 + seconds;
}

function App() {

    const [favorites, setFavorites] = useState([])
    const [displayItems, setDisplayItems] = useState(songData)
    const [selectedRating, setSelectedRating] = useState("allRatings");
    const [selectedGenre, setSelectedGenre] = useState("allGenres");
    const [sorted, setSorted] = useState(false);

  
    const handlePushRating = (e) => {
      let value = e.target.value;
      let filter = songData;
    
      if (value !== "allRatings") {
        filter = filter.filter(item => item.rating === parseInt(value));
      }
    
      if (selectedGenre !== "allGenres") {
        filter = filter.filter(item => item.genre === selectedGenre);
      }
    
      setDisplayItems(filter);
      setSelectedRating(value);
    };
    
    const handlePushGenre = (e) => {
      let value = e.target.value;
      let filter = songData;
    
      if (value !== "allGenres") {
        filter = filter.filter(item => item.genre === value);
      }
    
      if (selectedRating !== "allRatings") {
        filter = filter.filter(item => item.rating === parseInt(selectedRating));
      }
    
      setDisplayItems(filter);
      setSelectedGenre(value);
    };
    


    const sort = () => {
      const sort = [...displayItems].sort((a,b) => {
          const secondsA = convertToSeconds(a.length)
          const secondsB = convertToSeconds(b.length)
          return secondsA - secondsB;
        })
      
      
      setDisplayItems(sort);
      setSorted(true);

    }

    const addToFavorites = (song) => {
      if (!favorites.includes(song)){
        const updatedFavorites = [...favorites, song]
        setFavorites(updatedFavorites)
      } else {
        const updatedFavorites = favorites.filter(item => item !== song)
        setFavorites(updatedFavorites)
      }
    
    }

    const removeFromFavorites = (song) => {
        const updatedFavorites = favorites.filter(item => item !== song)
        setFavorites(updatedFavorites)
    } 

    const reset = () => {
      setDisplayItems(songData)
      setSelectedRating("allRatings")
      setSelectedGenre("allGenres")
      setSorted(false);
    }
    
  return (

    <div className="App">
    <h1 className="header"> Simple Spotify</h1>

    <div className = "list-and-favorites">
       <div className="song-list-side">

          <div className='buttons'>
            <div className="filter-title">Filters and Sorting:</div>
            <button className= "reset-button" onClick={reset} >Reset</button>
            <div className="ratingButtons">
              <button value= "allRatings" onClick = {handlePushRating} className={`filter ${selectedRating === "allRatings" ? "selected" : ""}`}> All Ratings </button>
              <button value= "1" onClick = {handlePushRating} className={`filter ${selectedRating === "1" ? "selected" : ""}`}> 1 Star </button>
              <button value= "2" onClick = {handlePushRating} className={`filter ${selectedRating === "2" ? "selected" : ""}`}> 2 Star </button>
              <button value= "3" onClick = {handlePushRating} className={`filter ${selectedRating === "3" ? "selected" : ""}`}> 3 Star </button>
              <button value= "4" onClick = {handlePushRating} className={`filter ${selectedRating === "4" ? "selected" : ""}`}> 4 Star </button>
              <button value= "5" onClick = {handlePushRating} className={`filter ${selectedRating === "5" ? "selected" : ""}`}> 5 Star </button>
            </div>

            <div className="genreButtons">

              <button value= "allGenres" onClick = {handlePushGenre} className={`filter ${selectedGenre === "allGenres" ? "selected" : ""}`}> All Genres </button>
              <button value= "Pop" onClick = {handlePushGenre} className={`filter ${selectedGenre === "Pop" ? "selected" : ""}`}> Pop </button>
              <button value= "Alternative" onClick = {handlePushGenre} className={`filter ${selectedGenre === "Alternative" ? "selected" : ""}`}> Alternative </button>
              <button value= "Dance/Electronic" onClick = {handlePushGenre} className={`filter ${selectedGenre === "Dance/Electronic" ? "selected" : ""}`}> Dance/Electronic </button>
              <button value= "R&B" onClick = {handlePushGenre} className={`filter ${selectedGenre === "R&B" ? "selected" : ""}`}> R&B </button>
              <button value= "Country" onClick = {handlePushGenre} className={`filter ${selectedGenre === "Country" ? "selected" : ""}`}> Country </button>

            </div>

            <button className={`sort-button ${sorted === true ? "selected" : ""}`} onClick = {sort}> Duration: Short to Long </button>


          </div>
      
        <div >
        <div className="filter-title"> Songs:</div>
        {displayItems.length===0 ? (
          <p  className="no-songs-available">Sorry, there are no songs with these features!</p>
          
          ) : (
          <div className="song-item-grid">
          {displayItems.map((item, index) => (
            <SongItem key={index} song={item} index={index} addToFavorites={addToFavorites} favoriteList={favorites}/> 
          ))}
          </div>
        )}
          
        </div>
    </div>

    

    <div class="favorite-song-side">
    

    <h3>Favorite Songs</h3>
    {favorites.length ===0 ? (<div> </div>) : ( 
      <div className="number-songs">
        {favorites.length} songs
      </div>
    )}
      {favorites.length === 0 ? (<p>Please add your favorite songs!</p>) : (
      <div> 
        {favorites.map((item,index) => (
          <div className="favorites-list">

            <div className="favorites-leftSide">

            {index + 1}. <img className= "favorite-image" src={item.image} alt="song-img" /> {item.name}

            </div>

              <div className="favorites-rightSide"> 
                {item.length}
                <button className="remove-from-favorites" onClick={() => removeFromFavorites(item)}>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
               </div>
                  
          </div>
        ))}
      </div>
      )}
     
    </div>
    </div>
    </div>
  );
}

export default App;
