import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AOS from "aos";
import { useEffect } from 'react';
import LinkDetectionContent from '../components/link/LinkDetectionContent';
import { UseSplashHookContext } from '../context/UseSplashContext';

export default function LinkDetection() {
    const { setIsStart } = UseSplashHookContext();

    useEffect(() => {
        setIsStart(true)
    }, [setIsStart]);

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <Navbar />
            <LinkDetectionContent />
            <Footer />
        </div>
    )
}
