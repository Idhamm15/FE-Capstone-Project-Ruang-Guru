import Navbar from '../../components/navbar';
import Hero from '../../components/hero_section';
import Footer from "@/components/footer";
import { Feature } from '@/components/utils/feature';


export default function FeaturePage() {
    return (
      <>
      <Navbar />
      <Feature/>
      <Footer/>
      </>
  );
}