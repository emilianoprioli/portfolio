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
          </div>
          <div className={style.softContainer}>
            <h2 className={style.h2}>Soft Skills</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
