import Image from "next/image";
import Navbar from '../components/navbar';
import Hero from '../components/hero_section';
import Footer from "@/components/footer";
import { Feature } from "@/components/utils/feature";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero
      text1="Welcome to our website!"
      button1="Learn more"
      title1="Website Edukasi Kesehatan"
      title2="Find the best education for your health."
      button2="Get Started"
      button3="Explore" 
    />
    <Feature/>
    <Footer/>
    </>
  );
}
