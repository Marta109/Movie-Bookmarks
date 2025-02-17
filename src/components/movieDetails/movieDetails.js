import getFlags from "../../utils/getFlags";
import getRatedDetails from "../../utils/getRatedDetails";
import Rating from "../ratings/ratings";
import "./movieDetails.css";

const MovieDetails = ({ data }) => {
  const {
    Actors,
    Awards,
    BoxOffice,
    Country,
    DVD,
    Director,
    Genre,
    Language,
    Metascore,
    Plot,
    Poster,
    Production,
    Rated,
    Ratings,
    imdbRating,
    imdbVotes,
    Type,
    Runtime,
    Released,
    Writer,
    Website,
  } = data;
  return (
    <>
      <div className="movie-details-container">
        <img src={Poster} className="img-fluid" alt="poster"></img>
        <table className="table table-dark table-striped-columns table-bordered">
          <tbody>
            <tr>
              <th scope="row">Released</th>
              <td>{Released}</td>
            </tr>
            <tr>
              <th scope="row">Runtime</th>
              <td>{Runtime}</td>
            </tr>
            <tr>
              <th scope="row">Rated </th>
              {getRatedDetails(Rated)}
            </tr>
            <tr>
              <th scope="row">Country</th>
              <td> {getFlags(Country)}</td>
            </tr>
            <tr>
              <th scope="row">Language</th>
              <td>{Language}</td>
            </tr>
            <tr>
              <th scope="row">Genre</th>
              <td>{Genre}</td>
            </tr>

            <tr>
              <th scope="row">Type</th>
              <td className="movie-type">{Type}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="descr-item">
            <h6> Ratings: IMDb - Metascore</h6>
            <div className="imdb-rating">
              <div className="imdb-item" title="IMDb rating">
                <img
                  src="https://img.icons8.com/?size=100&id=12246&format=png&color=000000"
                  alt="imdb-icon"
                />
                <div>{imdbRating} / 10</div>
              </div>
              <div className="imdb-item" title="Total IMDb votes.">
                <i className="fa-solid fa-users-line votes"></i>
                <div>Votes:</div>
                <div>{imdbVotes} </div>
              </div>
              <div
                className="imdb-item"
                title='"Critics’ score from Metacritic'
              >
                <div>
                  <img
                    src="https://img.icons8.com/?size=100&id=YaSzxFsOJh3a&format=png&color=000000"
                    alt="voice icon"
                  />
                </div>
                <div>{Metascore} / 100 </div>
              </div>
            </div>
          </div>
          <div className="descr-item">
            <h6>Actors</h6>
            <p>{Actors}</p>
          </div>
          <div className="descr-item">
            <h6>Writers</h6>
            <p>{Writer}</p>
          </div>
          <div className="plot-container">
            <h6> The Plot</h6>
            <p>{Plot}</p>
          </div>
          <Rating ratings={Ratings} />
          <div className="more-info">
            <button
              className="btn btn-warning"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseWidthExample"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
            >
              More Information
            </button>

            <div className="more-info-body">
              <div className="collapse" id="collapseWidthExample">
                <div className="card card-body">
                  <table className="table table-dark table-striped-columns ">
                    <tbody>
                      <tr>
                        <th scope="row">Awards </th>
                        <td>{Awards}</td>
                      </tr>
                      <tr>
                        <th scope="row">Director</th>
                        <td>{Director}</td>
                      </tr>
                      <tr>
                        <th scope="row">Production</th>
                        <td>{Production}</td>
                      </tr>
                      <tr>
                        <th scope="row">BoxOffice</th>
                        <td>{BoxOffice}</td>
                      </tr>

                      <tr>
                        <th scope="row">Website</th>
                        <td>{Website}</td>
                      </tr>
                      <tr>
                        <th scope="row">DVD</th>
                        <td>{DVD}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
