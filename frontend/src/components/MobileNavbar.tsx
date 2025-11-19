import logo from "/image/logo/logo1.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="w-full h-[10vh] bg-primary flex fixed items-center justify-between px-6 z-90">
      <img src={logo} onClick={() => navigate("/#")} className="w-8 h-auto" alt="" />
      <div className="flex flex-col h-5 relative z-110 justify-between items-center" onClick={handleOpen}>
        <div className={`bg-white h-0.5 w-6 duration-500 ${isOpen ? "rotate-45 translate-y-2.5" : "rotate-0 translate-0"}`}></div>
        <div className={`bg-white h-0.5 w-6 duration-500 ${isOpen ? "opacity-0" : "opacity-100"}`}></div>
        <div className={`bg-white h-0.5 w-6 duration-500 ${isOpen ? "-rotate-45 -translate-y-2" : "rotate-0 translate-0"}`}></div>
      </div>
      <div className={`absolute top-0 w-50 duration-500 ${isOpen ? 'right-0' : 'right-[-300px]'} bg-primary h-screen z-100 flex flex-col justify-center items-center gap-8`}>
        <a href="/#about" className="font-poppins-medium text-white text-[16px]">Tentang Kami</a>
        <a href="/#service" className="font-poppins-medium text-white text-[16px]">Layanan</a>
        <a href="/#testimonial" className="font-poppins-medium text-white text-[16px]">Testimoni</a>
        <a href="/#community" className="font-poppins-medium text-white text-[16px]">Komunitas Kami</a>
      </div>
    </div>
  )
}
