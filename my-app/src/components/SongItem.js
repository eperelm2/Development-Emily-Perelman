const SongItem = ({ song, index, addToFavorites }) => {
    return (
      <div className="song-item">
       
        <img src={song.image} alt="song-img" />
        <div className = "name-and-artist">
            <p className="song-name">{song.name}</p>
            <p className="song-artist">{song.artist}</p>
        </div>
        
        <p className="song-length">{song.length}</p>
        <p className="song-rating">{song.rating}</p>
        
        </div>
    );
  };

  export default SongItem;