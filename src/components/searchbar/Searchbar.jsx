import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import { AiOutlineEnter } from "react-icons/ai";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import style from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // const apiKey = env.API_YOUTUBE_KEY;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!searchQuery) return;

    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            maxResults: 1,
            q: searchQuery,
            key: "apiKey",
            type: "video",
          },
        }
      );

      const videoData = response.data.items[0];
      onSearch(videoData);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setSearchQuery("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.searchbar}>
      <textarea
        className={style.input}
        placeholder="Search a song"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <div className={style.button}>
        <div className={style.keys}>
          <IoIosSearch className={style.searchIcon} onClick={handleSubmit} />
          <p className={style.keysIcon}>
            <AiOutlineEnter className={style.key} />
          </p>
        </div>
        <div className={style.keys}>
          <GiPerspectiveDiceSixFacesRandom className={style.searchIcon} />
          <p className={style.keysIcon}>
            <span className={`${style.key} ${style.rKey}`}>R</span>
          </p>
        </div>
      </div>
    </form>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
