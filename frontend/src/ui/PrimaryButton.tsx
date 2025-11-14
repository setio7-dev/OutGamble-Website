import { useNavigate } from "react-router-dom"

type ButtonType = {
  PaddingX?: number;
  PaddingY?: number;
  Rounded?: number;
  LinkTo?: string;
  Type?: "primary" | "secondary";
  Text?: string;
  TextColor?: string;
  Width?: "fit" | "full"
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function PrimaryButton({ PaddingX = 30, PaddingY = 14, Rounded = 40, LinkTo, Type, TextColor = "white", Text = "Text Button", Width = 'fit', onClick}: ButtonType) {
  const navigate = useNavigate();
  return (
    <button className={`${Type == "primary" ? "bg-linear-to-r from-[#05B14F] to-secondary" : "bg-primary"} hover:scale-95 hover:opacity-90 duration-500 font-poppins-semibold text-[14px] cursor-pointer`} 
      style={{ paddingLeft: `${PaddingX}px`, paddingRight: `${PaddingX}px`, paddingTop: `${PaddingY}px`, paddingBottom: `${PaddingY}px`, borderRadius: `${Rounded}px`, color: `${TextColor}`, width: Width === "fit" ? "fit-content" : "100%"}}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        if (LinkTo) {
          navigate(LinkTo);
        } else {
          onClick?.(e);
        }
      }}
    >
      {Text}
    </button>
  )
}
