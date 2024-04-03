import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';


const SongItem = ({ song, index, addToFavorites, favoriteList}) => {
    return (
      <div className="song-item">
       
        <img className = "list-image" src={song.image} alt="song-img" />

      <div className = "artist-and-star">
            <div className = "name-and-artist">
                  <h3 className="song-name">{song.name}</h3>
                  <p className="song-artist">{song.artist}</p>
              </div>

              <button className="add-to-favorites" onClick={() => addToFavorites(song)} >
                  {favoriteList.includes(song) ? (
                    <FontAwesomeIcon icon={solidHeart} />
                  ) : (
                    <FontAwesomeIcon icon={regularHeart} />
                  )}
                </button>
      </div>
        
      <div className="additional-elements">
          <div className="length-and-icon">
          <FontAwesomeIcon icon={faClock} />
            <p className="song-length">{song.length}</p>
          </div>
          <div className="rating-and-icon">
            <FontAwesomeIcon icon={faStar} />
            <p className="song-rating">{song.rating}</p>
          </div>
          <div className="genre-and-icon">
            <FontAwesomeIcon icon={faMusic} />
            <p className="song-genre">{song.genre}</p>
          </div>
         
      </div>
       
        
        </div>
    );
  };

  export default SongItem;