import backCircle from "/image/home/welcome/back-circle.png";
import circle1 from "/image/home/welcome/circle1.png";
import circle2 from "/image/home/welcome/circle2.png";
import kutip from "/image/home/welcome/kutip.png";
import person from "/image/home/welcome/person.png";
import stars from "/image/home/welcome/stars.png";
import textLine from "/image/home/welcome/text-line.png";
import PrimaryButton from "../../ui/PrimaryButton";

export default function Welcome() {
  return (
    <div className='flex justify-center items-center h-screen bg-black overflow-y-hidden'>
      <div className="flex justify-center items-center bg-white rounded-b-[120px] w-full h-screen">
        <div className="w-280 flex flex-col justify-end h-full items-center">
          <div className="w-full flex gap-6 flex-col">
            <div className="relative w-full">
                <img src={circle1} alt="" className="w-22 h-auto absolute left-14 -top-2" />
                <h1 className="font-poppins-semibold text-[42px] text-center">Memberdayakan Generasi <br />Cerdas untuk <span className="text-primary">Menjauhi Judi Online</span></h1>
                <img src={textLine} alt="" className="w-[46px] h-auto absolute right-28 bottom-0" />
            </div>
            <div className="flex justify-between">
                <div className="w-[380px] flex gap-2">
                    <img src={kutip} alt="" className="w-6 h-6 -mt-4" />
                    <div className="flex flex-col gap-6">
                        <p className="font-poppins-regular text-[14px] text-justify text-gray">Out Gamble hadir sebagai platform edukatif yang membantu pelajar dan masyarakat memahami bahaya judi online. Melalui informasi, tips, dan solusi digital yang interaktif, kami berkomitmen membangun generasi sadar dan bebas dari kecanduan judi.</p>                    
                        <PrimaryButton Type="primary" Text="Cari Tips & Saran"/>
                    </div>
                </div>
                <div className="relative align-bottom">
                    <img src={person} className="w-[300px] h-auto relative z-1" alt="" />
                    <img src={backCircle} className="scale-[1.1] absolute z-0 bottom-0" alt="" />
                </div>
                <div className="w-[340px] flex flex-col justify-between pb-6">
                    <div className=""></div>
                    <div className="flex flex-col items-end gap-4">
                        <img src={stars} className="w-[120px] h-auto" alt="" />
                        <div className="text-right">
                            <h2 className="text-black font-poppins-semibold text-[32px]">5+ Tahun</h2>
                            <p className="text-black text-[16px] font-poppins-medium">Pengalaman Edukasi Digital</p>
                        </div>
                        <img src={circle2} className="w-[140px] mt-10 h-auto" alt="" />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
