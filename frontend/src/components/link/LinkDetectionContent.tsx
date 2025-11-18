import AnimationDiv from "../../ui/AnimationDiv";
import ModernInput from "../../ui/ModernInput";
import SafeAreaView from "../../ui/SafeAreaView";
import link from "/image/report/link.png";

export default function LinkDetectionContent() {
    return (
        <SafeAreaView classNameParent={"h-auto"} classNameChild={"flex-col justify-center mt-18"}>
            <AnimationDiv effect='fade-up' className="flex flex-col w-full justify-center items-center gap-2">
                <h1 className='font-poppins-semibold text-thirdtinary text-[35px]'>Laporkan Aktivitas Judi</h1>
                <p className='font-poppins-medium text-[17px] text-center text-white px-15 pt-2'>Bantu kami melindungi masyarakat dengan melaporkan situs atau tempat judi yang Anda temukan. Laporan Anda akan bersifat rahasia dan membantu mencegah penyebaran judi ilegal.</p>
            </AnimationDiv>
            <div className="w-full flex flex-col gap-2 mt-6">
                <div className="flex w-full">
                    <ModernInput themeInput="dark" placeholder="Masukkan URL yang ingin diperiksa..."/>
                    {/* <img src={link} className="w-8 h-auto" alt="" /> */}
                </div>

            </div>
        </SafeAreaView>
    )
}
