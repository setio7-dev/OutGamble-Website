import SafeAreaView from "../../ui/SafeAreaView";
import starPrimary from "/image/home/action/star-primary.png";
import starSecondary from "/image/home/action/star-secondary.png";
import image1 from "/image/home/action/image1.png";
import image2 from "/image/home/action/image2.png";
import lamp from "/image/home/action/lamp.png";
import information from "/image/home/action/information.png";
import UseActionScroll from "../../hooks/home/UseActionScroll";
import AnimationDiv from "../../ui/AnimationDiv";

export default function Action() {    
    const { currentIndex, data } = UseActionScroll();
  return (
    <div className="w-full flex flex-col justify-center">
        <div className="w-full pt-16">
            <div className="overflow-x-hidden w-full">
                <div className="flex items-center gap-8 justify-start duration-100 w-full" style={{ transform: `translateX(-${currentIndex}px)` }}>
                    {data.map((item, index) => (
                        <div className="flex shrink-0 items-center gap-8 justify-start" key={index}>
                            <img className="w-16 h-auto" src={starPrimary} alt="" />
                            <h1 className="text-white text-[38px] font-poppins-bold">{item.text}</h1>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex w-full items-center gap-8 mt-8 px-8">
                <div className="h-0.5 bg-white rounded-full w-full"></div>
                <img src={starSecondary} className="w-8 h-auto" alt="" />
                <div className="h-0.5 bg-white rounded-full w-full"></div>
            </div>
        </div>
        <SafeAreaView classNameChild={"flex-col justify-center"}>
            <AnimationDiv effect="fade-up" className="flex justify-between items-center mt-12 w-full">
                <h1 className="font-poppins-semibold text-[38px] text-white">Mengubah Kesadaran <br /> Menjadi <span className="text-primary">Gerakan Nyata</span></h1>
                <p className="font-poppins-regular text-[14px] w-[500px] text-right text-white">Kami percaya bahwa kesadaran digital adalah kunci untuk masa depan yang lebih baik. Melalui Out Gamble, kami hadir sebagai platform edukasi yang membantu masyarakat memahami bahaya judi online dan memberikan solusi nyata untuk mencegahnya.</p>
            </AnimationDiv>
            <div className="flex justify-between items-center mt-12 w-full">
                <AnimationDiv effect="fade-right" delay={300} className="relative">
                    <img src={starPrimary} className="w-10 h-auto absolute top-6 left-6" alt="" />
                    <img src={information} className="absolute w-[380px] h-auto bottom-12 left-12" alt="" />
                    <img src={image1} className="w-[640px] h-auto" alt="" />
                </AnimationDiv>
                <AnimationDiv effect="fade-left" delay={300} className="relative">
                    <img src={lamp} className="w-20 h-auto absolute left-6 top-8" alt="" />
                    <img src={image2} className="w-[420px] h-auto" alt="" />
                </AnimationDiv>
            </div>
        </SafeAreaView>
    </div>
  )
}
