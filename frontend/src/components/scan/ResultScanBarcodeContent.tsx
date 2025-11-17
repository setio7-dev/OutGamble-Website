import AnimationDiv from "../../ui/AnimationDiv";
import PrimaryButton from "../../ui/PrimaryButton";
import SafeAreaView from "../../ui/SafeAreaView";
import danger from "/image/scan-qr/danger-result.png";
import safe from "/image/scan-qr/safe-result.png";
import warning from "/image/scan-qr/warning.png";

export default function ResultScanBarcodeContent() {
  return (
    <SafeAreaView classNameParent={"h-auto"} classNameChild={"justify-center flex-col mt-18"}>
        <AnimationDiv effect="fade-up" className="flex flex-col items-center gap-2">
            <h1 className="text-primary font-poppins-semibold text-center text-[36px]">Hasil Deteksi</h1>
            <p className="font-poppins-medium text-[16px] text-center text-white">Hasil analisis QR Anda telah diproses. <br /> Berikut informasi keamanan dari tautan yang terdeteksi.</p>
        </AnimationDiv>
        <div className="flex flex-col w-full gap-4 py-8 px-12 rounded-xl border-2 border-red mt-12 shadow-[0_0_15px_3px_var(--color-red)] hover:shadow-[0_0_25px_6px_var(--color-red)] transition">
          <div className="flex flex-col gap-2 w-full items-center justify-center">
            <img src={danger} className="w-20 h-auto mb-4" alt="" />
            <h1 className="text-[24px] text-red font-poppins-semibold">Link Berbahaya Terdeteksi!</h1>
            <p className="text-[16px] text-white font-poppins-medium">Link ini teridentifikasi sebagai situs judi online berbahaya</p>
            <div className="w-full flex justify-between bg-[rgba(255,204,204,0.15)] rounded-lg p-6 mt-6">
              <p className="text-white font-poppins-regular text-[16px]">https://sharefile.xyz/file.jpg</p>
              <p></p>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center gap-4 mt-6 items-center">
            <div className="w-full flex justify-between bg-[rgba(255,204,204,0.15)] rounded-lg p-4">
              <h1 className="text-primary font-poppins-semibold text-[18px]">Status Keamanan</h1>
              <p className="font-poppins-medium text-red text-[20px]">BERBAHAYA</p>
            </div>
            <div className="w-full flex justify-between bg-[rgba(255,204,204,0.15)] rounded-lg p-4">
              <h1 className="text-primary font-poppins-semibold text-[18px]">Kategori</h1>
              <p className="font-poppins-medium text-white text-[16px]">Situs Judi Online</p>
            </div>
            <div className="w-full flex justify-between bg-[rgba(255,204,204,0.15)] rounded-lg p-4">
              <h1 className="text-primary font-poppins-semibold text-[18px]">Tingkat Resiko</h1>
              <p className="font-poppins-medium text-red text-[20px]">TINGGI</p>
            </div>
            <div className="w-full flex justify-between bg-[rgba(255,204,204,0.15)] rounded-lg p-4">
              <h1 className="text-primary font-poppins-semibold text-[18px]">Waktu Deteksi</h1>
              <p className="font-poppins-medium text-white text-[16px]">04 November 2025 pukul 22.03</p>
            </div>
          </div>
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
          <div className="flex w-full justify-between items-center mt-6">
            <button className="bg-red/20 px-8 py-3.5 hover:scale-95 hover:backdrop-opacity-95 duration-500 cursor-pointer rounded-lg font-poppins-medium text-red text-[14px] border-2 border-red">
              Laporkan Link
            </button>
            <PrimaryButton Text="Scan Link Lain" TextColor="#000000" Type="secondary" Rounded={8} PaddingX={40}/>
          </div>
        </div>
    </SafeAreaView>
  )
}
