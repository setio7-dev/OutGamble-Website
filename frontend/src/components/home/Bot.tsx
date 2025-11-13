import SafeAreaView from "../../ui/SafeAreaView";
import bot from "/image/home/bot/bot.png";
import botBg from "/image/home/bot/bg-bot.png";
import PrimaryButton from "../../ui/PrimaryButton";
import AnimationDiv from "../../ui/AnimationDiv";

export default function Bot() {
  return (
    <SafeAreaView classNameChild={"justify-between flex-row"}>
        <AnimationDiv effect="fade-right" className="relative">
            <img src={bot} className="w-90 absolute -translate-1/2 top-1/2 left-1/2 animate-bounces" alt="" />
            <img src={botBg} className="w-76 h-auto" alt="" />
        </AnimationDiv>
        <AnimationDiv effect="fade-left" className="flex flex-col gap-6 w-[720px]">
            <h1 className="font-poppins-semibold text-white text-[40px]"><span className="text-primary">Anti-Gambling</span> Assistant</h1>
            <p className="text-[16px] font-poppins-regular text-white text-justify">OG-Bot adalah chatbot cerdas yang siap menemanimu kapan saja untuk memahami dan melawan bahaya judi online. Cukup dengan ngobrol seperti biasa, Masbro akan memberikan informasi, saran, dan edukasi seputar cara menghindari kecanduan judi digital dengan cara yang ringan dan mudah dipahami. Cocok banget buat kamu yang ingin belajar dengan santai tapi tetap bermanfaat.</p>
            <PrimaryButton Text="Chat Sekarang" Type="primary" LinkTo="/chatbot"/>
        </AnimationDiv>
    </SafeAreaView>
  )
}
