import SafeAreaView from "../../ui/SafeAreaView";
import starPrimary from "/image/home/action/star-primary.png";
import starSecondary from "/image/home/action/star-secondary.png";
import image1 from "/image/home/action/image1.png";
import image2 from "/image/home/action/image2.png";
import UseActionScroll from "../../hooks/home/UseActionScroll";

export default function Action() {    
    const { currentIndex, data } = UseActionScroll();
  return (
    <div className="w-full">
        <SafeAreaView classNameParent={"h-screen"} classNameChild={"justify-center flex-col w-full"}>
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
        </SafeAreaView>
    </div>
  )
}
