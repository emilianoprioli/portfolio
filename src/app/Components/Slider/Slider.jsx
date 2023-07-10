"use client";
import style from "./Slider.module.css";
import { useAutoScrollRef } from "./Handler.jsx";

const Frameworks = [
  "cdn-icons-png.flaticon.com/512/5968/5968292.png",
  "upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  "upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
  "ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
  "miro.medium.com/v2/resize:fit:500/1*tOI6UC5EaS2fPItCesI-AQ.png",
  "upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
  "cdn.iconscout.com/icon/free/png-256/free-sequelize-2-1175003.png",
  "static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
  "cdn.icon-icons.com/icons2/2415/PNG/512/postgresql_original_wordmark_logo_icon_146392.png",
  "upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
  "static-00.iconduck.com/assets.00/ant-design-icon-2048x2046-tx16mhk6.png",
  "static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-0nli97e5.png",
];

const Slider = () => {
  const scrollRef = useAutoScrollRef(0.5, 4);

  return (
    <div ref={scrollRef} className={style.mainContainer}>
      {Frameworks.map((el, index) => {
        return (
          <div className={style.imgContainer}>
            <img
              src={`https://${el}`}
              className={style.img}
              alt={`Framework ${index + 1}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
