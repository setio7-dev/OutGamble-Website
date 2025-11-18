import UseScanQRHook from "../../hooks/scan-qr/UseScanQRHook";
import AnimationDiv from "../../ui/AnimationDiv";
import ModernInput from "../../ui/ModernInput";
import PrimaryButton from "../../ui/PrimaryButton";
import SafeAreaView from "../../ui/SafeAreaView";

export default function ScanBarcodeContent() {
    const { handleChange, link, handleScan } = UseScanQRHook();
  return (
    <SafeAreaView classNameParent={"h-auto"} classNameChild={"justify-center flex-col mt-18"}>
        <AnimationDiv effect="fade-up" className="flex flex-col items-center gap-2">
            <h1 className="text-primary font-poppins-semibold text-center text-[36px]">Pindai QR Aman</h1>
            <p className="font-poppins-medium text-[16px] text-center text-white">Periksa keamanan QR code sebelum dibuka. <br /> Deteksi otomatis apakah link mengarah ke situs judi online atau berbahaya.</p>
        </AnimationDiv>
        <AnimationDiv effect="fade-up" delay={400} className="flex w-full flex-col gap-4 mt-10">
            <ModernInput name="image" onChange={handleChange} type="file" typeInput="file" title="Unggah Media" desc="Tambahkan Foto Anda didalam Input ini" placeholder=""/>
            <div className="w-full flex justify-center items-center gap-8 my-6">
                <div className="bg-[#E7E7E7] w-full h-0.5"></div>
                <h1 className="text-primary font-poppins-semibold text-[20px]">Atau</h1>
                <div className="bg-[#E7E7E7] w-full h-0.5"></div>
            </div>
            <ModernInput name="link" value={link} onChange={handleChange} type="input" typeInput="text" title="Masukkan tautan QR di bawah ini" placeholder="Link Website..."/>
            <div className="w-full flex justify-center mt-8">
                <PrimaryButton onClick={handleScan} Text="Pindai" Rounded={12} Type="primary" PaddingX={60} />
            </div>
        </AnimationDiv>
    </SafeAreaView>
  )
}
