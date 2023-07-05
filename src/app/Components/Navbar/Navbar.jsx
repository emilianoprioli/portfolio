import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./navBar.module.css";
const Navbar = () => {
  return (
    <div className={style.container}>
      <p className={style.p}>Emiliano Prioli / Full Stack developer</p>
      <div className={style.iconContainer}>
        <FontAwesomeIcon className={style.icon} icon={faLinkedin} />
        <FontAwesomeIcon className={style.icon} icon={faGithub} />
        <FontAwesomeIcon className={style.icon} icon={faEnvelope} />
        <FontAwesomeIcon className={style.icon} icon={faMoon} />
      </div>
    </div>
  );
};

export default Navbar;
