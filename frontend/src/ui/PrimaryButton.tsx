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
  target?: boolean;
}

export default function PrimaryButton({ PaddingX = 30, PaddingY = 14, Rounded = 40, LinkTo, Type, TextColor = "white", Text = "Text Button", Width = 'fit', onClick, target = false}: ButtonType) {
  const navigate = useNavigate();
  return (
    <button className={`${Type == "primary" ? "bg-linear-to-r from-fourthtinary to-secondary" : "bg-primary"} hover:scale-95 hover:opacity-90 duration-500 font-poppins-semibold lg:text-[14px] text-[12px] cursor-pointer`} 
      style={{ paddingLeft: `${PaddingX}px`, paddingRight: `${PaddingX}px`, paddingTop: `${PaddingY}px`, paddingBottom: `${PaddingY}px`, borderRadius: `${Rounded}px`, color: `${TextColor}`, width: Width === "fit" ? "fit-content" : "100%"}}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        if (LinkTo) {
          if (target) {
            window.open(LinkTo, '_blank');
            return;
          }
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
