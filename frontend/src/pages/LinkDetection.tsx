import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AOS from "aos";
import { useEffect } from 'react';
import LinkDetectionContent from '../components/link/LinkDetectionContent';

export default function LinkDetection() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <Navbar />
            <LinkDetectionContent/>
            <Footer />
        </div>
    )
}
