import Image from "next/image";
import Navbar from '../../components/navbar';
import Hero from '../../components/hero_section';
import Artikels from "@/components/utils/artikel";
import Footer from "@/components/footer";

export default function ArtikelPage() {
  return (
    <>
    <Navbar />
    <Hero
      text1="Welcome to our website!"
      button1="Learn more"
      title1="Baca Artikel Kesehatan"
      title2="Find the best products at unbeatable prices."
      button2="Get Started"
      button3="Explore" 
    />
    <Artikels/>
    <Footer/>
    </>
  );
}
