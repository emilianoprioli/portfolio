import style from "./proyects.module.css";
import SideBar from "../SideBar/Siderbar";
import Navbar from "../Navbar/Navbar";

export default function Proyects() {
  return (
    <div className={style.container}>
      <SideBar />
      <Navbar />
      <div className={style.subContainer}>
        <ul className={style.ul}>
          <li className={style.li}>
            <h3 className={style.h3}>MedConnect</h3>
            <h4 className={style.h4}>Technologies Stack</h4>
            <ol className={style.ol}>
              <li className={style.liOl}>Next.js</li>
              <li className={style.liOl}>Tailwind</li>
              <li className={style.liOl}>CSS</li>
              <li className={style.liOl}>Redux Toolkit</li>
              <li className={style.liOl}>Ant design</li>
              <li className={style.liOl}>Express.js</li>
              <li className={style.liOl}>PostgreSQL</li>
              <li className={style.liOl}>Sequelize</li>
            </ol>
          </li>
          <li className={style.li}>
            <h3 className={style.h3}>PI-Videogames</h3>
          </li>
          <li className={style.li}>
            <h3 className={style.h3}>Rick & Morty</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}
