import backCircle from "/image/home/welcome/back-circle.png";
import circle1 from "/image/home/welcome/circle1.png";
import circle2 from "/image/home/welcome/circle2.png";
import kutip from "/image/home/welcome/kutip.png";
import person from "/image/home/welcome/person.png";
import stars from "/image/home/welcome/stars.png";
import textLine from "/image/home/welcome/text-line.png";
import PrimaryButton from "../../ui/PrimaryButton";
import SafeAreaView from "../../ui/SafeAreaView";
import AnimationDiv from "../../ui/AnimationDiv";
import UseShowAuth from "../../hooks/home/UseShowAuth";
import ModernInput from "../../ui/ModernInput";
import UseAuth from "../../hooks/auth/UseAuth";
import { UseAuthHookContext } from "../../context/UseAuthContext";

export default function Welcome() {
  const { showAuth, handleClose, handleOpen, handleChangePopup, thisPopup } = UseShowAuth();
  const { handleChange, handleLogin, handleRegister, username, fullname, password, handleLogout } = UseAuth();
  const { user } = UseAuthHookContext();
  return (
    <div className='flex justify-center items-center h-screen bg-black overflow-y-hidden relative'>
      {showAuth && (
        <div className="w-full h-full bg-black/40 absolute flex justify-center items-center z-120 animate-fade">
          <div className="bg-white p-6 rounded-lg flex flex-col items-center justify-center w-100 relative animate-pop">
            <p className="font-poppins-semibold text-primary text-[16px] cursor-pointer top-4 right-4 absolute" onClick={handleClose}>X</p>
            <div className="flex flex-col gap-2 items-center">
              <h1 className="text-primary font-poppins-semibold text-[30px]">
                {thisPopup ? 'Daftar' : 'Masuk'} Akun
              </h1>
              <p className="font-poppins-medium text-black text-[14px]">
                Silahkan Masukkan Data Anda Secara Benar!
              </p>
            </div>
            <div className="flex flex-col gap-10 w-full mt-4">
              <div className="flex flex-col gap-2 w-full">
                {thisPopup && (
                  <ModernInput name="fullname" value={fullname} onChange={handleChange} themeInput="light" placeholder="Masukkan nama lengkap anda..." />
                )}
                <ModernInput name="username" value={username} onChange={handleChange} themeInput="light" placeholder="Masukkan nama pengguna anda..." />
                <ModernInput name="password" value={password} onChange={handleChange} themeInput="light" placeholder="Masukkan kata sandi anda..." typeInput="password" />
              </div>
              <div className="w-full flex-col flex gap-6 items-center">
                {thisPopup ? (
                  <PrimaryButton onClick={handleRegister} Type="primary" Text="Daftar" Rounded={10} Width="full" />
                ) : (
                  <PrimaryButton onClick={handleLogin} Type="primary" Text="Masuk" Rounded={10} Width="full" />
                )}
                <p className="font-poppins-medium text-black text-[14px]">
                  {thisPopup ? 'Sudah Punya Akun? ' : 'Belum Punya Akun? '}
                  <span className="text-primary cursor-pointer" onClick={handleChangePopup}>
                    {thisPopup ? 'Masuk' : 'Daftar'} Sekarang
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <SafeAreaView classNameParent={'bg-white rounded-b-[120px] w-full h-full'} paddingY={0} classNameChild={'flex-col justify-end h-full'}>
        <div className="w-full flex gap-6 flex-col">
          <AnimationDiv className="relative w-full" effect="fade-up">
            {user?.fullname && (
              <div className="absolute right-0 -top-4 animate-bounces">
                <PrimaryButton Text={"Hai! " + user?.fullname} Rounded={10} Type="primary"/>
              </div>
            )}

            <img src={circle1} alt="" className="w-22 h-auto animate-autoRotates absolute left-14 -top-2" />
            <h1 className="font-poppins-semibold text-[42px] text-center">Memberdayakan Generasi <br />Cerdas untuk <span className="text-primary">Menjauhi Judi Online</span></h1>
            <img src={textLine} alt="" className="w-[46px] animate-rotates h-auto absolute right-28 bottom-0" />
          </AnimationDiv>
          <div className="flex justify-between">            
            <AnimationDiv className="w-[380px] flex gap-2" effect="fade-right" delay={200}>
              <img src={kutip} alt="" className="w-6 h-6 -mt-4" />
              <div className="flex flex-col gap-6">
                <p className="font-poppins-regular text-[14px] text-justify text-gray">Out Gamble hadir sebagai platform edukatif yang membantu pelajar dan masyarakat memahami bahaya judi online. Melalui informasi, tips, dan solusi digital yang interaktif, kami berkomitmen membangun generasi sadar dan bebas dari kecanduan judi.</p>
                <PrimaryButton Type="primary" Text="Cari Tips & Saran" />
              </div>
            </AnimationDiv>
            <AnimationDiv className="relative align-bottom" effect="zoom-in" delay={600}>
              <div className="absolute bottom-14 z-10 bg-[#3B3B3B70] p-4 rounded-full flex justify-center items-center gap-4 w-[440px] -translate-x-1/2 left-1/2 backdrop:backdrop-blur-2xl animate-bounces">
                <a href="#about">
                  <PrimaryButton Text="Mulai Sekarang" Type="secondary" />
                </a>
                {user?.fullname ? (
                  <button onClick={handleLogout} className="bg-transparent hover:scale-95 hover:opacity-90 duration-500 rounded-full font-poppins-regular text-[14px] cursor-pointer border-2 border-white px-[30px] py-3.5 text-white">
                    Mau Keluar?
                  </button>
                ) : (
                  <button onClick={handleOpen} className="bg-transparent hover:scale-95 hover:opacity-90 duration-500 rounded-full font-poppins-regular text-[14px] cursor-pointer border-2 border-white px-[30px] py-3.5 text-white">
                    Daftar Sekarang
                  </button>
                )}
              </div>
              <img src={person} className="w-[300px] h-auto relative z-1" alt="" />
              <img src={backCircle} className="scale-[1.1] absolute z-0 bottom-0 animate-bounces" alt="" />
            </AnimationDiv>
            <AnimationDiv className="w-[340px] flex flex-col justify-between pb-6" effect="fade-left" delay={200}>
              <div className=""></div>
              <div className="flex flex-col items-end gap-4">
                <img src={stars} className="w-[120px] h-auto" alt="" />
                <div className="text-right">
                  <h2 className="text-black font-poppins-semibold text-[32px]">5+ Tahun</h2>
                  <p className="text-black text-[16px] font-poppins-medium">Pengalaman Edukasi Digital</p>
                </div>
                <img src={circle2} className="w-[140px] animate-autoRotates mt-10 h-auto" alt="" />
              </div>
            </AnimationDiv>
          </div>
        </div>
      </SafeAreaView>
    </div>
  )
}
