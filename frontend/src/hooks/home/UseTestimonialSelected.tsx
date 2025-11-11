/* eslint-disable prefer-const */
import { useState } from "react";
import { testimonialData } from "../../data/homeData"

export default function UseTestimonialSelected() {
    const [testimonialSelected, setTestimonialSelected] = useState<number>(0);
    const [animateDirection, setAnimateDirection] = useState<"next" | "prev" | null>(null);

    const reoderedTestimonialData = (() => {
      let data = [...testimonialData];
      const selectedItem = data.splice(testimonialSelected, 1)[0];
      data.splice(3, 0, selectedItem);
      return data;
    })();

    const handleNext = () => {
        setTestimonialSelected((prev) => {
            const next = prev + 1;
            if (prev >= 6) {
                return 0;
            } else {
                return next
            }
        })
    }

    const handlePrev = () => {
        setTestimonialSelected((prev) => {
            const next = prev - 1;
            if (prev <= 0) {
                return 6;
            } else {
                return next
            }
        })
    }

    const handleNextWithAnim = () => {
      setAnimateDirection("next");
      setTimeout(() => {
        handleNext();
        setAnimateDirection(null);
      }, 300);
    };

    const handlePrevWithAnim = () => {
      setAnimateDirection("prev");
      setTimeout(() => {
        handlePrev();
        setAnimateDirection(null);
      }, 300);
    };

    return { reoderedTestimonialData, handleNextWithAnim, handlePrevWithAnim, animateDirection }
}
