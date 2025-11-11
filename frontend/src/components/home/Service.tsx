import PrimaryButton from "../../ui/PrimaryButton"
import SafeAreaView from "../../ui/SafeAreaView"
import circle from "/image/home/service/circle.png";
import AnimationDiv from "../../ui/AnimationDiv";
import { serviceData } from "../../data/homeData";

export default function Service() {
  return (
    <div className="w-full relative bg-primary">
        <img src={circle} className="w-40 animate-autoRotates h-auto absolute -right-18 top-20" alt="" />
        <SafeAreaView classNameParent={"h-[110vh] bg-linear-to-r from-[#005625] to-[#05B14F]"} classNameChild={"h-full relative flex-col justify-center items-start gap-6"}>
            <AnimationDiv effect="fade-up" className="flex w-full flex-col gap-6">
                <PrimaryButton Text="Layanan Kami" Type="secondary"/>
                <div className="flex flex-col gap-2">
                    <h1 className="text-white font-poppins-bold text-[34px]">Perlindungan Digital untuk <br /> Internet yang Lebih Aman</h1>
                    <p className="w-[600px] font-poppins-regular text-white text-[14px]">OutGamble menyediakan fitur cerdas untuk membantu masyarakat mendeteksi dan melaporkan aktivitas judi online secara cepat, mudah, dan aman.</p>
                </div>
            </AnimationDiv>
            <div className="flex justify-between w-full items-center mt-4 gap-6 cursor-pointer">
                {serviceData.map((item, index) => (
                    <AnimationDiv effect="fade-up" delay={item.id * 300} className="bg-white hover:bg-primary duration-500 border-2 border-white group w-full rounded-lg p-6 flex flex-col gap-6" key={index}>
                        <svg viewBox={`${item.id == 1 ? '0 0 77 77' : '0 0 88 88'}`} className="bg-primary group-hover:bg-white duration-500 w-28 h-auto p-6 rounded-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d={item.img} className="fill-white group-hover:fill-primary duration-500"/>
                        </svg>
                        <div className="flex flex-col gap-2">
                            <h1 className="font-poppins-semibold text-primary group-hover:text-white duration-500 text-[24px]">{item.title}</h1>
                            <p className="text-justify font-poppins-medium text-gray group-hover:text-white duration-500 text-[12px]">{item.desc}</p>
                        </div>
                        <div className="flex justify-between">
                            <div className=""></div>
                            <svg className="w-8 h-auto group-hover:-rotate-12 duration-500" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-[#05B14F] group-hover:fill-white" d="M33.94 21.1783C34.2525 20.8658 34.428 20.4419 34.428 20C34.428 19.5581 34.2525 19.1342 33.94 18.8217L24.5117 9.39334C24.3579 9.23415 24.174 9.10718 23.9707 9.01983C23.7673 8.93249 23.5486 8.88651 23.3273 8.88459C23.106 8.88266 22.8866 8.92483 22.6817 9.00863C22.4769 9.09244 22.2908 9.21619 22.1343 9.37268C21.9779 9.52917 21.8541 9.71525 21.7703 9.92008C21.6865 10.1249 21.6443 10.3444 21.6463 10.5657C21.6482 10.787 21.6942 11.0057 21.7815 11.209C21.8688 11.4124 21.9958 11.5963 22.155 11.75L28.7383 18.3333L6.66667 18.3333C6.22464 18.3333 5.80072 18.5089 5.48816 18.8215C5.1756 19.1341 5 19.558 5 20C5 20.442 5.1756 20.866 5.48816 21.1785C5.80072 21.4911 6.22464 21.6667 6.66667 21.6667L28.7383 21.6667L22.155 28.25C21.8514 28.5643 21.6834 28.9853 21.6872 29.4223C21.691 29.8593 21.8663 30.2774 22.1753 30.5864C22.4843 30.8954 22.9023 31.0707 23.3393 31.0745C23.7763 31.0783 24.1973 30.9103 24.5117 30.6067L33.94 21.1783Z" />
                            </svg>
                        </div>
                    </AnimationDiv>
                ))}
            </div>
        </SafeAreaView>
    </div>
  )
}
