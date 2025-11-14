/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";
import { GoogleGenAI } from "@google/genai";
import AOS from 'aos';
import { ModernAlert } from "../../ui/ModernAlert";

export default function UseChatbot() {
    const ai = new GoogleGenAI({ 'apiKey': 'AIzaSyDFzxHyclWxlYZlqygMich7NRNVB_cWM-8' });
    const [message, setMessage] = useState<chatbotMessage[]>([]);
    const [userMessage, setUserMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const displayedText = (text: string, index: number) => {
        const isLastBot =
            message.length - 1 === index && message[index].user === "bot";

        return isLastBot ? typedText : text;
    };
    const chatRef = useRef<HTMLDivElement>(null);
    const [isListening, setIsListening] = useState<boolean>(false);
    const [recognition, setRecognition] = useState(null);
    const speechTextRef = useRef("");
    const [typedText, setTypedText] = useState("");


    const handleBotChat = (msg: chatbotMessage) => {
        if (!msg || msg.user !== "bot") return;
        let i = 0;
        setTypedText("");
        const interval = setInterval(() => {
            i++;
            setTypedText(msg.message.slice(0, i));

            if (i > msg.message.length) clearInterval(interval);
        }, 10);

        return () => clearInterval(interval);
    };

    const handleSpeech = () => {
        try {
            const speech = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            if (!speech) {
                ModernAlert({
                    status: 'error',
                    message: 'Browser Anda Tidak Tersedia Fitur Speech',
                    isLoading: false
                });
            }

            if (speech) {
                const recog = new speech();
                recog.lang = "id-ID";
                recog.continuous = false;
                recog.interimResults = true;

                recog.onresult = (event: any) => {
                    let transcript = "";
                    for (let i = event.resultIndex; i < event.results.length; ++i) {
                        transcript += event.results[i][0].transcript;
                    }
                    speechTextRef.current = transcript;
                };

                recog.onerror = (event: any) => {
                    console.error("Speech error:", event.error);
                };

                recog.onend = () => {
                    setIsListening(false);
                    handleMessage(speechTextRef.current);
                };

                setRecognition(recog);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [message, isLoading]);

    useEffect(() => {
        const last = message[message.length - 1];
        if (last) handleBotChat(last);
    }, [message]);

    useEffect(() => {
        handleSpeech();
    }, []);

    const startListening = () => {
        if (recognition) {
            (recognition as any).start();
            setIsListening(true);
            setUserMessage("");
        } else {
            alert("Browser kamu belum mendukung Speech Recognition 😢");
        }
    };

    const handleMessage = async (suggest: string) => {
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
                model: "gemini-2.0-flash",
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
            ModernAlert({
                status: 'error',
                message: "Server Sedang Sibuk",
                typeLink: 'Reload'
            });
            console.error(error);
        }
    }

    useEffect(() => {
        AOS.init();
    }, []);

    return { isLoading, userMessage, setUserMessage, handleMessage, message, displayedText, startListening, isListening, chatRef }
}