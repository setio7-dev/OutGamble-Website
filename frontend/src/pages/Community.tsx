import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CommunityContent from '../components/community/CommunityContent'
import AOS from 'aos';
import { useEffect } from 'react';

export default function Community() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar/>
      <CommunityContent/>
      <Footer/>
    </div>
  )
}
