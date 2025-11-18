import type React from "react";

type selectProp = {
    title?: string;
    themeInput?: "light" | "dark";
    value?: string;
    name?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    children: React.ReactNode;
};

type OptionType = {
    text: string;
    value?: string;
    disabled?: boolean;
}

export function ModernSelect({ children, title, name, value, onChange, themeInput = "light" }: selectProp) {
  return (
    <div className="">
        {themeInput == "light" ? (
            <div className="flex flex-col gap-4 w-full">
                <p className="text-primary text-[18px] font-poppins-semibold">{title}</p>
                <select name={name} value={value} onChange={onChange} className="placeholder:text-[#A9A9A9] bg-[#f1f1f1] outline-0 font-poppins-regular text-[14px] text-black rounded-md w-full px-4 py-3 focus-within:border-2 focus-within:border-primary">
                    {children}
                </select>
            </div>
        ) : (
            <div className="flex flex-col gap-4 w-full">
                <p className="text-primary text-[18px] font-poppins-semibold">{title}</p>
                <select name={name} value={value} onChange={onChange} className="placeholder:text-[#484848] bg-[#131313] outline-0 font-poppins-regular text-[14px] text-white rounded-md w-full px-4 py-3 focus-within:border-2 focus-within:border-primary">
                    {children}
                </select>
            </div>
        )}
    </div>
  )
}

export function ModernOption({ text, disabled = false, value }: OptionType) {
    return (
        <option value={value ?? text} disabled={disabled} className="w-full rounded-b-lg font-poppins-medium text-[14px]">{text}</option>
    )
}
