/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { ModernAlert } from "../../ui/ModernAlert";
import jsQR from "jsqr";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function UseScanQRHook() {
  const [link, setLink] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const pathname = useLocation();

  const handleScan = async () => {
    try {
      if (image) {
        const qrLink = await decodeQR(image);
        if (!qrLink) {
          ModernAlert({ status: "error", message: "QR tidak terbaca" });
          return;
        }

        setLink(qrLink);

        const response = await axios.post(
          "https://pandutria-gambling-sites.hf.space/predict",
          { link: qrLink }
        );

        localStorage.setItem("scan-qr", JSON.stringify(response.data));

        ModernAlert({
          status: "success",
          message: "QR Berhasil Di-scan",
          typeLink: "LinkTo",
          linkTo: "/result-scan-qr",
        });

        return;
      }

      localStorage.setItem("scan-qr", JSON.stringify({ link }));

      ModernAlert({
        status: "success",
        message: "Link Berhasil Disimpan",
        typeLink: "LinkTo",
        linkTo: "/result-scan-qr",
      });
    } catch {
      ModernAlert({ status: "error", message: "AI Sedang Dinyalakan, Mohon Bersabar" });
    }
  };

  const decodeQR = (file: File) =>
    new Promise<string | null>((resolve) => {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = () => {
        img.src = String(reader.result);
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          if (!ctx) return resolve(null);

          canvas.width = img.width;
          canvas.height = img.height;

          ctx.drawImage(img, 0, 0, img.width, img.height);

          const imageData = ctx.getImageData(0, 0, img.width, img.height);
          const qr = jsQR(imageData.data, img.width, img.height);

          resolve(qr?.data || null);
        };
      };

      reader.readAsDataURL(file);
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files, value } = e.target;

    if (name === "link") setLink(value);

    if (name === "image" && files) {
      const file = files[0];
      setImage(file);
      setPreview(URL.createObjectURL(file));

      decodeQR(file).then((qrLink) => {
        if (qrLink) setLink(qrLink);
      });
    }
  };

  const fetchScan = () => {
    const raw = localStorage.getItem("scan-qr");
    if (pathname.pathname === "/result-scan-qr") {
      if (!raw) return (window.location.href = "/");
      setData(JSON.parse(raw));
    }
  };

  useEffect(() => {
    fetchScan();
  }, []);

  return { handleScan, handleChange, link, data, preview };
}
