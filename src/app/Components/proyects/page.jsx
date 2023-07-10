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
            <h4 className={style.h4}>About the app</h4>
            <div>
              <p className={style.p}>
                The objective of the application was to develop a comprehensive
                appointment system for Medicina y Salud Berazategui. The
                application features include the primary goal of the application
                itself, as well as an administrative panel developed to manage
                all its functionalities and characteristics. For clients, we
                implemented user creation, registration, and modification, along
                with third-party login.<br></br> When it comes to acquiring an
                appointment at the medical center, it was based on the selection
                of days, time slots, or professionals. This development approach
                was chosen to address the need for immediate appointments, where
                patients would be assigned to available professionals, while
                allowing them to choose their preferred specialist when an
                appointment becomes available.<br></br> To save time, external
                payment methods were implemented, which presented a significant
                challenge due to administrative delays when many patients arrive
                simultaneously at the health center.
              </p>
            </div>
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
