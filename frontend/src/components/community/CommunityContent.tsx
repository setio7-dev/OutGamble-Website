import SafeAreaView from '../../ui/SafeAreaView'
import PrimaryButton from '../../ui/PrimaryButton'
import UseCommunityData from '../../hooks/community/UseCommunityData'
import handleImage from '../../server/HandleImage';
import LoadingSpinner from '../../ui/LoadingSpinner';
import AnimationDiv from '../../ui/AnimationDiv';

export default function CommunityContent() {
    const { communities } = UseCommunityData();
    return (
        <SafeAreaView classNameParent={'h-auto'} classNameChild={'flex flex-col justify-center'}>
            <div className='flex flex-col mt-18 items-center'>
                <AnimationDiv effect='fade-up' className="flex flex-col w-full justify-center items-center gap-2">
                    <h1 className='font-poppins-semibold text-thirdtinary text-[35px]'>Komunitas Out Gamble</h1>
                    <p className='font-poppins-medium text-[17px] text-center text-white px-15 pt-2'>Temukan komunitas yang mendukung kesadaran digital dan membantu masyarakat menjauhi bahaya judi online. Bergabunglah untuk belajar, berbagi, dan tumbuh bersama dalam lingkungan positif!</p>
                </AnimationDiv>
                {communities.length > 0 ? (
                    <div className='grid grid-cols-2 w-full mt-12 justify-between gap-x-10 gap-y-5'>
                        {communities.map((item, index) => (
                            <AnimationDiv effect='fade-up' delay={item.id * 200} key={index} className='flex flex-col bg-white rounded-[13px] pb-10 items-center'>
                                <div className='flex relative w-full h-[250px] justify-center'>
                                    <img src={handleImage(item.image_thumbnail)} alt="" className='w-full h-[220px] object-cover rounded-[13px]' />
                                    <div className='absolute bottom-0 bg-white rounded-full'>
                                        <img src={handleImage(item.image_logo)} alt="" className='w-[90px] h-[90px] object-cover rounded-full m-[5px] border border-stroke' />
                                    </div>
                                </div>
                                <div className='flex flex-col items-center mt-4 px-12'>
                                    <div className="flex flex-col items-center gap-2">
                                        <h1 className='font-poppins-bold text-fourthtinary text-[26px]'>{item.name}</h1>
                                        <p className='font-poppins-medium font-medium mb-4 text-[14px] text-center text-gray-text'>{item.description}</p>
                                    </div>
                                    <PrimaryButton target={true} LinkTo={item.link} Text='Gabung' Type='primary' Rounded={8} PaddingY={12} />
                                </div>
                            </AnimationDiv>
                        ))}
                    </div>
                ) : (
                    <div className='flex flex-col justify-center items-center gap-4 w-full h-screen'>
                        <LoadingSpinner />
                        <h1 className='font-poppins-semibold text-primary text-[24px]'>Memuat Data...</h1>
                    </div>
                )}
            </div>
        </SafeAreaView>
    )
}