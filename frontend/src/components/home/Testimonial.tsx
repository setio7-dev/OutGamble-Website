import UseActionScroll from "../../hooks/home/UseActionScroll";
import SafeAreaView from "../../ui/SafeAreaView";
import star from "/image/home/testimonial/star.png";
import background from "/image/home/testimonial/background.png";
import UseTestimonialSelected from "../../hooks/home/UseTestimonialSelected";
import AnimationDiv from "../../ui/AnimationDiv";

export default function Testimonial() {
  const { data, currentIndex } = UseActionScroll();
  const { handleNextWithAnim, handlePrevWithAnim, reoderedTestimonialData, animateDirection } = UseTestimonialSelected();  
  
  return (
    <div className="w-full h-auto py-16 mt-12 flex flex-col justify-center gap-30">
      <SafeAreaView classNameParent={"w-full bg-white rotate-[-3deg]"} paddingY={16} classNameChild={"flex-col justify-center"}>
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
        <AnimationDiv effect="fade-up" className="text-center flex flex-col gap-4 w-200 z-20">
          <h1 className="font-poppins-bold text-[40px] text-white">Cerita dari Para Pejuang <span className="text-primary">Lepas Judi</span></h1>
          <p className="font-poppins-regular text-[14px] text-white">Butuh keberanian besar untuk mengakui, tekad kuat untuk berubah, dan dukungan dari orang-orang di sekitar. Namun setiap langkah kecil menjauh dari judi adalah kemenangan besar atas diri sendiri.</p>
        </AnimationDiv>
        <div className="w-full object-cover h-screen bg-cover -mt-16" style={{backgroundImage: `url(${background})`}}>
          <div className={`flex items-center justify-center gap-24 mt-8 transition-all duration-500 ${animateDirection === "next" ? "translate-x-16 opacity-0" : animateDirection === "prev" ? "-translate-x-16 opacity-0" : "translate-x-0 opacity-100"}`}>
            {reoderedTestimonialData.map((item, index) => {
              const angle = (Math.PI * index) / (reoderedTestimonialData.length - 1); 
              const y = Math.sin(angle) * 160; 
              return (
                <div key={item.id} style={{transform: `translateY(${y}px)`, transition: "all 0.5s ease"}}>
                  <img src={item.img} className={`w-24 h-24 rounded-full transition-transform duration-500 ${index === 3 ? "scale-125 border-2 border-primary" : "scale-100"}`} alt="" />
                </div>
              )
            })}
          </div>
          <AnimationDiv effect="fade-up" delay={300} className="flex justify-center mt-60 items-center">
            <div className="bg-primary p-2 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer translate-x-4 border-2 border-primary group hover:bg-white duration-500 hover:-rotate-6 z-2" onClick={handlePrevWithAnim}>
              <svg className="w-2.5 h-auto" viewBox="0 0 21 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-white group-hover:fill-primary duration-500" fill-rule="evenodd" clip-rule="evenodd" d="M0.829514 20.0345L16.8577 36.0627L20.864 32.0563L6.83901 18.0313L20.864 4.00633L16.8577 0L0.829514 16.0282C0.298346 16.5595 -4.76837e-05 17.28 -4.76837e-05 18.0313C-4.76837e-05 18.7826 0.298346 19.5032 0.829514 20.0345Z"/>
              </svg>
            </div>
            <div className={`bg-white rounded-lg border-2 border-[#D8D8D8] flex flex-col justify-center items-center py-4 px-8 w-160 gap-4 transition-all duration-500 ${animateDirection === "next" ? "translate-x-10 opacity-0" : animateDirection === "prev" ? "-translate-x-10 opacity-0" : "opacity-100 translate-x-0"}`}>
              <h1 className="font-poppins-semibold text-[26px] text-primary">{reoderedTestimonialData[3].name}</h1>
              <p className="text-[14px] text-black font-poppins-regular text-center">{reoderedTestimonialData[3].text}</p>
            </div>
            <div className="bg-primary p-2 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer -translate-x-4 border-2 border-primary group hover:bg-white duration-500 hover:-rotate-6 z-2" onClick={handleNextWithAnim}>
              <svg className="w-2.5 h-auto rotate-180" viewBox="0 0 21 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-white group-hover:fill-primary duration-500" fill-rule="evenodd" clip-rule="evenodd" d="M0.829514 20.0345L16.8577 36.0627L20.864 32.0563L6.83901 18.0313L20.864 4.00633L16.8577 0L0.829514 16.0282C0.298346 16.5595 -4.76837e-05 17.28 -4.76837e-05 18.0313C-4.76837e-05 18.7826 0.298346 19.5032 0.829514 20.0345Z"/>
              </svg>
            </div>
          </AnimationDiv>
        </div>
      </div>
    </div>
  )
}
