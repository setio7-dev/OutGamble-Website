import { useEffect, useState } from 'react'
import { actionData } from '../../data/homeData';

export default function UseActionScroll() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [data, setData] = useState(actionData);
    useEffect(() => {
        const scrollInterval = setInterval(() => {
        setCurrentIndex((prev) => {
          const next = prev + 1;
          if (next >= data.length * 120) {
            setData((prevData) => [...prevData, ...actionData]);
          }
          return next;
        });
        }, 20);

        return () => clearInterval(scrollInterval);
    }, [data]);

    return { currentIndex, data }
}
