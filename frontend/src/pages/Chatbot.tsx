import { suggestionData } from '../data/chatbotData';
import SafeAreaView from '../ui/SafeAreaView'
import arrow from "/image/chatbot/arrow.png";
import file from "/image/chatbot/file.png";
import mic from "/image/chatbot/mic.png";
import send from "/image/chatbot/send.png";
import logo from "/image/logo/logo.png"
import AnimationDiv from '../ui/AnimationDiv';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../ui/LoadingSpinner';
import ReactMarkdown from "react-markdown";
import UseChatbot from '../hooks/chatbot/UseChatbot';

export default function Chatbot() {
    const { displayedText, message, userMessage, setUserMessage, isLoading, handleMessage, startListening, isListening, chatRef } = UseChatbot();
  return (
    <SafeAreaView classNameParent={'h-[100vh]'} paddingY={28} classNameChild={'justify-start flex-col relative'}>
        {isListening && (
            <div className="w-full bg-black/40 h-full absolute flex justify-center items-center z-30">
                <div className="bg-white rounded-lg p-6 flex flex-col justify-center items-center gap-6 w-100">
                  <img src={logo} className="w-16 animate-bounces h-auto" alt="" />
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="font-poppins-bold text-primary text-[24px] text-center">Out Gamble Bot</h1>
                    <p className='font-poppins-medium text-black text-[18px]'>Mendengarkan Pertanyaanmu</p>
                  </div>

                  <div className="flex items-end justify-center gap-1.5 h-6 ">
                    <span className="w-2 h-2.5 bg-primary rounded-full animate-wave1"></span>
                    <span className="w-2 h-4 bg-primary rounded-full animate-wave2"></span>
                    <span className="w-2 h-2 bg-primary rounded-full animate-wave3"></span>
                    <span className="w-2 h-3.5 bg-primary rounded-full animate-wave4"></span>
                    <span className="w-2 h-2.5 bg-primary rounded-full animate-wave5"></span>
                  </div>
                </div>
            </div>
        )}
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
            <div ref={chatRef} className="max-h-[70vh] no-scrollbar overflow-y-auto pb-12 w-full">
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
                                    <ReactMarkdown>
                                        {displayedText(item.message, index)}
                                    </ReactMarkdown>
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
                <img onClick={startListening} src={mic} className='w-8 cursor-pointer hover:scale-95 hover:backdrop-opacity-95 duration-500 h-auto' alt="" />
                <div onClick={() => handleMessage('')} className="bg-secondary w-16 h-12 hover:scale-95 hover:backdrop-opacity-95 duration-500 cursor-pointer group flex justify-center items-center rounded-lg">
                    <img src={send} className='w-8 h-auto group-hover:-rotate-12 duration-500' alt="" />
                </div>
            </div>
        </div>
    </SafeAreaView>
  )
}
