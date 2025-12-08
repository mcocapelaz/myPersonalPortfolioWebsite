import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function HeroTitle() {
  const el = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    typedRef.current = new Typed(el.current, {
      strings: ["Desarrolladora web", "Creativa", "Aprendiz constante"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      cursorChar: "|",
    });

    return () => {
      typedRef.current?.destroy();
    };
  }, []);

  return <span ref={el}></span>;
}

export default HeroTitle;
