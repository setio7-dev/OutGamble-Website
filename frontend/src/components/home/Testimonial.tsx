import UseActionScroll from "../../hooks/home/UseActionScroll";
import SafeAreaView from "../../ui/SafeAreaView";
import star from "/image/home/testimonial/star.png";
import background from "/image/home/testimonial/background.png";
import { testimonialData } from "../../data/homeData";

export default function Testimonial() {
  const { data, currentIndex } = UseActionScroll();
  return (
    <div className="w-full h-auto mt-12 flex flex-col justify-center gap-30">
      <SafeAreaView classNameParent={"h-auto w-full bg-white rotate-[-3deg]"} classNameChild={"flex-col justify-center"}>
        <div className="">
          <div className="overflow-x-hidden w-full">
            <div className="flex items-center gap-8 justify-start py-2 duration-100 w-full" style={{ transform: `translateX(-${currentIndex}px)` }}>
              {data.map((item, index) => (
                <div className="flex shrink-0 items-center gap-8 justify-start" key={index}>
                  <img className="w-10 h-auto" src={star} alt="" />
                  <h1 className="text-black text-[40px] font-poppins-bold">{item.text}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SafeAreaView>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-center flex flex-col gap-4 w-200 z-20">
          <h1 className="font-poppins-bold text-[40px] text-white">Cerita dari Para Pejuang <span className="text-primary">Lepas Judi</span></h1>
          <p className="font-poppins-regular text-[14px] text-white">Butuh keberanian besar untuk mengakui, tekad kuat untuk berubah, dan dukungan dari orang-orang di sekitar. Namun setiap langkah kecil menjauh dari judi adalah kemenangan besar atas diri sendiri.</p>
        </div>
        <div className="w-full object-cover h-screen bg-cover -mt-16" style={{backgroundImage: `url(${background})`}}>
            <div className="flex items-center justify-center gap-24 mt-8">
              {testimonialData.map((item, index) => {
                const angle = (Math.PI * index) / (testimonialData.length - 1); 
                const y = Math.sin(angle) * 160; 
                return (
                  <div className="" key={item.id} style={{transform: `translateY(${y}px)`}}>
                    <img src={item.img} className="w-24 h-24" alt="" />
                  </div>
                )
              })}
            </div>
        </div>
      </div>
    </div>
  )
}
