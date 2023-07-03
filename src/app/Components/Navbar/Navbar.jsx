import {faLinkedin,faGithub} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope,faMoon} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from "./navBar.module.css"
const Navbar = () => {
    return(
        <div className={style.container}>
            <p className={style.p}>Emiliano Prioli / Full Stack developer</p>
            <div className={style.iconContainer}>
            <FontAwesomeIcon className={style.icon} icon={faLinkedin} size="xl" />
            <FontAwesomeIcon className={style.icon} icon={faGithub} size="xl" />
            <FontAwesomeIcon className={style.icon} icon={faEnvelope} size="xl" />
            <FontAwesomeIcon className={style.icon} icon={faMoon} size="xl" />
            </div>
        </div>
    )
}

export default Navbar