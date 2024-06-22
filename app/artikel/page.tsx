import Image from "next/image";
import Navbar from '../../components/navbar';
import Hero from '../../components/hero_section';
import Artikels from "@/components/utils/artikel";
import Footer from "@/components/footer";

export default function ArtikelPage() {
  const articles = [
    {
      title: 'Chichen Itza',
      subtitle: 'SUBTITLE',
      description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
      imageUrl: 'https://kuyou.id/content/images/ctc_2020021605150668915.jpg',
      link: '#',
      button: 'Testing'
    },
    {
      title: 'Colosseum Roma',
      subtitle: 'SUBTITLE',
      description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
      imageUrl: 'https://asset.kompas.com/crops/Pk_pN6vllxXy1RshYsEv74Q1BYA=/56x0:1553x998/750x500/data/photo/2021/06/16/60c8f9d68ff4a.jpg',
      link: '#',
      button: 'Testing'
    },
    {
      title: 'Great Pyramid of Giza',
      subtitle: 'SUBTITLE',
      description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
      imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/7/2019/07/33-GettyImages-154260931-216706f.jpg?quality=90&resize=768%2C574',
      link: '#',
      button: 'Testing'
    },
    {
      title: 'San Francisco',
      subtitle: 'SUBTITLE',
      description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
      imageUrl: 'https://wisatamuda.com/wp-content/uploads/2019/02/1-Golden-Gate-Bridge-Gambar-dan-Foto-Tempat-Wisata-Terbaik-di-San-Fransisco-USA.jpg',
      link: '#',
      button: 'Testing'
    },
  ];
  return (
    <>
    <Navbar />
    <Artikels title="Artikel" articles={articles} />
    <Footer/>
    </>
  );
}
