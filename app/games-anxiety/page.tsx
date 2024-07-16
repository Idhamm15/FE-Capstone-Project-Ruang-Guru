import Image from "next/image";
import Navbar from '../../components/navbar';
import Link from "next/link";
import Footer from "@/components/footer";
import candyImage from "../../assets/games/background_candy.jpg";
import marioImage from "../../assets/games/mario-bg.jpg";
import paperImage from "../../assets/games/paper.png";

export default function GamesAxietyPage(){
  return (
    <>
    <Navbar />
    <section className="container px-5 py-24 mx-auto max-w-7xl">
    <div className="flex flex-wrap w-full mb-4 p-4">
      <div className="w-full mb-6 lg:mb-0">
        <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">Games for Anxiety</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
    </div>


    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <Image className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
            src={paperImage} alt="Article Title"
          />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Rock Paper Scissors</h2>
          <p className="leading-relaxed text-base">
            Mainkan game Rock Paper Scissors agar kamu lebih Rilex
          </p>
          <Link href="/games-axiety/rock-paper-scissors" className="font-semibold text-indigo-600">
            Mainkan Sekarang <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>

      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <Image className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
            src={marioImage} alt="Article Title"
          />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Whac A Mole</h2>
          <p className="leading-relaxed text-base">
            Mainkan game Whac A Mole agar kamu lebih Rilex
          </p>
          <Link href="/games-axiety/whac-a-mole" className="font-semibold text-indigo-600">
            Mainkan Sekarang <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>

      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <Image className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
            src={candyImage} alt="Article Title"  
          />
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Candy Crush</h2>
          <p className="leading-relaxed text-base">
            Mainkan game Candy Crush agar kamu lebih Rilex
          </p>
          <Link href="/games-axiety/candy-crush" className="font-semibold text-indigo-600">
            Mainkan Sekarang <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>

    </div>
  </section>
    <Footer/>
    </>
  );
}
