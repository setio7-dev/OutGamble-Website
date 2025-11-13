import { useEffect, useState } from 'react';
import { suggestionData } from '../data/chatbotData';
import SafeAreaView from '../ui/SafeAreaView'
import arrow from "/image/chatbot/arrow.png";
import file from "/image/chatbot/file.png";
import mic from "/image/chatbot/mic.png";
import send from "/image/chatbot/send.png";
import logo from "/image/logo/logo.png"
import AnimationDiv from '../ui/AnimationDiv';
import AOS from "aos";
import { GoogleGenAI } from '@google/genai';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../ui/LoadingSpinner';
import ReactMarkdown from "react-markdown";

export default function Chatbot() {
    const [message, setMessage] = useState<chatbotMessage[]>([]);
    const [userMessage, setUserMessage] = useState<string>("");
    const ai = new GoogleGenAI({'apiKey' : 'AIzaSyDFzxHyclWxlYZlqygMich7NRNVB_cWM-8'});
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleMessage = async(suggest: string) => {
        try {
            setIsLoading(true);
            setMessage((prev) => {
                const newUser = {
                    user: "user",
                    message: userMessage + suggest
                }

                return [...prev, newUser];
            });

            setUserMessage("");
            const prompt = `
                Kamu adalah Out Gamble, asisten virtual dari website edukasi anti-judi bernama "Out Gamble".
                Tujuanmu adalah memberikan informasi, edukasi, dan pencegahan terkait bahaya judi online dan offline.  
                Kamu dapat menjelaskan tentang:
                - Dampak negatif perjudian terhadap individu dan masyarakat
                - Cara menghindari atau berhenti dari kebiasaan berjudi
                - Fakta hukum terkait perjudian
                - Upaya edukatif dan solusi positif untuk mengganti perilaku judi
                        
                Aturan penting:
                1. Kamu **tidak boleh** memberikan informasi yang tidak berkaitan dengan topik edukasi judi.  
                2. Jika pengguna mengajukan pertanyaan yang tidak relevan dengan edukasi judi, jawablah dengan kalimat:  
                   **"Maaf saya tidak bisa menjawab pertanyaan itu."**
                3. Gunakan bahasa Indonesia yang jelas, sopan, dan edukatif.
                4. Jangan pernah memberikan cara berjudi, situs judi, atau strategi bermain.
                5. Gaya bicaramu harus netral, informatif, dan berorientasi pada pencegahan.
                        
                Kamu adalah bagian resmi dari situs edukasi "Out Gamble" yang memiliki misi untuk meningkatkan kesadaran masyarakat terhadap bahaya judi.
            `
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: [
                    {
                        role: 'model',
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    },
                    {
                        role: 'user',
                        parts: [
                            {
                                text: userMessage + suggest
                            }
                        ]
                    },
                ],
            });

            setMessage((prev) => {
                const newUser = {
                    user: "bot",
                    message: String(response.text)
                }

                return [...prev, newUser];
            });
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        AOS.init();
    }, []);
  return (
    <SafeAreaView classNameParent={'h-[100vh]'} paddingY={28} classNameChild={'justify-start flex-col relative'}>
        <div className="flex justify-between w-full items-center bg-black pb-6">
            <Link to="/">
                <div className="flex items-center gap-5 cursor-pointer">
                    <img src={arrow} className='w-5 h-auto' alt="" />
                    <h1 className='text-white font-poppins-semibold text-[18px]'>Kembali</h1>
                </div>
            </Link>
            <div className=""></div>
        </div>
        {message.length > 0 ? (
            <div className="max-h-[70vh] no-scrollbar overflow-y-auto pb-12 w-full">
                <div className="flex flex-col gap-10 w-full">
                    {message.map((item, index) => (
                        <div className={`flex flex-col gap-4 w-full ${item.user == "bot" ? 'items-start' : 'items-end'}`} key={index}>
                            <h1 className={`font-poppins-semibold text-[22px] ${item.user == "bot" ? 'text-primary' : 'text-white'}`}>Out Gamble Bot</h1>
                            {item.user == "user" ? (
                                <div className="py-2 px-4 rounded-full bg-primary">
                                    <p className='font-poppins-medium text-justify text-white text-[14px]'>{item.message}</p>
                                </div>
                            ) : (
                                <p className='font-poppins-medium leading-7 text-justify text-white text-[14px]'>
                                    <ReactMarkdown >{item.message}</ReactMarkdown>
                                </p>
                            )}
                        </div>
                    ))}
                </div>
                {isLoading && (
                    <div className="flex flex-col w-full gap-8">
                        <h1 className="font-poppins-semibold text-[22px] text-primary">Out Gamble Bot</h1>
                        <LoadingSpinner/>
                    </div>
                )}
            </div>
            
        ) : (
            <div className="flex flex-col w-full gap-10 justify-center items-center -mt-4">
                <img src={logo} className='w-24 h-auto animate-bounces' alt="" />
                <AnimationDiv effect='fade-right' className="flex justify-between w-full">
                    <div className="flex flex-col gap-2">
                        <h1 className='text-white font-poppins-semibold text-[32px]'>Hai, Teman <span className='text-primary'>OutGamble</span></h1>
                        <h2 className='text-white font-poppins-semibold text-[32px]'>Ada yang bisa aku bantu hari ini?</h2>
                        <p className='text-white font-poppins-medium text-[14px]'>Pilih salah satu pertanyaan di bawah atau langsung tulis pertanyaanmu untuk mulai ngobrol bareng OutGamble.</p>
                    </div>
                    <div className=""></div>
                </AnimationDiv>
                <div className="flex justify-between items-center w-full gap-14">
                    {suggestionData.map((item, index) => (
                        <AnimationDiv effect='fade-up' delay={item.id * 200} key={index}>
                            <div onClick={() => handleMessage(item.text)} className="bg-linear-to-r from-[#05B14F] to-secondary p-4 rounded-lg flex flex-col gap-4 cursor-pointer w-full hover:scale-95 hover:opacity-60 duration-500">
                                <img src={item.img} className='w-12 h-auto' alt="" />
                                <h1 className='font-poppins-medium text-justify text-white text-[14px]'>{item.text}</h1>
                            </div>
                        </AnimationDiv>
                    ))}
                </div>
            </div>
        )}        
        <div className="bg-white w-full p-2 rounded-lg flex items-center gap-8 justify-between absolute bottom-0">
            <div className="flex items-center gap-2 w-full">
                <img src={file} className='w-10 cursor-pointer h-auto' alt="" />
                <input 
                    value={userMessage} 
                    onChange={(e) => setUserMessage(e.target.value)} 
                    type="text" 
                    className='border-0 w-full font-poppins-medium placeholder:text-[#A9A9A9] outline-0 text-[14px] text-black' placeholder='Tulis pertanyaan anda di sini...' 
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && userMessage.trim() != "") {
                            e.preventDefault();
                            handleMessage('');
                        }
                    }}
                />
            </div>
            <div className="flex items-center gap-4">
                <img src={mic} className='w-8 cursor-pointer hover:scale-95 hover:backdrop-opacity-95 duration-500 h-auto' alt="" />
                <div onClick={() => handleMessage('')} className="bg-secondary w-16 h-12 hover:scale-95 hover:backdrop-opacity-95 duration-500 cursor-pointer group flex justify-center items-center rounded-lg">
                    <img src={send} className='w-8 h-auto group-hover:-rotate-12 duration-500' alt="" />
                </div>
            </div>
        </div>
    </SafeAreaView>
  )
}
