import SafeAreaView from "../../ui/SafeAreaView";
import bot from "/image/home/bot/bot.png";
import botBg from "/image/home/bot/bg-bot.png";
import PrimaryButton from "../../ui/PrimaryButton";
import AnimationDiv from "../../ui/AnimationDiv";

export default function Bot() {
  return (
    <SafeAreaView classNameChild={"lg:justify-between justify-center lg:flex-row flex-col lg:gap-0 gap-12"}>
        <AnimationDiv effect="fade-right" className="relative">
            <img src={bot} className="lg:w-90 w-full lg:scale-100 scale-110 mt-4 absolute -translate-1/2 top-1/2 left-1/2 animate-bounces" alt="" />
            <img src={botBg} className="lg:w-70 w-60 h-auto" alt="" />
        </AnimationDiv>
        <AnimationDiv effect="fade-left" className="flex flex-col gap-6 lg:w-[720px] w-full">
            <h1 className="font-poppins-semibold text-white lg:text-[40px] text-[28px]"><span className="text-primary">Anti-Gambling</span> Assistant</h1>
            <p className="lg:text-[16px] text-[12px] font-poppins-regular text-white text-justify">OG-Bot adalah chatbot cerdas yang siap menemanimu kapan saja untuk memahami dan melawan bahaya judi online. Cukup dengan ngobrol seperti biasa, Masbro akan memberikan informasi, saran, dan edukasi seputar cara menghindari kecanduan judi digital dengan cara yang ringan dan mudah dipahami. Cocok banget buat kamu yang ingin belajar dengan santai tapi tetap bermanfaat.</p>
            <PrimaryButton Text="Chat Sekarang" Type="primary" LinkTo="/chatbot"/>
        </AnimationDiv>
    </SafeAreaView>
  )
}
