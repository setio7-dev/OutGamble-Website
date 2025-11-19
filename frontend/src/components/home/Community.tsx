import SafeAreaView from "../../ui/SafeAreaView";
import community from "/image/home/community/image.png";
import tag from "/image/home/community/tag.png";
import arrow from "/image/home/community/arrow.png";
import PrimaryButton from "../../ui/PrimaryButton";
import AnimationDiv from "../../ui/AnimationDiv";

export default function Community() {
  return (
    <SafeAreaView classNameChild={'lg:flex-row flex-col lg:justify-between justify-center gap-12'}>
        <img src={community} className="lg:w-140 w-full h-auto" alt="" data-aos="fade-right" data-aos-duration="1000" id="community" />
        <AnimationDiv effect="fade-left" duration={1000} className="flex flex-col gap-6">
            <img src={tag} className="w-40 h-auto" alt="" />
            <div className="flex flex-col">
                <h1 className="font-poppins-semibold lg:text-[36px] text-[24px] text-white">Bergabung di Komunitas <br className="lg:block hidden" /><span className="text-primary">Edukasi Anti Judi</span></h1>
                <p className="text-white font-poppins-medium lg:text-[14px] text-[12px] text-justify">Temukan ruang aman untuk saling berbagi pengalaman, berdiskusi, dan belajar bersama mengenai bahaya judi online. Di komunitas ini, kamu bisa bertemu dengan orang-orang yang memiliki semangat yang sama untuk menciptakan perubahan positif.</p>
            </div>
            <div className="flex flex-row lg:justify-start justify-center gap-4">
                <PrimaryButton Text="Gabung Sekarang" Type="primary" LinkTo="/community" PaddingX={20} PaddingY={14}/>
                <div className="flex items-center gap-4 cursor-pointer hover:translate-x-4 duration-500">
                    <h2 className="font-poppins-semibold text-primary lg:text-[18px] text-[14px]">Lihat Komunitas</h2>
                    <img src={arrow} className="w-6 h-auto" alt="" />
                </div>
            </div>
        </AnimationDiv>
    </SafeAreaView>
  )
}
