import SafeAreaView from '../../ui/SafeAreaView'
import PrimaryButton from '../../ui/PrimaryButton'
import UseCommunityData from '../../hooks/community/UseCommunityData'
import handleImage from '../../server/HandleImage';

export default function CommunityContent() {
    const { communities } = UseCommunityData();
    return (
        <SafeAreaView classNameParent={'h-auto'} classNameChild={'flex flex-col justify-center'}>
            <div className='flex flex-col pt-15 items-center'>
                <h1 className='font-poppins-semibold text-thirdtinary text-[35px]'>Komunitas Out Gamble</h1>
                <p className='font-poppins-medium text-[17px] text-center text-white px-15 pt-2'>Temukan komunitas yang mendukung kesadaran digital dan membantu masyarakat menjauhi bahaya judi online. Bergabunglah untuk belajar, berbagi, dan tumbuh bersama dalam lingkungan positif!</p>
                <div className='grid grid-cols-2 w-full mt-10 justify-between gap-x-10 gap-y-5'>
                    {communities.length > 0 ? (
                        communities.map((item, index) => (
                            <div key={index} className='flex flex-col bg-white rounded-[13px] items-center'>
                                <div className='flex relative w-full h-[250px] justify-center'>
                                    <img src={handleImage(item.image_thumbnail)} alt="" className='w-full h-[220px] object-cover rounded-[13px]' />
                                    <div className='absolute bottom-0 bg-white rounded-full'>
                                        <img src={handleImage(item.image_logo)} alt="" className='w-[90px] h-[90px] object-cover rounded-full m-[5px] border border-stroke' />
                                    </div>
                                </div>
                                <div className='flex flex-col items-center pt-1 pb-3'>
                                    <h1 className='font-poppins-bold text-fourthtinary text-[22px]'>{item.name}</h1>
                                    <p className='font-poppins-medium font-medium text-[11px] w-65 text-center text-gray-text mb-2.5'>{item.description}</p>
                                    <PrimaryButton Text='Gabung' Type='primary' Rounded={8} PaddingY={10} />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </SafeAreaView>
    )
}
