/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useState, useEffect } from "react";
import API from "../server/ApiService";

type UseAuthType = {
    children: React.ReactNode;
};

const AuthContext = createContext<any>(null);

export default function UseAuthContext({ children }: UseAuthType) {
    const [user, setUser] = useState<userProp | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await API.get("/me", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setUser(response.data.data);
            } catch {
                setUser(null);
            }
        };

        fetchUser();
    }, [token]);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <AuthContext.Provider value={{ user, isMobile }}>
            {children}
        </AuthContext.Provider>
    );
}

export function UseAuthHookContext() {
    return useContext(AuthContext);
}
