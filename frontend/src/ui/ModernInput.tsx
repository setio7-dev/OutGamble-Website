import type React from "react";
import { useState, useRef } from "react";
import upload from "/icon/upload.png";

type inputType = {
    placeholder: string;
    type?: "input" | "textarea" | "file";
    typeInput?: "text" | "date" | "number" | "file" | "password";
    title?: string;
    desc?: string;
    themeInput?: "light" | "dark";
    value?: string;
    name?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export default function ModernInput({ placeholder, type = "input", typeInput = "text", themeInput = "light", value, onChange, title, desc, name }: inputType) {
    const [preview, setPreview] = useState<string | null>(null);
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFile = (file: File | null) => {
        if (!file) return;
        if (file.size > 10 * 1024 * 1024) return;
        const reader = new FileReader();
        reader.onload = e => setPreview(e.target?.result as string);
        reader.readAsDataURL(file);
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        handleFile(file);
        onChange?.(e);
    };

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragActive(true);
    };

    const onDragLeave = () => {
        setDragActive(false);
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragActive(false);
        const file = e.dataTransfer.files?.[0] || null;
        handleFile(file);
    };

    return (
        <div className="">
            {themeInput === "light" ? (
                type === "input" ? (
                    <div className="flex flex-col gap-4 w-full">
                        <p className="text-white text-[18px] font-poppins-semibold">{title}</p>
                        <input name={name} className="placeholder:text-[#A9A9A9] bg-[#f1f1f1] outline-0 font-poppins-regular text-[14px] text-black rounded-md w-full px-4 py-3 focus-within:border-2 focus-within:border-primary" value={value} onChange={onChange} placeholder={placeholder} type={typeInput} />
                    </div>
                ) : type === "textarea" ? (
                    <div className="flex flex-col gap-4 w-full">
                        <p className="text-white text-[18px] font-poppins-semibold">{title}</p>
                        <textarea name={name} className="placeholder:text-[#A9A9A9] h-[120px] bg-white outline-0 font-poppins-regular text-[14px] text-black rounded-md w-full px-4 py-3 focus-within:border-2 focus-within:border-primary" value={value} onChange={onChange} placeholder={placeholder}></textarea>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex flex-col gap-2">
                            <p className="text-white text-[18px] font-poppins-semibold">{title}</p>
                            <p className="text-[#FEFEFE] text-[14px] font-poppins-medium">{desc}</p>
                        </div>

                        <div
                            onClick={() => inputRef.current?.click()}
                            onDragOver={onDragOver}
                            onDragLeave={onDragLeave}
                            onDrop={onDrop}
                            className={`bg-white w-full px-6 py-12 cursor-pointer rounded-lg flex flex-col justify-center items-center gap-4 border-2 border-primary border-dashed transition ${dragActive ? "bg-blue-50 border-blue-500" : ""}`}
                        >
                            <img src={upload} className="w-12 h-auto" alt="" />
                            <h1 className="font-poppins-medium text-[18px] text-black">
                                Tarik file Anda atau <span className="text-primary">Jelajahi</span>
                            </h1>
                            <p className="text-[14px] text-[#6D6D6D] font-poppins-regular">Ukuran maksimal file 10 MB diperbolehkan</p>

                            {preview && <img src={preview} className="w-40 h-40 object-cover rounded-md border" />}
                        </div>

                        <input name={name} type="file" ref={inputRef} className="hidden" onChange={onInputChange} />
                    </div>
                )
            ) : type === "input" ? (
                <div className="flex flex-col gap-4 w-full">
                    <p className="text-primary text-[18px] font-poppins-semibold">{title}</p>
                    <input name={name} className="placeholder:text-[#484848] bg-[#131313] outline-0 font-poppins-regular text-[14px] text-white rounded-md w-full px-4 py-3 focus-within:border-2 focus-within:border-[#5D5D5D]" value={value} onChange={onChange} placeholder={placeholder} type={typeInput} />
                </div>
            ) : type === "textarea" ? (
                <div className="flex flex-col gap-4 w-full">
                    <p className="text-primary text-[18px] font-poppins-semibold">{title}</p>
                    <textarea name={name} className="placeholder:text-[#484848] h-[120px] bg-[#131313] outline-0 font-poppins-regular text-[14px] text-white rounded-md w-full px-4 py-3 focus-within:border-2 focus-within:border-[#5D5D5D]" value={value} onChange={onChange} placeholder={placeholder}></textarea>
                </div>
            ) : (
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col gap-2">
                        <p className="text-primary text-[18px] font-poppins-semibold">{title}</p>
                        <p className="text-white text-[14px] font-poppins-medium">{desc}</p>
                    </div>

                    <div
                        onClick={() => inputRef.current?.click()}
                        onDragOver={onDragOver}
                        onDragLeave={onDragLeave}
                        onDrop={onDrop}
                        className={`bg-[#131313] w-full px-6 py-12 cursor-pointer rounded-lg flex flex-col justify-center items-center gap-4 border-2 border-primary border-dashed transition ${dragActive ? "bg-[#1f1f1f] border-white" : ""}`}
                    >
                        <img src={upload} className="w-12 h-auto" alt="" />
                        <h1 className="font-poppins-medium text-[18px] text-white">
                            Tarik file Anda atau <span className="text-primary">Jelajahi</span>
                        </h1>
                        <p className="text-[14px] text-[#A9A9A9] font-poppins-regular">Ukuran maksimal file 10 MB diperbolehkan</p>

                        {preview && <img src={preview} className="w-40 h-40 object-cover rounded-md border" />}
                    </div>

                    <input name={name} type="file" ref={inputRef} className="hidden" onChange={onInputChange} />
                </div>
            )}
        </div>
    );
}
