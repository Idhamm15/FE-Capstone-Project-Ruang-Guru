import Image from "next/image";
import Navbar from '../../components/navbar';
import Artikels from "@/components/utils/artikel";
import Footer from "@/components/footer";

export default function ArtikelPage() {

  return (
    <>
    <Navbar />
    <Artikels title="Artikel Terbaru"/>
    <Footer/>
    </>
  );
}
