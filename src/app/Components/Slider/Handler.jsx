"use client";
import { useEffect, useState, useRef, useCallback } from "react";

export const useAutoScrollRef = (Hz, elementsToMove, deps) => {
  const elementRef = useRef(null);
  const deepDeps = JSON.stringify([deps, elementsToMove]);

  Hz = (1 / Hz) * 1000;

  const [resized, setResized] = useState(0);
  const [hover, setHover] = useState(false);

  const scroll = useCallback(() => {
    const element = elementRef.current;

    if (!hover) {
      const a = [];
      for (let i = 0; i < elementsToMove; i++)
        a.push(element.children[i].cloneNode(true));
      a.forEach((e) => element.appendChild(e));
      setTimeout(() => {
        for (let i = 0; i < elementsToMove; i++)
          element.removeChild(element.firstChild);
      }, Hz / Hz - 300);
    }
  }, [Hz, elementsToMove, hover]);

  useEffect(() => {
    if (elementRef.current) {
      const element = elementRef.current;
      elementRef.current.addEventListener("mouseenter", () => setHover(true));
      elementRef.current.addEventListener("mouseleave", () => setHover(false));
      const interval = !hover && setInterval(scroll, Hz);
      return () => {
        clearInterval(interval);
        element.removeEventListener("mouseenter", () => setHover(true));
        element.removeEventListener("mouseleave", () => setHover(false));
      };
    }
  }, [deepDeps, Hz, resized, scroll, hover]);

  // Prevent autoscrolling while the window is being resized
  useEffect(() => {
    window.addEventListener("resize", () => setResized((r) => r + 1));
  }, []);

  return elementRef;
};
