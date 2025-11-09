import backCircle from "/image/home/welcome/back-circle.png";
import circle1 from "/image/home/welcome/circle1.png";
import circle2 from "/image/home/welcome/circle2.png";
import kutip from "/image/home/welcome/kutip.png";
import person from "/image/home/welcome/person.png";
import stars from "/image/home/welcome/stars.png";
import textLine from "/image/home/welcome/text-line.png";
import PrimaryButton from "../../ui/PrimaryButton";
import SafeAreaView from "../../ui/SafeAreaView";
import AnimationDiv from "../../ui/AnimationDiv";

export default function Welcome() {
  return (
    <div className='flex justify-center items-center h-screen bg-black overflow-y-hidden'>
      <SafeAreaView classNameParent={'bg-white rounded-b-[120px] h-screen'} classNameChild={'flex-col justify-end h-full'}>
        <div className="w-full flex gap-6 flex-col">
          <AnimationDiv className="relative w-full" effect="fade-up">
              <img src={circle1} alt="" className="w-22 h-auto animate-bounces absolute left-14 -top-2" />
              <h1 className="font-poppins-semibold text-[42px] text-center">Memberdayakan Generasi <br />Cerdas untuk <span className="text-primary">Menjauhi Judi Online</span></h1>
              <img src={textLine} alt="" className="w-[46px] animate-rotates h-auto absolute right-28 bottom-0" />
          </AnimationDiv>
          <div className="flex justify-between">
              <AnimationDiv className="w-[380px] flex gap-2" effect="fade-right" delay={200}>
                  <img src={kutip} alt="" className="w-6 h-6 -mt-4" />
                  <div className="flex flex-col gap-6">
                      <p className="font-poppins-regular text-[14px] text-justify text-gray">Out Gamble hadir sebagai platform edukatif yang membantu pelajar dan masyarakat memahami bahaya judi online. Melalui informasi, tips, dan solusi digital yang interaktif, kami berkomitmen membangun generasi sadar dan bebas dari kecanduan judi.</p>                    
                      <PrimaryButton Type="primary" Text="Cari Tips & Saran"/>
                  </div>
              </AnimationDiv>
              <AnimationDiv className="relative align-bottom" effect="zoom-in" delay={600}>
                  <div className="absolute bottom-14 z-10 bg-[#3B3B3B70] p-4 rounded-full flex justify-center items-center gap-4 w-[440px] -translate-x-1/2 left-1/2 backdrop:backdrop-blur-2xl animate-bounces">
                    <PrimaryButton Text="Mulai Sekarang" Type="secondary"/>
                    <button className="bg-transparent rounded-full font-poppins-regular text-[14px] cursor-pointer border-2 border-white px-[30px] py-3.5 text-white">
                      Pelajari Lebih Lanjut
                    </button>
                  </div>
                  <img src={person} className="w-[300px] h-auto relative z-1" alt="" />
                  <img src={backCircle} className="scale-[1.1] absolute z-0 bottom-0 animate-bounces" alt="" />
              </AnimationDiv>
              <AnimationDiv className="w-[340px] flex flex-col justify-between pb-6" effect="fade-left" delay={200}>
                  <div className=""></div>
                  <div className="flex flex-col items-end gap-4">
                      <img src={stars} className="w-[120px] h-auto" alt="" />
                      <div className="text-right">
                          <h2 className="text-black font-poppins-semibold text-[32px]">5+ Tahun</h2>
                          <p className="text-black text-[16px] font-poppins-medium">Pengalaman Edukasi Digital</p>
                      </div>
                      <img src={circle2} className="w-[140px] animate-bounces mt-10 h-auto" alt="" />
                  </div>
              </AnimationDiv>
          </div>
        </div>
      </SafeAreaView>
    </div>
  )
}
