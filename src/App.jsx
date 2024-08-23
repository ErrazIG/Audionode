import "./App.css";
import MusicPlayer from "./components/musicPlayer/MusicPlayer.jsx";
import Searchbar from "./components/searchbar/Searchbar.jsx";

function App() {
  return (
    <>
      <div className="container">
        <div className="logo"></div>
        <div className="content">
          <Searchbar />
        </div>
        <MusicPlayer />
      </div>
    </>
  );
}

export default App;
