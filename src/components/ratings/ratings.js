import imdbIcon from "../../assets/images/icon/imdb-icon.png";
import rottenTomatoesIcon from "../../assets/images/icon/rottenTomatoes-icon.png";
import metacriticIcon from "../../assets/images/icon/metacritic-icon.png";
import "./ratings.css";
const Rating = ({ ratings }) => {
  return (
    <div className="ratings-container">
      <h6>Ratings</h6>
      {ratings.map((el) => {
        return (
          <li key={el.Source} className="ratings">
            <span>{el.Source}</span>
            {el.Source === "Internet Movie Database" && (
              <div className="rating-item" title="IMDb rating">
                <img src={imdbIcon} alt="imdb-icon" />
                {el.Value}
              </div>
            )}
            {el.Source === "Rotten Tomatoes" && (
              <div className="rating-item" title="Rotten Tomatoes rating">
                <img src={rottenTomatoesIcon} alt="Rotten Tomatoes icon" />
                {el.Value}
              </div>
            )}
            {el.Source === "Metacritic" && (
              <div className="rating-item" title="Metacritic rating">
                <img src={metacriticIcon} alt="Metacritic icon" />
                {el.Value}
              </div>
            )}
          </li>
        );
      })}
    </div>
  );
};

export default Rating;
