import { CiSearch } from "react-icons/ci";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import style from "./SearchBar.module.css";
const SearchBar = () => {
  return (
    <div className={style.searchbar}>
      <input className={style.input} type="text" placeholder="Search a song" />
      <div className={style.button}>
        <CiSearch className={style.searchIcon} />
        <GiPerspectiveDiceSixFacesRandom className={style.searchIcon} />
      </div>
    </div>
  );
};
export default SearchBar;
