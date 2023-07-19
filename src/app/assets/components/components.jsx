"use client";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Span = styled.span`
  color: #000;
  font-size: 1.6rem;
`;

const Div = styled.div`
  display: flex;
  min-width: 20vw;
  height: 30px;
  transition: all 250ms;
  background-color: #c7c7c7;

  @media (max-width: 400px) {
    display: none;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww&w=1000&q=80");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  z-index: -1; /* Asegura que el fondo esté detrás del contenido */
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #63636350; /* Cambia el valor del canal alfa (4º valor) para ajustar la opacidad */
  z-index: -1; /* Asegura que el fondo esté detrás del contenido */
`;

export const Certificates = styled.div`
  display: flex;
  width: 80%;
  height: 20%;
  justify-content: space-around;
  align-items: center;
  border: #907acc solid 3px;
  border-radius: 40px;
  margin: 0 auto;
`;

export const ArrowRenderizer = () => {
  const Span = styled.span`
    display: flex;
    height: 10%;
    width: 10%;
    justify-content: space-around;
    align-items: end;
    position: absolute;
    bottom: 9%;
    right: 1%;
    color: #adadad;
  `;

  return (
    <Span>
      Scroll down{" "}
      <FontAwesomeIcon
        style={{
          color: "#000",
          display: "flex",
          fontSize: "1.8rem",
        }}
        icon={faArrowDown}
        bounce
      />
    </Span>
  );
};

const ScrollableDiv = ({ opacity }) => {
  const [isScrolled, setIsScrolled] = useState(0);

  useEffect(() => {
    if (typeof window !== null) {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        setIsScrolled(scrollTop + 250);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div>
      <Div style={{ width: isScrolled, opacity: opacity }}></Div>
    </div>
  );
};

ScrollableDiv.displayName = "ScrollableDiv";

export default ScrollableDiv;
