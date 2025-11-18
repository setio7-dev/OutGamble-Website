/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import API from "../../server/ApiService";
import { ModernAlert } from "../../ui/ModernAlert";

export default function UseReportHook() {
    const [thisOnline, setThisOnline] = useState<boolean>(true);
    const [onlineData, setOnlineData] = useState<onlineReportProp>({
        url_link: "",
        category: "",
        contact: "",
        description: "",
        proof: null
    });
    const [offlineData, setOfflineData] = useState<offlineReportProp>({
        place: "",
        address: "",
        category_place: "",
        coordinates: "",
        description: "",
        proof: null,
        contact: ""
    });

    const handleChangeSelected = (thisSelected: boolean) => {
        if (thisOnline == thisSelected) {
            setThisOnline(thisOnline);
        } else {
            setThisOnline(!thisOnline);
        }
    }

    const handleChangeOnlineReport = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files, value } = e.target;

        setOnlineData(prev => ({
            ...prev,
            [name]: files?.[0] ?? value
        }));
    };

    const handleOnlineReport = async () => {
        try {
            const formData = new FormData();
            formData.append("url_link", String(onlineData?.url_link));
            formData.append("category", String(onlineData?.category));
            formData.append("contact", String(onlineData?.contact));
            formData.append("description", String(onlineData?.description));
            if (onlineData.proof) {
                formData.append("proof", onlineData.proof);
            }

            const token = localStorage.getItem("token");
            const response = await API.post("/report/online", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            });

            ModernAlert({
                status: "success",
                message: response.data.message,
                typeLink: 'Reload'
            });
        } catch (error: any) {
            console.error(error);
            ModernAlert({
                status: "error",
                message: error.response.data.message,
            });
        }
    }  
    
    const handleChangeOfflineReport = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;

        setOfflineData(prev => ({
            ...prev,
            [name]: files?.[0] ?? value
        }));
    };

    const handleOfflineReport = async () => {
        try {
            const formData = new FormData();
            formData.append("place", String(offlineData?.place));
            formData.append("address", String(offlineData?.address));
            formData.append("category_place", String(offlineData?.category_place));
            formData.append("coordinates", String(offlineData?.coordinates));
            formData.append("description", String(offlineData?.description));
            if (offlineData.proof) {
                formData.append("proof", offlineData.proof);
            }
            formData.append("contact", String(offlineData?.contact));

            const token = localStorage.getItem("token");
            const response = await API.post("/report/offline", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            });

            ModernAlert({
                status: "success",
                message: response.data.message,
                typeLink: 'Reload'
            });
        } catch (error: any) {
            ModernAlert({
                status: "error",
                message: error.response.data.message,
            });
        }
    }    

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            const coords = `${pos.coords.latitude},${pos.coords.longitude}`;
            setOfflineData(prev => ({ ...prev, coordinates: coords }));
        });
    }, []);

    return { handleChangeSelected, onlineData, offlineData, handleChangeOnlineReport, handleChangeOfflineReport, handleOnlineReport, handleOfflineReport, thisOnline }
}
