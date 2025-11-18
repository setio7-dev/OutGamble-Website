import { useNavigate } from "react-router-dom";
import UseScanQRHook from "../../hooks/scan-qr/UseScanQRHook";
import AnimationDiv from "../../ui/AnimationDiv";
import PrimaryButton from "../../ui/PrimaryButton";
import SafeAreaView from "../../ui/SafeAreaView";
import { DateNow } from "../../utils/DateNow";
import danger from "/image/scan-qr/danger-result.png";
import safe from "/image/scan-qr/safe-result.png";
import warning from "/image/scan-qr/warning.png";

export default function ResultScanBarcodeContent() {
  const { data } = UseScanQRHook();
  const navigate = useNavigate();
  return (
    <SafeAreaView classNameParent={"h-auto"} classNameChild={"justify-center flex-col mt-18"}>
      <AnimationDiv effect="fade-up" className="flex flex-col items-center gap-2">
        <h1 className="text-primary font-poppins-semibold text-center text-[36px]">Hasil Deteksi</h1>
        <p className="font-poppins-medium text-[16px] text-center text-white">Hasil analisis QR Anda telah diproses. <br /> Berikut informasi keamanan dari tautan yang terdeteksi.</p>
      </AnimationDiv>
      <AnimationDiv effect="fade-up" className={`flex flex-col w-full gap-4 py-8 px-12 rounded-xl border-2 mt-12 transition ${data?.category === "terlarang" ? "border-red shadow-[0_0_15px_3px_var(--color-red)] hover:shadow-[0_0_25px_6px_var(--color-red)]" : "border-primary shadow-[0_0_15px_3px_var(--color-primary)] hover:shadow-[0_0_25px_6px_var(--color-primary)]"}`}>
        <div className="flex flex-col gap-2 w-full items-center justify-center">
          {data?.category === "terlarang" ? (
            <div className="flex flex-col gap-2 items-center">
              <img src={danger} className="w-20 h-auto mb-4" alt="" />
              <h1 className="text-[24px] text-red font-poppins-semibold">Link Berbahaya Terdeteksi!</h1>
              <p className="text-[16px] text-white font-poppins-medium">Link ini teridentifikasi sebagai situs judi online berbahaya</p>
            </div>
          ) : (
            <div className="flex flex-col gap-2 items-center">
              <img src={safe} className="w-20 h-auto mb-4" alt="" />
              <h1 className="text-[24px] text-primary font-poppins-semibold">Link Tidak Berbahaya!</h1>
              <p className="text-[16px] text-white font-poppins-medium">Link ini tidak terdeteksi sebagai situs berbahaya</p>
            </div>
          )}
          <div className="w-full flex justify-between bg-[rgba(255,204,204,0.15)] rounded-lg p-6 mt-6">
            <p className="text-white font-poppins-regular text-[16px]">{data?.link}</p>
            <p></p>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center gap-4 mt-6 items-center">
          <div className="w-full flex justify-between bg-[rgba(255,204,204,0.15)] rounded-lg p-4">
            <h1 className="text-primary font-poppins-semibold text-[18px]">Status Keamanan</h1>
            <p className={`font-poppins-medium text-[20px] ${data?.category === "terlarang" ? "text-red" : "text-primary"}`}>{data?.category == "terlarang" ? "BERBAHAYA" : "AMAN"}</p>
          </div>
          <div className="w-full flex justify-between bg-[rgba(255,204,204,0.15)] rounded-lg p-4">
            <h1 className="text-primary font-poppins-semibold text-[18px]">Kategori</h1>
            <p className="font-poppins-medium text-white text-[16px]">{data?.category === "terlarang" ? "Situs Judi Online" : "Situs Normanl"}</p>
          </div>
          <div className="w-full flex justify-between bg-[rgba(255,204,204,0.15)] rounded-lg p-4">
            <h1 className="text-primary font-poppins-semibold text-[18px]">Tingkat Resiko</h1>
            <p className={`font-poppins-medium text-[20px] ${data?.category === "terlarang" ? "text-red" : "text-primary"}`}>{data?.category == "terlarang" ? "TINGKAT" : "RENDAH"}</p>
          </div>
          <div className="w-full flex justify-between bg-[rgba(255,204,204,0.15)] rounded-lg p-4">
            <h1 className="text-primary font-poppins-semibold text-[18px]">Waktu Deteksi</h1>
            <p className="font-poppins-medium text-white text-[16px]">{DateNow()}</p>
          </div>
        </div>
        {data?.category === "terlarang" && (
          <div className="flex pl-6 flex-col w-full h-full p-4 rounded-lg bg-red/20 relative mt-6">
            <div className="w-1 top-0 h-full bg-red absolute left-0 rounded-l-lg"></div>
            <h1 className="text-red font-poppins-semibold text-[18px]">Peringatan Keamanan:</h1>
            <div className="flex flex-col gap-2 w-full mt-4">
              <div className="flex items-center gap-2">
                <img src={warning} className="w-5 h-auto" alt="" />
                <p className="text-[12px] text-white font-poppins-regular">Domain tercatat dalam database situs judi online ilegal</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={warning} className="w-5 h-auto" alt="" />
                <p className="text-[12px] text-white font-poppins-regular">Mengandung konten yang melanggar hukum di Indonesia</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={warning} className="w-5 h-auto" alt="" />
                <p className="text-[12px] text-white font-poppins-regular">Berisiko menyebabkan kerugian finansial</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={warning} className="w-5 h-auto" alt="" />
                <p className="text-[12px] text-white font-poppins-regular">Berpotensi mencuri data pribadi pengguna</p>
              </div>
            </div>
          </div>
        )}
        <div className="flex w-full justify-between items-center mt-6">
          {data?.category === "terlarang" && (
            <button onClick={() => navigate("/report")} className="bg-red/20 px-8 py-3.5 hover:scale-95 hover:backdrop-opacity-95 duration-500 cursor-pointer rounded-lg font-poppins-medium text-red text-[14px] border-2 border-red">
              Laporkan Link
            </button>
          )}
          <PrimaryButton Text="Scan Link Lain" LinkTo="/scan-qr" TextColor="#000000" Type="secondary" Rounded={8} PaddingX={40} />
        </div>
      </AnimationDiv>
      <AnimationDiv effect="fade-up" className="mt-12 flex flex-col gap-8">
        <div className="flex flex-col justify-center items-start border-2 border-primary p-6 rounded-lg bg-[#C0FFDB]/20 gap-2">
          <h1 className="text-primary font-poppins-semibold text-[24px]">Apa yang Harus Dilakukan?</h1>
          <p className="text-[16px] text-justify font-poppins-regular text-white">Jangan mengakses link tersebut atau membagikannya ke orang lain. Link ini terdeteksi sebagai situs berbahaya yang dapat merugikan Anda secara finansial dan mental. Jika Anda menemukan link ini dari orang lain, laporkan kepada kami untuk membantu melindungi masyarakat lainnya.</p>
        </div>
        <div className="flex flex-col justify-center items-start border-2 border-primary p-6 rounded-lg bg-[#C0FFDB]/20 gap-2">
          <h1 className="text-primary font-poppins-semibold text-[24px]">Butuh Support?</h1>
          <p className="text-[16px] text-justify font-poppins-regular text-white">Jika Anda atau orang yang Anda kenal mengalami masalah dengan judi online butuh support, gabung ke layanan komunitas OutGamble. Kami siap membantu Anda keluar dari kecanduan judi dan kembali ke kehidupan yang lebih baik.</p>
        </div>
      </AnimationDiv>
    </SafeAreaView>
  )
}
