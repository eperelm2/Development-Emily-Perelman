import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const SongItem = ({ song, index, addToFavorites }) => {
    return (
      <div className="song-item">
       
        <img src={song.image} alt="song-img" />

      <div className = "artist-and-star">
            <div className = "name-and-artist">
                  <h3 className="song-name">{song.name}</h3>
                  <p className="song-artist">{song.artist}</p>
              </div>

              <button className="add-to-favorites" onClick={() => addToFavorites(song.name)}>
                    <FontAwesomeIcon icon={faStar} />
                </button>
      </div>
        
      <div className="additional-elements">
          <div className="length-and-icon">
            <p className="song-length">{song.length}</p>
          </div>
          <div className="rating-and-icon">
            <p className="song-rating">{song.rating}</p>
          </div>
          <div className="genre-and-icon">
            <p className="song-genre">{song.genre}</p>
          </div>
         
      </div>
       
        
        </div>
    );
  };

  export default SongItem;