import Navbar from "./Components/Navbar/Navbar";
import style from "./app.module.css";
import TimeLapseRenderizer from "./Components/timeLapse/TimeLapse";
import Slider from "./Components/Slider/Slider";
import Skills from "./Components/skills/Skills";
import EmailForm from "./Components/emailForm/EmailForm";
import dynamic from "next/dynamic";
import {
  Span,
  ArrowRenderizer,
  Overlay,
  BackgroundImage,
  Certificates,
} from "./assets/components/components";

export default function Home() {
  const ScrollableDiv = dynamic(
    () => import("./assets/components/components"),
    {
      ssr: false,
    }
  );
  return (
    <main className={style.container}>
      <Navbar />
      <BackgroundImage />
      <Overlay />
      <div className={style.landing}>
        <div className={style.spanContainer}>
          <span className={style.title}>
            FRONT <ScrollableDiv /> END
          </span>
          <span className={style.middleTitle}>
            FRONT <ScrollableDiv opacity={0}></ScrollableDiv>
            END
          </span>
          <p className={style.developer}>DEVELOPER</p>
          <ArrowRenderizer />
        </div>
      </div>

      <div className={style.aboutContainer}>
        <h3 className={style.h3}>About me</h3>
        <p className={style.aboutP}>
          My name is Emiliano Prioli, and I am an enthusiastic FullStack
          Developer. I discovered my passion for development at the beginning of
          2022. Since then, my focus and mindset have undergone a radical
          change. Now, my main goals are enhancing user experience and improving
          the appearance of websites.
        </p>
        <h3 className={style.h3}>My stack</h3>
        <div className={style.sliderContainer}>
          <Slider />
        </div>
      </div>
      <Skills />
      <Certificates>
        <h3 className={style.h3}></h3>
      </Certificates>
      <div className={style.TimeLapseContainer}>
        <h3 className={style.h3}>Proyects</h3>
        <TimeLapseRenderizer />
      </div>
      <div></div>
      <div className={style.emailContainer}>
        <h3 className={style.contact}>
          <Span>Let&apos;s talk</Span> Contact me!
        </h3>
        <EmailForm />
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
