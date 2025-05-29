const setPlayersData = (data) => {
  let playersData = localStorage.getItem("playersData");
  if (playersData) {
    playersData = JSON.parse(playersData);
    playersData[data.userName] = data;
    localStorage.setItem("playersData", JSON.stringify(playersData));
  } else {
    localStorage.setItem(
      "playersData",
      JSON.stringify({ [data.userName]: data })
    );
  }
};
const getPlayersData = () => {
  let playersData = localStorage.getItem("playersData");
  return playersData ? JSON.parse(playersData) : {};
};

export { setPlayersData, getPlayersData };
