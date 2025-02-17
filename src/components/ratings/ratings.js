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
                <img
                  src="https://img.icons8.com/?size=100&id=12246&format=png&color=000000"
                  alt="imdb-icon"
                />
                {el.Value}
              </div>
            )}
            {el.Source === "Rotten Tomatoes" && (
              <div className="rating-item" title="Rotten Tomatoes rating">
                <img
                  src="https://img.icons8.com/?size=100&id=36478&format=png&color=000000"
                  alt="Rotten Tomatoes icon"
                />
                {el.Value}
              </div>
            )}
            {el.Source === "Metacritic" && (
              <div className="rating-item" title="Metacritic rating">
                <img
                  src="https://img.icons8.com/?size=100&id=YaSzxFsOJh3a&format=png&color=000000"
                  alt="Metacritic icon"
                />
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
