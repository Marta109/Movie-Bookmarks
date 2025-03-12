import { getPlayersData } from "../../../../utils/playersData";
import "./players-table.css";

const PlayersTable = () => {
  const data = getPlayersData();

  const sortedData = Object.values(data).sort(
    (a, b) => +b.score.split("/")[0] - +a.score.split("/")[0]
  );
  const rows = sortedData.map((player, index) => (
    <tr key={index}>
      <th scope="row">
        {index + 1} {index === 0 ? "🏆" : ""}
      </th>
      <td className="user-name">{player.userName}</td>
      <td>{player.score}</td>
      <td>{player.time}</td>
      <td>
        {player.score
          .split("/")
          .map((el) => el / 10)
          .join(" - ")}
      </td>
    </tr>
  ));

  return (
    <div className="players-table">
      Top Players 🏆
      <table className="table table-dark  table-striped table-bordered">
        <thead class="table-light">
          <tr>
            <th scope="col">Rating 🥇</th>
            <th scope="col">User Name</th>
            <th scope="col">Points</th>
            <th scope="col">Time Used</th>
            <th scope="col">Answer</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">{rows}</tbody>
      </table>
    </div>
  );
};

export default PlayersTable;
