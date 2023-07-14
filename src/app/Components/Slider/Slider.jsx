"use client";
import style from "./Slider.module.css";
import { useAutoScrollRef } from "./Handler.jsx";
import Image from "next/image";

const Frameworks = [
  {
    icon: "cdn-icons-png.flaticon.com/512/5968/5968292.png",
    label: "JavaScript",
  },
  {
    icon: "upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    label: "React",
  },
  {
    icon: "static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-0nli97e5.png",
    label: "Next",
  },
  {
    icon: "upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
    label: "Angular",
  },
  {
    icon: "ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
    label: "Express",
  },
  {
    icon: "miro.medium.com/v2/resize:fit:500/1*tOI6UC5EaS2fPItCesI-AQ.png",
    label: "Redux",
  },
  {
    icon: "cdn-icons-png.flaticon.com/512/5968/5968242.png",
    label: "CSS",
  },
  {
    icon: "upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    label: "Tailwind",
  },
  {
    icon: "miro.medium.com/v2/resize:fit:318/1*7jRD5QhgARucFKvRHFxpOg.png",
    label: "Styled components",
  },
  {
    icon: "cdn.iconscout.com/icon/free/png-256/free-sequelize-2-1175003.png",
    label: "Sequelize",
  },
  {
    icon: "static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
    label: "Node",
  },
  {
    icon: "cdn.icon-icons.com/icons2/2415/PNG/512/postgresql_original_wordmark_logo_icon_146392.png",
    label: "PostgreSQL",
  },
  {
    icon: "upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
    label: "HTML5",
  },
  {
    icon: "static-00.iconduck.com/assets.00/ant-design-icon-2048x2046-tx16mhk6.png",
    label: "Ant design",
  },
  {
    icon: "git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    label: "Git",
  },
  {
    icon: "cdn-icons-png.flaticon.com/512/6124/6124991.png",
    label: "Trello",
  },
];

//! poner git y trello

const Slider = () => {
  const scrollRef = useAutoScrollRef(0.5, 4);

  return (
    <div ref={scrollRef} className={style.mainContainer}>
      {Frameworks.map((el, index) => {
        return (
          <div key={index} className={style.imgContainer}>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              key={index}
              src={`https://${el.icon}`}
              className={style.img}
              alt={`Framework ${index + 1}`}
            />
            <p className={style.label}>{el.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
