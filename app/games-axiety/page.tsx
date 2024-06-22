import Image from "next/image";
import Navbar from '../../components/navbar';
import Hero from '../../components/hero_section';
import Artikels from "@/components/utils/artikel";
import Footer from "@/components/footer";

export default function GamesAxietyPage(){
  return (
    <>
    <Navbar />
    <Artikels/>
    <Footer/>
    </>
  );
}
