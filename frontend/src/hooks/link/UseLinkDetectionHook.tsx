import axios from "axios";
import React, { useState, useEffect } from "react";
import { ModernAlert } from "../../ui/ModernAlert";

export default function UseLinkDetectionHook() {
    const [link, setLink] = useState<string>("");
    const [data, setData] = useState<linkProp[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem("linkDetectionData");
        if (saved) {
            setData(JSON.parse(saved));
        }
    }, []);

    const handleLinkdetection = async () => {
        try {
            const response = await axios.post("https://pandutria-gambling-sites.hf.space/predict", { 
                link 
            });

            const dataLink = response.data;
            setData(prev => {
                const updated = [...prev, dataLink];
                localStorage.setItem("linkDetectionData", JSON.stringify(updated));
                return updated;
            });

            ModernAlert({
                status: "success",
                message: "Analisis Selesai",
                typeLink: "Reload"
            });

            setLink("");
        } catch (error) {
            console.error(error);
            ModernAlert({
                status: "error",
                message: "AI Sedang Dinyalakan, Mohon Bersabar"
            });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        if (name === "link") setLink(value);
    };

    return { data, handleLinkdetection, handleChange, link };
}
