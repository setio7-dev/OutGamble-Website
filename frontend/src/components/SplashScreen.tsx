import AnimationDiv from "../ui/AnimationDiv";
import logo from "/image/logo/logo.png";
import UseSplashHook from "../hooks/splash/UseSplashHook";

export default function SplashScreen() {    
    const { isPlay } = UseSplashHook();
    return (
        <div className={`w-full overflow-y-hidden duration-500 z-200 bg-white flex flex-col justify-center items-center fixed ${isPlay ? "h-0" : "h-screen"}`}>
            <AnimationDiv effect="fade-up">
                <img src={logo} className="w-40 h-auto animate-bounces" alt="" />
            </AnimationDiv>
        </div>
    )
}
