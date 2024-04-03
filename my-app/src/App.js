import './App.css';
import songData from "./assets/song-data.json";
import SongItem from "./components/SongItem.js";
import { useState } from "react";

//filter = funnel
//sort = in order

function convertToSeconds (length) {
  const [minutes, seconds] = length.split(":").map(Number);
  return minutes * 60 + seconds;
}


function App() {

    const [favorites, setFavorites] = useState([])
    const [displayItems, setDisplayItems] = useState(songData)

    const handlePush = (e) => {
      let value = e.target.value
      if (value == "allRatings"){
        setDisplayItems(songData)
      } else if (value == "oneStar") {
        const filter = songData.filter(item => item.rating === 1)
        setDisplayItems(filter);
      } else if (value == "twoStar") {
        const filter = songData.filter(item => item.rating === 2)
        setDisplayItems(filter);
      } else if (value == "threeStar") {
        const filter = songData.filter(item => item.rating === 3)
        setDisplayItems(filter);
      } else if (value == "fourStar") {
        const filter = songData.filter(item => item.rating === 4)
        setDisplayItems(filter);
      } else if (value == "fiveStar") {
        const filter = songData.filter(item => item.rating === 5)
        setDisplayItems(filter);
      } else if (value == "allGenres") {
        setDisplayItems(songData);
      } else if (value == "pop") {
        const filter = songData.filter(item => item.genre === "Pop")
        setDisplayItems(filter);
      } else if (value == "alternative") {
        const filter = songData.filter(item => item.genre === "Alternative")
        setDisplayItems(filter);
      } else if (value == "dance-electronic") {
        const filter = songData.filter(item => item.genre === "Dance/Electronic")
        setDisplayItems(filter);
      } else if (value == "rnb") {
        const filter = songData.filter(item => item.genre === "R&B")
        setDisplayItems(filter);
      } else if (value == "country") {
        const filter = songData.filter(item => item.genre === "Country")
        setDisplayItems(filter);
      }
    }


    const sort = () => {


      const sort = [...displayItems].sort((a,b) => {
        const secondsA = convertToSeconds(a.length)
        const secondsB = convertToSeconds(b.length)

        return secondsA - secondsB;
      })
      // console.log("sort " + sort[0].name)
      // console.log(convertToSeconds(displayItems[0].length))
      setDisplayItems(sort);

    }

    const addToFavorites = (songName) => {
      if (!favorites.includes(songName)){
        const updatedFavorites = [...favorites, songName]
        setFavorites(updatedFavorites)
      }
        
      }

    const removeFromFavorites = (songName) => {
        const updatedFavorites = favorites.filter(item => item !== songName)
        setFavorites(updatedFavorites)
    } 

    const reset = () => {
      setDisplayItems(songData)
    }
    

  return (

    <div className="App">
    <h1 className="header"> Simple Spotify</h1>

    <div className = "list-and-favorites">

       <div className="song-list-side">

       <button onClick={reset} >Reset</button>

       <button value= "allRatings" onClick = {handlePush} className = "filter"> All Ratings </button>
       <button value= "oneStar" onClick = {handlePush} className = "filter"> 1 Star </button>
       <button value= "twoStar" onClick = {handlePush} className = "filter"> 2 Star </button>
       <button value= "threeStar" onClick = {handlePush} className = "filter"> 3 Star </button>
       <button value= "fourStar" onClick = {handlePush} className = "filter"> 4 Star </button>
       <button value= "fiveStar" onClick = {handlePush} className = "filter"> 5 Star </button>

       <button value= "allGenres" onClick = {handlePush} className = "filter"> All Genres </button>
       <button value= "pop" onClick = {handlePush} className = "filter"> Pop </button>
       <button value= "alternative" onClick = {handlePush} className = "filter"> Alternative </button>
       <button value= "dance-electronic" onClick = {handlePush} className = "filter"> Dance/Electronic </button>
       <button value= "rnb" onClick = {handlePush} className = "filter"> R&B </button>
       <button value= "country" onClick = {handlePush} className = "filter"> Country </button>

       <button onClick = {sort}> Duration: Short to Long </button>
      
            <div className="song-item-grid">
                {displayItems.map((item, index) => (
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

    </div>

   
  );
}

export default App;
