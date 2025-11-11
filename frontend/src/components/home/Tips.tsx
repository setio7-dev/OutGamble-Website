import SafeAreaView from "../../ui/SafeAreaView";
import image from "/image/home/tips/image.png";
import { tipsData } from "../../data/homeData";
import AnimationDiv from "../../ui/AnimationDiv";

export default function Tips() {
  return (
    <SafeAreaView classNameParent={"h-auto py-16"} classNameChild={"flex-col justify-center gap-16"}>
        <AnimationDiv effect="fade-up" className="flex flex-col justify-center items-center gap-2 text-center w-160">
            <h1 className="font-poppins-semibold text-white text-[38px]">Tiga Langkah Sederhana untuk <span className="text-primary">Menghindari Judi Online</span></h1>
            <p className="text-white font-poppins-regular text-[14px]">Mulailah perubahan kecil hari ini. Dengan langkah yang tepat, kamu bisa terbebas dari kebiasaan judi dan menjalani hidup yang lebih tenang serta produktif.</p>
        </AnimationDiv>
        <div className="flex justify-between items-center w-full">
            <AnimationDiv className={"w-[460px]"} effect="fade-right" delay={200}>
                <img src={image} className="w-[460px] h-auto" alt="" />
            </AnimationDiv>
            <div className="flex flex-col items-center gap-4">
                {tipsData.map((item, index) => (
                    <AnimationDiv effect="fade-left" delay={item.id * 200} className="flex items-start justify-center gap-8" key={index}>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <div className="bg-black w-22 h-22 border-2 border-primary border-dashed rounded-full p-1">
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
                        <div className="flex flex-col justify-center items-start w-110 gap-2 -mt-4">
                            <h1 className="text-primary font-poppins-semibold text-[24px]">{item.title}</h1>
                            <p className="text-white font-poppins-regular text-[14px] text-justify">{item.text}</p>
                        </div>
                    </AnimationDiv>
                ))}
            </div>
        </div>
    </SafeAreaView>
  )
}
