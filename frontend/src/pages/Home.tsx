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

export default function Home() {
    useEffect(() => {
        AOS.init();
    });
  return (
    <div>
      <Navbar/>
      <Welcome/>
      <Amount/>
      <About/>
      <Service/>
      <Action/>
      <Community/>
      <Bot/>
      <Testimonial/>
      <Tips/>
      <News/>
      <Statistic/>
      <Education/>
    </div>
  )
}
