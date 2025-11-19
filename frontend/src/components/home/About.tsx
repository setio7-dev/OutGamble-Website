import SafeAreaView from "../../ui/SafeAreaView";
import aboutImage from "/image/home/about/image.png";
import PrimaryButton from "../../ui/PrimaryButton";
import AnimationDiv from "../../ui/AnimationDiv";
import { aboutData } from "../../data/homeData";

export default function About() {
  return (
    <SafeAreaView classNameParent={"h-auto"} classNameChild={"h-full flex-col justify-center"}>
        <div className="flex lg:flex-row flex-col items-center lg:justify-between justify-center w-full lg:gap-0 gap-12" id="about">
            <AnimationDiv effect="fade-right">
                <img src={aboutImage} alt="" className="lg:w-[440px] w-full h-auto duration-500 hover:scale-[1.1] cursor-pointer" />
            </AnimationDiv>
            <AnimationDiv effect="fade-up" className="flex flex-col gap-6 lg:w-[620px] w-full">
                <PrimaryButton Text="Tentang Kami" Type="secondary"/>
                <div className="flex flex-col gap-2">
                    <h1 className="font-poppins-bold lg:text-[36px] text-[26px] text-white">Edukasi Digital untuk Generasi <br className="lg:block hidden" /><span className="text-primary"> Bebas Judi Online</span></h1>
                    <p className="text-white font-poppins-medium text-[12px] text-justify">Kami percaya bahwa kesadaran digital adalah kunci untuk masa depan yang lebih baik. Melalui Out Gamble, kami hadir sebagai platform edukasi yang membantu masyarakat memahami bahaya judi online dan memberikan solusi nyata untuk mencegahnya. Kami berkomitmen menciptakan lingkungan digital yang aman, sehat, dan produktif bagi semua kalangan terutama generasi muda.</p>
                </div>
                <div className="flex flex-col gap-6">
                    {aboutData.map((item, index) => (
                        <AnimationDiv effect="fade-up" delay={400} className="flex items-center gap-6" key={index}>
                            <img src={item.img} className="w-16 h-16" alt="" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-primary font-poppins-semibold lg:text-[18px] text-[16px]">{item.title}</h1>
                                <p className="text-[10px] text-white font-poppins-regular text-justify">{item.desc}</p>
                            </div>
                        </AnimationDiv>
                    ))}
                </div>
            </AnimationDiv>
        </div>
    </SafeAreaView>
  )
}
