import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <h1 className={style.logo}>Audionode</h1>
      <ul>
        <li className={style.txt1}>
          <p>#####</p>
        </li>
        <li className={style.txt2}>
          <p>#####</p>
        </li>
        <li className={style.txt3}>
          <p>#####</p>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
