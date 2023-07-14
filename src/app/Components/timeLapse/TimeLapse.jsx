import style from "./timeLapse.module.css";
import Aos from "aos";
import Image from "next/image";

const TimeLapse = () => {
  Aos.init();

  return (
    <div class={style.container}>
      /
      <div class={style.evento}>
        <div
          class={style.foto}
          data-aos="fade-right"
          data-aos-anchor-placement="center-center">
          <iframe
            className={style.medConnect}
            src="https://www.youtube.com/embed/G1fRvG-KN2k"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <h3 class={style.fecha}>
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
        </h3>
      </div>
      <div class={style.evento}>
        <div
          class={style.foto}
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
        <h3 class={style.fecha}>18 de Agosto de 2023</h3>
      </div>
      <div class={style.evento}>
        <div
          class={style.foto}
          data-aos="fade-right"
          data-aos-anchor-placement="center-center">
          {/* <img src="./img/6.jpg" alt="" /> */}
        </div>
        <h3 class={style.fecha}>7 de Diciembre de 2021</h3>
      </div>
    </div>
  );
};

export default TimeLapse;
