import { useNavigate } from "react-router-dom"

type ButtonType = {
  PaddingX?: number;
  PaddingY?: number;
  Rounded?: number;
  LinkTo?: string;
  Type?: "primary" | "secondary";
  Text?: string;
  TextColor?: string;
}

export default function PrimaryButton({ PaddingX = 30, PaddingY = 14, Rounded = 40, LinkTo, Type, TextColor = "white", Text = "Text Button"}: ButtonType) {
  const navigate = useNavigate();
  return (
    <button className={`${Type == "primary" ? "bg-linear-to-r from-[#05B14F] to-[#005625]" : "bg-primary"} font-poppins-semibold text-[14px] w-fit cursor-pointer`} 
      style={{ paddingLeft: `${PaddingX}px`, paddingRight: `${PaddingX}px`, paddingTop: `${PaddingY}px`, paddingBottom: `${PaddingY}px`, borderRadius: `${Rounded}px`, color: `${TextColor}`}}
      onClick={() => {
        if (LinkTo) {
          navigate(LinkTo)
        }
      }}
    >
      {Text}
    </button>
  )
}
