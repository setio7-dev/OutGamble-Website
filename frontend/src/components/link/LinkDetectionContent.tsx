import UseLinkDetectionHook from "../../hooks/link/UseLinkDetectionHook";
import AnimationDiv from "../../ui/AnimationDiv";
import ModernInput from "../../ui/ModernInput";
import PrimaryButton from "../../ui/PrimaryButton";
import SafeAreaView from "../../ui/SafeAreaView";

export default function LinkDetectionContent() {
    const { data, handleLinkdetection, handleChange, link } = UseLinkDetectionHook();
    return (
        <SafeAreaView classNameParent={"h-auto"} classNameChild={"flex-col justify-center mt-18"}>
            <AnimationDiv effect='fade-up' className="flex flex-col w-full justify-center items-center gap-2">
                <h1 className='font-poppins-semibold text-thirdtinary lg:text-[35px] text-[24px]'>Deteksi Link Judi</h1>
                <p className='font-poppins-medium lg:text-[17px] text-[14px] text-center text-white lg:px-15 px-0 pt-2'>Periksa keamanan link sebelum mengaksesnya. <br className="lg:block hidden" />Lindungi diri Anda dari situs judi online berbahaya.</p>
            </AnimationDiv>
            <AnimationDiv effect="fade-up" className="w-full flex flex-col gap-8 mt-6">
                <ModernInput name="link" value={link} onChange={handleChange} themeInput="dark" placeholder="Masukkan URL yang ingin diperiksa..."/>
                <div className="flex justify-center">
                    <PrimaryButton onClick={handleLinkdetection} Text="Scan Sekarang" TextColor="black" Rounded={10} PaddingX={80}/>
                </div>
            </AnimationDiv>
            <AnimationDiv effect="fade-up" className="flex lg:flex-row flex-col w-full justify-between items-center gap-12 mt-18">
                <div className="w-full rounded-lg border-2 border-[#454545] flex flex-col gap-2 justify-center items-center p-6">
                    <h1 className="font-poppins-semibold text-primary text-[40px]">{data.length}</h1>
                    <h1 className="font-poppins-semibold text-white lg:text-[24px] text-[20px]">Total Scan</h1>
                </div>
                <div className="w-full rounded-lg border-2 border-[#454545] flex flex-col gap-2 justify-center items-center p-6">
                    <h1 className="font-poppins-semibold text-primary text-[40px]">{data.filter((item) => item.status == "tidak aman").length}</h1>
                    <h1 className="font-poppins-semibold text-white lg:text-[24px] text-[20px]">Ancaman Ditemukan</h1>
                </div>
            </AnimationDiv>
            <AnimationDiv effect="fade-up" className="w-full p-6 rounded-lg border-2 border-[#454545] flex flex-col gap-6 mt-14">
                <h1 className="text-white font-poppins-semibold lg:text-[24px] text-[16px]">Riwayat Pencarian</h1>  
                <div className="flex flex-col w-full gap-6">
                    {data.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-4 rounded-lg border-2 border-[#2B2B2B]">
                            <h1 className="font-poppins-regular text-white lg:text-[16px] text-[12px]">{item.link}</h1>
                            {item.status == "tidak aman" ? (
                                <button className="font-poppins-semibold bg-red/20 rounded-lg lg:px-8 px-4 py-3 text-red lg:text-[16px] text-[12px]">Berbahaya</button>
                            ) : (
                                <button className="font-poppins-semibold bg-primary/20 rounded-lg lg:px-8 px-4 py-3 text-primary lg:text-[16px] text-[12px]">Aman</button>
                            )}
                        </div>
                    ))}
                </div>
            </AnimationDiv>
        </SafeAreaView>
    )
}
