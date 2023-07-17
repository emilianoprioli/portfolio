"use client";
import { useEffect } from "react";
import style from "./timeLapse.module.css";
import Aos from "aos";
import Image from "next/image";

const TimeLapse = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      Aos.init();
    }
  }, []);

  return (
    <div className={style.container}>
      <div className={style.evento}>
        <div
          className={style.foto}
          data-aos="fade-right"
          data-aos-anchor-placement="center-center">
          <iframe
            className={style.medConnect}
            src="https://www.youtube.com/embed/G1fRvG-KN2k"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </div>
        <h3 className={style.fecha}>
          The objective of the application was to develop a comprehensive
          appointment system for Medicina y Salud Berazategui. The application
          features include the primary goal of the application itself, as well
          as an administrative panel developed to manage all its functionalities
          and characteristics. For clients, we implemented user creation,
          registration, and modification, along with third-party login.<br></br>{" "}
          When it comes to acquiring an appointment at the medical center, it
          was based on the selection of days, time slots, or professionals. This
          development approach was chosen to address the need for immediate
          appointments, where patients would be assigned to available
          professionals, while allowing them to choose their preferred
          specialist when an appointment becomes available.<br></br> To save
          time, external payment methods were implemented, which presented a
          significant challenge due to administrative delays when many patients
          arrive simultaneously at the health center.
          <br />
          The technologies employed for its development include Next.js, Redux
          Toolkit, Tailwind, CSS, Express, PostgreSQL, Sequelize, and more
          libraries!
        </h3>
      </div>
      <div className={style.evento}>
        <div
          className={style.foto}
          data-aos="fade-left"
          data-aos-anchor-placement="center-center">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/videogames.jpg"
            alt=""
          />
        </div>
        <h3 className={style.fecha}>
          This project is a video game application that showcases the most
          renowned and highly-rated games in the market. It features the ability
          to filter results based on user preferences, display detailed
          information about the desired game, and even allows users to manually
          add new products to the application.
          <br />
          The technologies employed for its development include React.js, Redux,
          Express.js, PostgreSQL, Sequelize, CSS, among other cutting-edge
          technologies.
        </h3>
      </div>
      <div className={style.evento}>
        <div
          className={style.foto}
          data-aos="fade-right"
          data-aos-anchor-placement="center-center">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/rick&Morty.jpg"
            alt=""
          />{" "}
        </div>
        <h3 className={style.fecha}>Rick & Mort app coming soon...</h3>
      </div>
    </div>
  );
};
export default TimeLapse;

// const TimeLapseRenderizer = () => {
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       // Verificar si el cliente está cargado
//       if (window.document.readyState === "complete") {
//         Aos.init();

//         return <TimeLapse />;
//       } else {
//         // Esperar a que el cliente esté cargado antes de ejecutar el código
//         const handleLoad = () => {
//           console.log("El cliente está cargado");
//           Aos.init();
//           return <TimeLapse />;
//         };

//         window.addEventListener("load", handleLoad);

//         return () => {
//           window.removeEventListener("load", handleLoad);
//         };
//       }
//     }
//   }, []);
// };

// export default TimeLapseRenderizer;
