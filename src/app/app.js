import { AppProvider } from "../contexts/appContext";
import { Route, Routes } from "react-router";
import MainPage from "../pages/main-page/main-page";
import Header from "../components/header/header";
import Bookmarks from "../pages/bookmarks/bookmarks";
import Quiz from "../pages/quiz/quiz";
import NotFound from "../pages/not-found/not-found";
import "./app.css";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Movie-Bookmarks" element={<MainPage />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </AppProvider>
  );
}

export default App;
