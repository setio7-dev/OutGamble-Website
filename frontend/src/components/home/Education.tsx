import { educationData } from '../../data/homeData';
import AnimationDiv from '../../ui/AnimationDiv';
import SafeAreaView from '../../ui/SafeAreaView'
import playBtn from "/image/home/education/playBtn.png";

export default function Education() {
  return (
    <SafeAreaView classNameParent={"h-auto py-16"} classNameChild={"justify-center flex-col gap-14"}>
        <AnimationDiv effect='fade-up' className="flex flex-col text-center gap-4 w-[960px]">
            <h1 className="font-poppins-semibold text-white text-[38px]"><span className='text-primary'>Edukasi Judi Online:</span> Pahami, Hindari, dan Lawan</h1>
            <p className="text-white font-poppins-regular text-[14px]">Tonton berbagai video singkat yang akan bantu kamu memahami lebih dalam tentang bahaya judi online! Dari dampaknya pada mental, cara pencegahan, sampai kisah nyata yang menginspirasi untuk berhenti berjudi.</p>
        </AnimationDiv>
        <div className="grid grid-cols-3 gap-12 w-full">
            {educationData.map((item, index) => (
                <AnimationDiv effect='fade-up' delay={item.id * 200} className="bg-white p-4 rounded-2xl flex flex-col gap-4" key={index}>
                    <div className="w-full h-[190px] relative">
                        <img src={playBtn} className='w-16 h-16 absolute z-20 -translate-1/2 top-1/2 left-1/2 cursor-pointer' alt="" />
                        <div className="w-full h-full bg-black opacity-40 absolute rounded-2xl"></div>
                        <img src={item.img} alt="" className='w-full h-full rounded-2xl object-cover' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className='text-black font-poppins-semibold text-justify text-[20px]'>{item.title}</h1>
                        <p className='font-poppins-medium text-[#757575] text-[12px] text-justify'>{item.desc}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                        <img src={item.profile.img} className='w-10 h-10' alt="" />
                        <div className="flex flex-col">
                            <h1 className='font-poppins-semibold text-[14px] text-black'>{item.profile.name}</h1>
                            <p className='text-[12px] text-[#838383] font-poppins-medium'>{item.profile.date}</p>
                        </div>
                    </div>
                </AnimationDiv>
            ))}
        </div>
    </SafeAreaView>
  )
}
