import { useEffect } from 'react';
import Amount from '../components/home/Amount';
import Welcome from '../components/home/Welcome'
import Navbar from '../components/Navbar'
import AOS from "aos";
import About from '../components/home/About';
import Service from '../components/home/Service';
import Action from '../components/home/Action';
import Community from '../components/home/Community';
import Bot from '../components/home/Bot';
import Testimonial from '../components/home/Testimonial';
import Tips from '../components/home/Tips';
import News from '../components/home/News';
import Statistic from '../components/home/Statistic';
import Education from '../components/home/Education';
import Ask from '../components/home/Ask';
import Footer from '../components/Footer';
import SplashScreen from '../components/SplashScreen';
import { UseAuthHookContext } from '../context/UseAuthContext';
import MobileNavbar from '../components/MobileNavbar';

export default function Home() {
  useEffect(() => {
    AOS.init();
  });

  const { isMobile } = UseAuthHookContext();
  return (
    <div>
      <SplashScreen />
      {isMobile ? (
        <MobileNavbar/>
      ) : (
        <Navbar />
      )}
      <Welcome />
      <Amount />
      <About />
      <Service />
      <Action />
      <Community />
      <Bot />
      <Testimonial />
      <Tips />
      <News />
      <Statistic />
      <Education />
      <Ask />
      <Footer />
    </div>
  )
}
