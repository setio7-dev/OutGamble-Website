import AnimationDiv from "../../ui/AnimationDiv";
import SafeAreaView from "../../ui/SafeAreaView";
import online from "/image/report/online.png";
import offline from "/image/report/offline.png";
import UseReportHook from "../../hooks/report/UseReportHook";
import ModernInput from "../../ui/ModernInput";
import { ModernOption, ModernSelect } from "../../ui/ModernSelect";
import PrimaryButton from "../../ui/PrimaryButton";

export default function ReportContent() {
    const { handleOnlineReport, handleOfflineReport, handleChangeSelected, handleChangeOnlineReport, handleChangeOfflineReport, onlineData, offlineData, thisOnline } = UseReportHook();
    return (
        <SafeAreaView classNameParent={"h-auto"} classNameChild={"justify-center flex-col mt-18"}>
            <AnimationDiv effect='fade-up' className="flex flex-col w-full justify-center items-center gap-2">
                <h1 className='font-poppins-semibold text-thirdtinary lg:text-[35px] text-[26px]'>Laporkan Aktivitas Judi</h1>
                <p className='font-poppins-medium lg:text-[17px] text-[14px] text-center text-white lg:px-15 px-0 pt-2'>Bantu kami melindungi masyarakat dengan melaporkan situs atau tempat judi yang Anda temukan. Laporan Anda akan bersifat rahasia dan membantu mencegah penyebaran judi ilegal.</p>
            </AnimationDiv>
            <AnimationDiv effect="fade-up" className="flex lg:flex-row flex-col items-center w-full justify-between mt-12 gap-12">
                <div onClick={() => handleChangeSelected(true)} className={`w-full hover:scale-95 hover:backdrop-opacity-95 duration-300 cursor-pointer p-8 rounded-2xl ${thisOnline ? "bg-primary/20 border-primary" : "bg-transparent border-[#454545]"} border-2 flex flex-col justify-center items-center gap-2`}>
                    <img src={online} className="w-18 h-auto" alt="" />
                    <h1 className="text-[24px] text-center font-poppins-semibold text-white">Judi Online</h1>
                    <p className="font-poppins-regular text-center text-[14px] text-white">Situs web, aplikasi, atau link judi online</p>
                </div>
                <div onClick={() => handleChangeSelected(false)} className={`w-full hover:scale-95 hover:backdrop-opacity-95 duration-300 cursor-pointer p-8 rounded-2xl ${!thisOnline ? "bg-primary/20 border-primary" : "bg-transparent border-[#454545]"} border-2 flex flex-col justify-center items-center gap-2`}>
                    <img src={offline} className="w-18 h-auto" alt="" />
                    <h1 className="text-[24px] text-center font-poppins-semibold text-white">Judi Offline</h1>
                    <p className="font-poppins-regular text-center text-[14px] text-white">Tempat fisik atau lokasi judi</p>
                </div>
            </AnimationDiv>
            {thisOnline ? (
                <AnimationDiv effect="fade-up" className="w-full mt-8 flex flex-col gap-8">
                    <ModernInput name="url_link" value={onlineData.url_link} onChange={handleChangeOnlineReport} themeInput="dark" type="input" placeholder="https://contoh-situs-judi.com" title="URL / Link Situs Judi" />
                    <ModernSelect name="category" value={onlineData.category} onChange={handleChangeOnlineReport} themeInput="dark" title="Jenis Platform">
                        <ModernOption disabled={true} value="" text="Pilih Jenis Platform" />
                        <ModernOption text="Website" />
                        <ModernOption text="Media Sosial" />
                    </ModernSelect>
                    <ModernInput name="description" value={onlineData.description} onChange={handleChangeOnlineReport} themeInput="dark" type="textarea" placeholder="Jelaskan Secara detail aktivitas judi yang anda temukan, kapan anda menemukan, dan informasi lain yang relavan..." title="Deskripsi Lengkap" />
                    <ModernInput name="proof" onChange={handleChangeOnlineReport} themeInput="dark" type="file" typeInput="file" title="Unggah Bukti (Foto/Screenshot)" placeholder="" />
                    <ModernInput name="contact" value={onlineData.contact} onChange={handleChangeOnlineReport} themeInput="dark" type="input" placeholder="Email atau nomor telepon untuk konfirmasi" title="Kontak Anda" />
                    <div className="flex justify-center">
                        <PrimaryButton onClick={handleOnlineReport} Text="Kirim Laporan" TextColor="black" Rounded={10} PaddingX={80} PaddingY={14} />
                    </div>
                </AnimationDiv>
            ) : (
                <AnimationDiv effect="fade-up" className="w-full mt-8 flex flex-col gap-8">
                    <ModernInput name="place" value={offlineData.place} onChange={handleChangeOfflineReport} themeInput="dark" type="input" placeholder="Nama tempat atau bangunan" title="Nama Tempat" />
                    <ModernInput name="address" value={offlineData.address} onChange={handleChangeOfflineReport} themeInput="dark" type="input" placeholder="Jalan, Kelurahan, Kecamatan, Kota" title="Alamat Lengkap" />
                    <ModernSelect name="category_place" value={offlineData.category_place} onChange={handleChangeOfflineReport} themeInput="dark" title="Jenis Tempat">
                        <ModernOption disabled={true} value="" text="Pilih Jenis Tempat" />
                        <ModernOption text="Pemukiman Warga" />
                        <ModernOption text="Pasar" />
                        <ModernOption text="Kasino" />
                    </ModernSelect>
                    <ModernInput name="coordinates" value={offlineData.coordinates} onChange={handleChangeOfflineReport} disabled={true} themeInput="dark" type="input" placeholder="Contoh -6.2000000, 106.81666" title="Koordinat" />
                    <ModernInput name="description" value={offlineData.description} onChange={handleChangeOfflineReport} themeInput="dark" type="textarea" placeholder="Jelaskan Secara detail aktivitas judi yang anda temukan, kapan anda menemukan, dan informasi lain yang relavan..." title="Deskripsi Lengkap" />
                    <ModernInput name="proof" onChange={handleChangeOfflineReport} themeInput="dark" type="file" typeInput="file" title="Unggah Bukti (Foto/Screenshot)" placeholder="" />
                    <ModernInput name="contact" value={offlineData.contact} onChange={handleChangeOfflineReport} themeInput="dark" type="input" placeholder="Email atau nomor telepon untuk konfirmasi" title="Kontak Anda" />
                    <div className="flex justify-center">
                        <PrimaryButton onClick={handleOfflineReport} Text="Kirim Laporan" TextColor="black" Rounded={10} PaddingX={80} PaddingY={14} />
                    </div>
                </AnimationDiv>
            )}
            <AnimationDiv effect="fade-up" className="flex mt-18 flex-col justify-center items-start border-2 border-primary p-6 rounded-lg bg-[#C0FFDB]/20 gap-2">
              <h1 className="text-primary font-poppins-semibold text-[22px]">Privasi & Keamanan</h1>
              <p className="text-[14px] text-justify font-poppins-regular text-white">Semua laporan akan diperlakukan secara rahasia. Identitas pelapor dilindungi sesuai dengan kebijakan privasi kami. Data yang Anda berikan hanya akan digunakan untuk keperluan investigasi dan penegakan hukum terhadap aktivitas judi ilegal.</p>
            </AnimationDiv>
        </SafeAreaView>
    )
}
