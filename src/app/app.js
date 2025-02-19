import { useState } from "react";
import { AppProvider } from "../contexts/appContext";
import MainPage from "../pages/main-page/main-page";
import Header from "../components/header/header";
import Bookmarks from "../pages/bookmarks/bookmarks";
import "./app.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <AppProvider>
      <div className="App">
        <Header setCurrentPage={setCurrentPage} />
        {currentPage === "home" ? <MainPage /> : <Bookmarks />}
      </div>
    </AppProvider>
  );
}

export default App;
