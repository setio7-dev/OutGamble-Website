import SafeAreaView from "../../ui/SafeAreaView";
import image from "/image/home/tips/image.png";
import { tipsData } from "../../data/homeData";
import AnimationDiv from "../../ui/AnimationDiv";

export default function Tips() {
  return (
    <SafeAreaView classNameParent={"h-auto"} classNameChild={"flex-col justify-center gap-16"}>
        <AnimationDiv effect="fade-up" className="flex flex-col justify-center items-center gap-2 text-center lg:w-160 w-full">
            <h1 className="font-poppins-semibold text-white lg:text-[38px] text-[22px]">Tiga Langkah Sederhana untuk <span className="text-primary">Menghindari Judi Online</span></h1>
            <p className="text-white font-poppins-regular lg:text-[14px] text-[12px]">Mulailah perubahan kecil hari ini. Dengan langkah yang tepat, kamu bisa terbebas dari kebiasaan judi dan menjalani hidup yang lebih tenang serta produktif.</p>
        </AnimationDiv>
        <div className="flex lg:flex-row flex-col lg:justify-between justify-center lg:gap-0 gap-12 items-center w-full">
            <AnimationDiv className={"lg:w-[460px] w-full"} effect="fade-right" delay={200}>
                <img src={image} className="lg:w-[460px] w-full h-auto" alt="" />
            </AnimationDiv>
            <div className="flex flex-col items-center gap-4">
                {tipsData.map((item, index) => (
                    <AnimationDiv effect="fade-left" delay={item.id * 200} className="flex lg:items-start items-center justify-center gap-8" key={index}>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <div className="bg-black lg:w-22 w-18 lg:h-22 h-18 border-2 border-primary border-dashed rounded-full p-1">
                                <div className="bg-primary rounded-full w-full h-full p-2">
                                    <div className="bg-white w-full h-full rounded-full flex justify-center items-center">
                                        <h1 className="text-primary font-poppins-semibold text-[24px]">0{item.id}</h1>
                                    </div>
                                </div>
                            </div>
                            {item.id <= 2 && (
                                <div className="bg-black border-2 border-primary w-1 h-14 border-dashed rounded-full "></div>
                            )}
                        </div>
                        <div className="flex flex-col justify-center items-start lg:w-110 w-full gap-2 -mt-4">
                            <h1 className="text-primary font-poppins-semibold lg:text-[24px] text-[16px]">{item.title}</h1>
                            <p className="text-white font-poppins-regular lg:text-[14px] text-[12px] text-justify">{item.text}</p>
                        </div>
                    </AnimationDiv>
                ))}
            </div>
        </div>
    </SafeAreaView>
  )
}
