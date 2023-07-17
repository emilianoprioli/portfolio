import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./navBar.module.css";
const Navbar = () => {
  return (
    <div className={style.container}>
      <p className={style.p}>Emiliano Prioli / Full Stack developer</p>
      <div className={style.iconContainer}>
        <a href="https://www.linkedin.com/in/emiliano-prioli-543432234/?locale=en_US">
          <FontAwesomeIcon className={style.icon} icon={faLinkedin} />
        </a>
        <a href="https://github.com/emilianoprioli">
          <FontAwesomeIcon className={style.icon} icon={faGithub} />
        </a>
        <a href="mailto:emilianoprioli.ep@gmail.com">
          <FontAwesomeIcon className={style.icon} icon={faEnvelope} />
        </a>
        <FontAwesomeIcon className={style.icon} icon={faMoon} />
      </div>
    </div>
  );
};

export default Navbar;
