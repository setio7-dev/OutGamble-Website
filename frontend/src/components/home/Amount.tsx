import SafeAreaView from '../../ui/SafeAreaView'
import AnimationDiv from '../../ui/AnimationDiv';
import UseScrollAnimation from '../../hooks/home/useScrollAnimation';

export default function Amount() {
  const { visitor, campanye, article, user } = UseScrollAnimation();
  return (
    <AnimationDiv effect='fade-up'>
      <SafeAreaView classNameParent={"mt-12"} classNameChild={"bg-gray-dark flex-row h-auto py-6 px-20 rounded-[50px] justify-between"}>
        <div className="flex-col justify-center flex items-center text-center gap-2 cursor-pointer transition-all duration-300 hover:scale-[1.1] group">
          <h1 className='font-poppins-semibold text-[32px] text-white group-hover:text-primary transition-all duration-300'>{visitor.toLocaleString('id-ID')} <span className='text-primary'>+</span></h1>
          <p className='text-white font-poppins-regular text-[14px] group-hover:text-primary transition-all duration-300'>Pengunjung Teredukasi</p>
        </div>
        <div className="flex-col justify-center flex items-center text-center gap-2 cursor-pointer hover:scale-[1.1] transition-all duration-300 group">
          <h1 className='font-poppins-semibold text-[32px] text-white group-hover:text-primary transition-all duration-300'>{campanye} <span className='text-primary'>+</span></h1>
          <p className='text-white font-poppins-regular text-[14px] group-hover:text-primary transition-all duration-300'>Tahun Kampanye Anti Judi</p>
        </div>
        <div className="flex-col justify-center flex items-center text-center gap-2 cursor-pointer hover:scale-[1.1] transition-all duration-300 group">
          <h1 className='font-poppins-semibold text-[32px] text-white group-hover:text-primary transition-all duration-300'>{article} <span className='text-primary'>+</span></h1>
          <p className='text-white font-poppins-regular text-[14px] group-hover:text-primary transition-all duration-300'>Artikel & Konten Edukasi</p>
        </div>
        <div className="flex-col justify-center flex items-center text-center gap-2 cursor-pointer hover:scale-[1.1] transition-all duration-300 group">
          <h1 className='font-poppins-semibold text-[32px] text-white group-hover:text-primary transition-all duration-300'>{user} <span className='text-primary'>%</span></h1>
          <p className='text-white font-poppins-regular text-[14px] group-hover:text-primary transition-all duration-300'>Tingkat Kepuasan Pengguna</p>
        </div>
      </SafeAreaView>
    </AnimationDiv>
  )
}
