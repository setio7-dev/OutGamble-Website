import { useEffect, useState } from "react";

export default function UseShowAuth() {
    const [showAuth, setSHowAuth] = useState<boolean>(false);
    const [thisPopup, setThisPopup] = useState<boolean>(true);

    const handleChangePopup = () => {
        setThisPopup(!thisPopup);
    }

    useEffect(() => {
        if (showAuth) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }

        return () => {
            document.body.style.overflowY = "auto";
        };
    }, [showAuth]);

    const handleOpen = () => {
        setSHowAuth(true);
    }

    const handleClose = () => {
        setSHowAuth(false);
    }

    return { showAuth, handleClose, handleOpen, handleChangePopup, thisPopup }
}
