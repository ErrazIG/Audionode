import { useState } from "react";
import { AiOutlineEnter } from "react-icons/ai";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Search Query:", searchQuery);
    setSearchQuery("");
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

export default SearchBar;
