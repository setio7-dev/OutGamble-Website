import { useEffect } from 'react';
import Amount from '../components/home/Amount';
import Welcome from '../components/home/Welcome'
import Navbar from '../components/Navbar'
import AOS from "aos";
import About from '../components/home/About';
import Service from '../components/home/Service';
import Action from '../components/home/Action';

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
    </div>
  )
}
