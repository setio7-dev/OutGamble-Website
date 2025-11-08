import { useEffect } from 'react';
import About from '../components/home/About'
import Welcome from '../components/home/Welcome'
import Navbar from '../components/Navbar'
import AOS from "aos";

export default function Home() {
    useEffect(() => {
        AOS.init();
    });
  return (
    <div>
      <Navbar/>
      <Welcome/>
      <About/>
    </div>
  )
}
