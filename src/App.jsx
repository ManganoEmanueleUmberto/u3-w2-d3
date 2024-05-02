import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/Topbar";
import TvShows from "./components/TvShows";
import TrendingCarousel from "./components/TrendingCarousel";
import WatchItCarousel from "./components/WatchItCarousel";
import NewRealeasesCarousel from "./components/NewReleasesCarousel";
import StarWarsCarouselServer from "./components/StarWarsCarouselServer";
import HarryPotterCarouselServer from "./components/HarryPotterCarouselServer";
import SpideManCarouselServer from "./components/SpideManCarouselServer";
import MyFooter from "./components/MyFooter";
import Profile from "./components/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Topbar />
        </header>

        <main className="bg-dark">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <TvShows />
                  <TrendingCarousel />
                  <WatchItCarousel />
                  <NewRealeasesCarousel />
                  <StarWarsCarouselServer />
                  <HarryPotterCarouselServer />
                  <SpideManCarouselServer />
                  <MyFooter />
                </>
              }
            />

            <Route path="/settings" element={<Profile />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
