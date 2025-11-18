import AnimationDiv from "../../ui/AnimationDiv";
import SafeAreaView from "../../ui/SafeAreaView";
import online from "/image/report/online.png";
import offline from "/image/report/offline.png";

export default function ReportContent() {
  return (
    <SafeAreaView classNameParent={"h-auto"} classNameChild={"justify-center flex-col mt-18"}>
        <AnimationDiv effect='fade-up' className="flex flex-col w-full justify-center items-center gap-2">
            <h1 className='font-poppins-semibold text-thirdtinary text-[35px]'>Laporkan Aktivitas Judi</h1>
            <p className='font-poppins-medium text-[17px] text-center text-white px-15 pt-2'>Bantu kami melindungi masyarakat dengan melaporkan situs atau tempat judi yang Anda temukan. Laporan Anda akan bersifat rahasia dan membantu mencegah penyebaran judi ilegal.</p>
        </AnimationDiv>
        <AnimationDiv effect="fade-up" className="flex flex-row items-center w-full justify-between mt-10 gap-12">
            <div className="w-full hover:scale-95 hover:backdrop-opacity-95 duration-300 cursor-pointer p-6 rounded-2xl bg-primary/20 border-2 border-primary flex flex-col justify-center items-center gap-2">
                <img src={online} className="w-18 h-auto" alt="" />
                <h1 className="text-[24px] font-poppins-semibold text-white">Judi Online</h1>
                <p className="font-poppins-regular text-[14px] text-white">Situs web, aplikasi, atau link judi online</p>
            </div>
            <div className="w-full hover:scale-95 hover:backdrop-opacity-95 duration-300 cursor-pointer p-6 rounded-2xl bg-transparent border-2 border-[#454545] flex flex-col justify-center items-center gap-2">
                <img src={offline} className="w-18 h-auto" alt="" />
                <h1 className="text-[24px] font-poppins-semibold text-white">Judi Offline</h1>
                <p className="font-poppins-regular text-[14px] text-white">Tempat fisik atau lokasi judi</p>
            </div>
        </AnimationDiv>
    </SafeAreaView>
  )
}
