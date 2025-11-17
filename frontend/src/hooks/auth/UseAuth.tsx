/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react"
import { ModernAlert } from "../../ui/ModernAlert";
import API from "../../server/ApiService";

export default function UseAuth() {
  const [username, setUsername] = useState<string>("");
  const [fullname, setFullname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const handleRegister = async() => {
    try {
        const response = await API.post('/register', {
            username,
            fullname,
            password
        });

        ModernAlert({
            message: response.data.message,
            status: 'success',
            typeLink: 'Reload'
        })
    } catch (error: any) {
        ModernAlert({
            message: error.response.data.message,
            status: error,
        })
    }
  }

  const handleLogin = async() => {
    try {
        const response = await API.post('/login', {
            username,
            password
        });

        const token = response.data.token;
        localStorage.setItem("token", token);

        ModernAlert({
            message: response.data.message,
            status: 'success',
            typeLink: 'Reload'
        })
    } catch (error: any) {
        ModernAlert({
            message: error.response.data.message,
            status: error,
        })
    }
  }

  const handleLogout = async() => {
    try {
        const token = localStorage.getItem("token");
        const response = await API.post('/logout', {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        localStorage.removeItem("token");
        ModernAlert({
            message: response.data.message,
            status: 'success',
            typeLink: 'Reload'
        });
    } catch (error: any) {
        ModernAlert({
            message: error.response.data.message,
            status: error,
        })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "fullname") setFullname(value);
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value)
  }

  return { handleLogin, handleRegister, handleLogout, username, fullname, password, handleChange }
}
