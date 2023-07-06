import style from "./Skills.module.css";
import SideBar from "../SideBar/Siderbar";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";

export default function Skills() {
  return (
    <main className={style.container}>
      <Navbar />
      <SideBar />
      <div className={style.subContainer}>
        <div className={style.sliderContainer}>
          <Slider />
        </div>
        <div className={style.contentContainer}>
          <div className={style.educationContainer}>
            <h2 className={style.h2}>Education</h2>
            <ul className={style.ul}>
              <li className={style.li}>
                <h3 className={style.h3}>Henry bootcamp</h3>
                <h4>Feb 2023 - Jun 2023</h4>
                <p>
                  Bootcamp with over 700 hours of theoretical and practical
                  training. Technologies learned: JavaScript, React, CSS,
                  Node.js, Redux, Git, PostgreSQL, Sequelize, HTML, Express.
                </p>
              </li>
              <li className={style.li}>
                <h3 className={style.h3}>Centro de e-Learning UTN FRBA</h3>
                <h4>Mar 2022 - Ago 2022</h4>
                <p>
                  Certified course. Technologies learned: JavaScript, React,
                  CSS, Angular, Node.js
                </p>
              </li>
            </ul>
          </div>
          <div className={style.softContainer}>
            <ul className={style.ul}>
              <h2 className={style.h2}>Soft Skills</h2>
              <li className={style.li}>Autodidact</li>
              <li className={style.li}>Dedication</li>
              <li className={style.li}>Tenacity</li>
              <li className={style.li}>Positive attitude</li>
              <li className={style.li}>Autonomous</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
