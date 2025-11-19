import AnimationDiv from "../ui/AnimationDiv";
import SafeAreaView from "../ui/SafeAreaView";
import circle from "/image/home/footer/circle.png";
import download from "/image/home/footer/download.png";
import icon from "/image/home/footer/icon.png";
import logo from "/image/home/footer/logo.png";

export default function Footer() {
  return (
    <div className="w-full h-auto relative overflow-hidden mt-16">
      <img src={circle} className="-right-10 -bottom-10 w-38 h-38 absolute animate-autoRotates" alt="" />
      <SafeAreaView classNameParent={"bg-primary"} classNameChild={"justify-center flex-col gap-12"}>
        <AnimationDiv effect="fade-up" className="flex justify-between items-center w-full gap-16">
          <div className="flex flex-col gap-6 w-140">
            <div className="flex items-center gap-4">
              <img src={logo} className="w-16 h-16" alt="" />
              <h1 className="font-poppins-semibold text-[26px] text-white">Out Gamble</h1>
            </div>
            <p className="font-poppins-regular text-white text-[14px] text-justify">Membantu masyarakat memahami bahaya judi online serta memberikan edukasi dan dukungan untuk hidup yang lebih sehat dan bebas dari kecanduan digital.</p>
            <img src={icon} className="w-40 h-auto" alt="" />
          </div>
          <div className="lg:flex hidden items-start justify-between w-full gap-2">
            <div className="flex flex-col gap-4">
              <h1 className="text-[18px] font-poppins-semibold text-white">Nomor Telepon</h1>
              <p className="text-[14px] font-poppins-regular text-white">+62 1297786651</p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-[18px] font-poppins-semibold text-white">Tentang Kami</h1>
              <p className="text-[14px] font-poppins-regular text-white">Layanan Kami</p>
              <p className="text-[14px] font-poppins-regular text-white">Edukasi</p>
              <p className="text-[14px] font-poppins-regular text-white">Testimoni</p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-[18px] font-poppins-semibold text-white">Lokasi</h1>
              <p className="text-[14px] font-poppins-regular text-white">Karir</p>
              <p className="text-[14px] font-poppins-regular text-white">Kebijakan Privasi</p>
              <p className="text-[14px] font-poppins-regular text-white">Lokasi</p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-[18px] font-poppins-semibold text-white">Sosial Media</h1>
              <p className="text-[14px] font-poppins-regular text-white">Twitter</p>
              <p className="text-[14px] font-poppins-regular text-white">Instagram</p>
              <p className="text-[14px] font-poppins-regular text-white">Facebook</p>
            </div>
          </div>
        </AnimationDiv>
        <AnimationDiv effect="fade-right" delay={200} className="flex flex-col gap-6 w-full">
          <div className="bg-white w-full h-0.5 rounded-full"></div>
          <div className="flex flex-col gap-6">
            <h1 className="font-poppins-semibold text-[20px] text-white">Dapatkan Aplikasi</h1>
            <img src={download} className="w-80 cursor-pointer h-auto" alt="" />
          </div>
        </AnimationDiv>
      </SafeAreaView>
    </div>
  )
}
