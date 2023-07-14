"use client";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";

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
