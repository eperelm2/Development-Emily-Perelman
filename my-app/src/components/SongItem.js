import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const SongItem = ({ song, index, addToFavorites }) => {
    return (
      <div className="song-item">
       
        <img src={song.image} alt="song-img" />
        <div className = "name-and-artist">
            <p className="song-name">{song.name}</p>
            <p className="song-artist">{song.artist}</p>
        </div>

        <button className="add-to-cart" onClick={() => addToFavorites(song.name)}>
              <FontAwesomeIcon icon={faStar} />
          </button>
        
        <p className="song-length">{song.length}</p>
        <p className="song-rating">{song.rating}</p>
        <p className="song-genre">{song.genre}</p>
        
        </div>
    );
  };

  export default SongItem;