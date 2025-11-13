import PrimaryButton from '../../ui/PrimaryButton'
import SafeAreaView from '../../ui/SafeAreaView'
import { askData } from '../../data/homeData';
import dropdown from "/image/home/ask/dropdown.png";
import UseAccordion from '../../hooks/home/UseAccordion';
import AnimationDiv from '../../ui/AnimationDiv';

export default function Ask() {
 const { isOpen, handleOpen, selectedData } = UseAccordion();
  return (
    <SafeAreaView classNameParent={"h-auto py-16"} classNameChild={"justify-between"}>
        <AnimationDiv effect='fade-right' className="flex flex-col gap-4 items-start w-140">
            <PrimaryButton Text='Pertanyaan yang sering diajukan' Type='secondary' Rounded={12}/>
            <h1 className='font-poppins-semibold text-white text-[36px]'>Pertanyaan yang Sering <br /><span className='text-primary'>Diajukan</span></h1>
            <p className='font-poppins-regular text-white text-[14px] text-justify'>Masih bingung tentang bahaya judi online? Tenang saja, kami sudah merangkum beberapa pertanyaan yang paling sering ditanyakan supaya kamu bisa lebih paham dan tahu cara melindungi diri dari pengaruh judi online.</p>
        </AnimationDiv>
        <div className="flex flex-col gap-4 items-center">
            {askData.map((item, index) => (
                <AnimationDiv key={index} effect='fade-left' delay={item.id * 200}>
                    <div className={`overflow-y-hidden rounded-lg duration-500 transition-all ${selectedData == item.id && isOpen ? 'max-h-96' : 'max-h-20'}`}>
                        <div className="bg-primary w-[500px] p-6 flex-col gap-6 flex">
                            <div className="flex-row items-center justify-between flex">
                                <h1 className='text-white font-poppins-semibold text-[18px]'>{item.title}</h1>
                                <img src={dropdown} onClick={() => handleOpen(item.id)} className={`w-8 h-8 cursor-pointer duration-500 ${selectedData == item.id && isOpen ? 'rotate-180' : ' rotate-0'}`} alt="" />
                            </div>
                            <p className='font-poppins-medium text-[12px] text-white text-justify'>{item.text}</p>
                        </div>  
                    </div>
                </AnimationDiv>
            ))}
        </div>
    </SafeAreaView>
  )
}
