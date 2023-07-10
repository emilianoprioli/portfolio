import style from "./timeLapse.module.css";
import Aos from "aos";

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
          I am glad to colaborate in MEDCONNECT. Our platform, provides users
          with a seamless experience for booking appointments. For the owners of
          the medical center, we developed an integral admin panel that includes
          all the functions needed to manage and control. My role in the
          platform development was focused on creating the pre-coded user
          experience and the overall appearance of the website. I am grateful to
          the team for choosing me as the leader of the front-end team, and I
          look forward to working on more projects together.
        </h3>
      </div>
      <div class={style.evento}>
        <div
          class={style.foto}
          data-aos="fade-left"
          data-aos-anchor-placement="center-center">
          <img src="/videogames.jpg" alt="" />
        </div>
        <h3 class={style.fecha}>18 de Agosto de 2023</h3>
      </div>
      <div class={style.evento}>
        <div
          class={style.foto}
          data-aos="fade-right"
          data-aos-anchor-placement="center-center">
          <img src="./img/6.jpg" alt="" />
        </div>
        <h3 class={style.fecha}>7 de Diciembre de 2021</h3>
      </div>
    </div>
  );
};

export default TimeLapse;
