"use client";

import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

function TypedHeading({ strings }: { strings: string[] }) {
  const el = useRef<HTMLSpanElement | null>(null);
  const typed = useRef<Typed>();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      return;
    }

    typed.current = new Typed(el.current, {
      strings,
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      startDelay: 50,
      backDelay: 1000,
      cursorChar: "_",
    });

    return () => {
      typed.current?.destroy();
    };
  }, [isMounted, strings]);

  if (!isMounted) return null;

  return <span ref={el} style={{ whiteSpace: "pre" }} />;
}

export default TypedHeading;
