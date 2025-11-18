import { useEffect, useState } from "react";
import { UseSplashHookContext } from "../../context/UseSplashContext";

export default function UseSplashHook() {
    const [isPlay, setIsPlay] = useState<boolean>(false);
    const { setIsStart } = UseSplashHookContext();

    useEffect(() => {
        const handleSplashAnimaton = async () => {
            await new Promise((resolve) => setTimeout(resolve, 4000));
            setIsPlay(true);
            
            await new Promise((resolve) => setTimeout(resolve, 500));
            setIsStart(true);
        }

        handleSplashAnimaton();
    }, []);

    return { isPlay }
}
