/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { ModernAlert } from "../../ui/ModernAlert";
import axios from "axios";

export default function UseScanQRHook() {
  const [link, setLink] = useState<string>("");
  const [image, setImage] = useState<any>();
  const [data, setData] = useState<scanQrProp | null>(null);

  const handleScan = async () => {
    try {
      let payload: any = {};

      if (image) {
        const base64 = await toBase64(image);
        payload = { image: base64 };
      } else {
        payload = { link };
      }

      const response = await axios.post(
        "https://pandutria-gambling-sites.hf.space/predict",
        payload
      );

      localStorage.setItem("scan-qr", JSON.stringify(response.data));
      ModernAlert({
        status: "success",
        message: "Link Berhasil Dianalisis",
        typeLink: "LinkTo",
        linkTo: "/result-scan-qr",
      });
    } catch (error: any) {
      ModernAlert({
        status: "error",
        message: error.response?.data?.message || "Terjadi Kesalahan",
      });
    }
  };

  const toBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = reject;
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files, value } = e.target;
    if (name === "link") setLink(value);
    if (name === "image" && files) setImage(files[0]);
  };

  const fetchScan = () => {
    const data = JSON.parse(localStorage.getItem("scan-qr") || "[]");
    if (data.length === 0) {
        window.location.href = "/";
    } else {
        setData(data);
    }
  }

  useEffect(() => {
    fetchScan();
  }, []);

  return { handleScan, handleChange, link, data };
}
