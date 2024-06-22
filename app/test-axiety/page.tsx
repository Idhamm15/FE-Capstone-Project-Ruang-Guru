import Image from "next/image";
import Navbar from '../../components/navbar';
import Hero from '../../components/hero_section';
import Artikels from "@/components/utils/artikel";
import Footer from "@/components/footer";

export default function TestaxietyPage() {
    const articles = [
        {
          title: 'Test Awal',
          subtitle: 'SUBTITLE',
          description: 'Test ini akan bisa memprediksi seberapa cemas anda dalam presentase',
          imageUrl: 'https://kuyou.id/content/images/ctc_2020021605150668915.jpg',
          link: '/test-axiety/test-awal',
          button: 'Tes Sekarang'
        },
      ];
  return (
    <>
    <Navbar />
    <Artikels title="Test Axiety" articles={articles} />
    <Footer/>
    </>
  );
}
