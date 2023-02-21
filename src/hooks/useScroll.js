import { useEffect, useRef, useState } from "react";

export const useScroll = () => {
  const [sticky, setSticky] = useState(false);
  const [containerOffSet, setContainer] = useState("");

  const about = useRef(null);
  const skills = useRef(null);
  const proyects = useRef(null);
  const refContainer = useRef(null);

  const scrollToSection = (element) => {
    window.scrollTo({
      top: element.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const div = refContainer.current.offsetHeight;
    setContainer(div);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY;
      if (scrolled === containerOffSet || scrolled > containerOffSet) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  });

  return { about, skills, proyects, refContainer, scrollToSection, sticky };
};
