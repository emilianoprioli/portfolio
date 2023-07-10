"use client";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import style from "./app.module.css";
import SideBar from "./Components/SideBar/Siderbar";
import { styled } from "styled-components";
import TimeLapse from "./Components/timeLapse/TimeLapse";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "./Components/Slider/Slider";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(0);

  const Div = styled.div`
    display: flex;
    min-width: 20vw;
    height: 30px;
    transition: all 1s;
    background-color: #c7c7c7;
  `;

  const ScrollableDiv = ({ opacity }) => {
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        setIsScrolled(scrollTop + 250);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <div>
        <Div style={{ width: isScrolled, opacity: opacity }}></Div>
      </div>
    );
  };

  return (
    <main className={style.container}>
      <Navbar />

      <div className={style.landing}>
        <div className={style.spanContainer}>
          <span className={style.title}>
            FRONT <ScrollableDiv style={{ width: isScrolled }} /> END
          </span>
          <span className={style.middleTitle}>
            FRONT <ScrollableDiv opacity={0}></ScrollableDiv>
            END
          </span>
          <p className={style.developer}>DEVELOPER</p>
          <span className={style.arrowContainer}>
            <FontAwesomeIcon
              className={style.arrow}
              icon={faArrowDown}
              bounce
            />
            Scroll
          </span>
        </div>
      </div>

      <div className={style.aboutContainer}>
        <h3>About me</h3>
        <p>
          My name is Emiliano Prioli and I am a FullStack Developer, but my
          passion is the Front-end design
        </p>
        <h3>My stack</h3>
        <div className={style.sliderContainer}>
          <Slider />
        </div>
      </div>
      <div className={style.TimeLapseContainer}>
        <TimeLapse />
      </div>
      {/* <div className={style.aboutContainer}>
          <p className={style.about}>
            My name is <span className={style.name}>Emiliano Prioli</span> and I
            am a FullStack Developer, but my passion is the Front-end design
          </p>  
        </div> */}
      {/* <div className={style.proyectsContainer}>
          <h2 className={style.proyectsH2}>Some Proyects</h2>
          <div className={style.medConnectContainer}>
            <iframe
              className={style.medConnect}
              src="https://www.youtube.com/embed/G1fRvG-KN2k"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
            <div className={style.medConnectlinksContainer}>
              <a
                href="https://medconnectfront-production.up.railway.app/"
                className={style.links}>
                Link to the proyect
              </a>
            </div>
          </div>
        </div> */}
    </main>
  );
}
