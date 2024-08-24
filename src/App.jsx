import { useState } from "react";
import "./App.css";
import MusicPlayer from "./components/musicPlayer/MusicPlayer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Searchbar from "./components/searchbar/Searchbar.jsx";

function App() {
  const [videoData, setVideoData] = useState(null);

  const handleSearch = (searchInfo) => {
    setVideoData(searchInfo);
  };

  return (
    <>
      <div className="container">
        <Navbar />
        <div className="content">
          <Searchbar onSearch={handleSearch} />
        </div>

        <MusicPlayer videoData={videoData} />
      </div>
    </>
  );
}

export default App;
