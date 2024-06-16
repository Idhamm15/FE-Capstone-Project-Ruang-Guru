import Image from "next/image";
import Navbar from '../../components/navbar';
import Hero from '../../components/hero_section';
import Artikels from "@/components/utils/artikel";
import Chatbot from "@/components/utils/chatbot";

export default function AsistenPage() {
  return (
    <>
    <Navbar />
    <Chatbot/>
    </>
  );
}
