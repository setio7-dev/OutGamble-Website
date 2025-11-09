/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"

type AnimationDivType = {
    effect: "fade-up" | "fade-right" | "fade-left" | "fade-down" | "zoom-in";
    delay?: number;
    duration?: number;
    className?: any;
    key?: any;
    children: React.ReactNode;
}

export default function AnimationDiv({ effect, delay = 30, duration = 1000, className, children, key }: AnimationDivType) {
  return (
    <div className={`${className}`} data-aos={effect} data-aos-delay={delay} data-aos-duration={duration} key={key}>
      {children}
    </div>
  )
}
