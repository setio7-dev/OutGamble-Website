import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AOS from "aos";
import { useEffect } from 'react';
import LinkDetectionContent from '../components/link/LinkDetectionContent';
import { UseSplashHookContext } from '../context/UseSplashContext';
import { UseAuthHookContext } from '../context/UseAuthContext';
import MobileNavbar from '../components/MobileNavbar';

export default function LinkDetection() {
    const { setIsStart } = UseSplashHookContext();
    const { isMobile } = UseAuthHookContext();

    useEffect(() => {
        setIsStart(true)
    }, [setIsStart]);

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            {isMobile ? <MobileNavbar/> : <Navbar />}
            <LinkDetectionContent />
            <Footer />
        </div>
    )
}
