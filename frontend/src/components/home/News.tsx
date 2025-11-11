import SafeAreaView from "../../ui/SafeAreaView";
import image from "/image/home/news/image-primary.png";
import { newsData } from "../../data/homeData";
import AnimationDiv from "../../ui/AnimationDiv";

export default function News() {
  return (
    <SafeAreaView classNameParent={"h-auto py-16"} classNameChild={"flex-col justify-center"}>
        <AnimationDiv effect="fade-up" className="flex justify-between w-full">
            <h1 className="font-poppins-semibold text-white text-[32px]">Topik Terkini tentang <span className="text-primary">Judi Online</span></h1>
            <div className=""></div>
        </AnimationDiv>
        <div className="flex justify-between items-center mt-10 w-full">
            <a href="https://news.detik.com/berita/d-7355672/kominfo-blokir-1-9-juta-konten-judi-online-sejak-juli-2023-22-mei-2024" target="_blank">
                <AnimationDiv effect="fade-right" delay={200} className="flex flex-col cursor-pointer justify-center items-start gap-4 w-[500px]">
                    <img src={image} className="w-full h-auto" alt="" />
                    <div className="flex flex-col gap-2">
                        <p className="font-poppins-regular text-[14px] text-white">Senin 5 Januari, 2025</p>
                        <h1 className="text-primary text-justify font-poppins-semibold text-[22px]">Kominfo Blokir 1,9 Juta Konten Judi Online Sejak Juli 2023–22 Mei 2024</h1>
                        <p className="font-poppins-regular text-white text-[14px]">Kementerian Komunikasi dan Informatika (Kominfo) menyebut telah memblokir 1.918.520 konten judi online...</p>
                    </div>
                </AnimationDiv>
            </a>
            <AnimationDiv effect="fade-left" delay={200} className="flex flex-col gap-8">
                {newsData.map((item, index) => (
                    <a href={item.link} target="_blank" className="flex justify-center items-center w-[580px] gap-8 cursor-pointer" key={index}>
                        <img src={item.img} className="w-38 h-auto" alt="" />
                        <div className="flex flex-col gap-2">
                            <p className="font-poppins-regular text-white text-[14px]">{item.date}</p>
                            <h1 className="font-poppins-semibold text-justify text-primary text-[22px]">{item.title}</h1>
                            <p className="font-poppins-regular text-[14px] text-justify text-white">{item.desc}</p>
                        </div>
                    </a>
                ))}
            </AnimationDiv>
        </div>
    </SafeAreaView>
  )
}
