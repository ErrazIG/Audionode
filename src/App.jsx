import "./App.css";
import MusicPlayer from "./components/musicPlayer/MusicPlayer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Searchbar from "./components/searchbar/Searchbar.jsx";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="content">
          <Searchbar />
        </div>
        <MusicPlayer />
      </div>
    </>
  );
}

export default App;
