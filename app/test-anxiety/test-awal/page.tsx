import Navbar from '@/components/navbar';
import Footer from "@/components/footer";
import Question from './questions';

export default function TestanxietyPageAwal() {
  const questions = [
    {
      question: 'Merasa gugup, cemas, atau gelisah?',
      name: 'QA',
      options: [
        { id: 'anxiety1', label: 'Tidak Pernah' },
        { id: 'anxiety2', label: 'Beberapa Hari' },
        { id: 'anxiety3', label: 'Sebagian Besar Hari' },
        { id: 'anxiety4', label: 'Hampir Setiap Hari' },
      ],
    },
    {
      question: 'Tidak dapat menghentikan atau mengontrol kekhawatiran?',
      name: 'QB',
      options: [
        { id: 'questionstwo1', label: 'Tidak Pernah' },
        { id: 'questionstwo2', label: 'Beberapa Hari' },
        { id: 'questionstwo3', label: 'Sebagian Besar Hari' },
        { id: 'questionstwo4', label: 'Hampir Setiap Hari' },
      ],
    },
    {
      question: 'Terlalu banyak mengkhawatirkan berbagai hal?',
      name: 'QC',
      options: [
        { id: 'questionstwo1', label: 'Tidak Pernah' },
        { id: 'questionstwo2', label: 'Beberapa Hari' },
        { id: 'questionstwo3', label: 'Sebagian Besar Hari' },
        { id: 'questionstwo4', label: 'Hampir Setiap Hari' },
      ],
    },
    {
      question: 'Sulit Merasa santai?',
      name: 'QD',
      options: [
        { id: 'questionstwo1', label: 'Tidak Pernah' },
        { id: 'questionstwo2', label: 'Beberapa Hari' },
        { id: 'questionstwo3', label: 'Sebagian Besar Hari' },
        { id: 'questionstwo4', label: 'Hampir Setiap Hari' },
      ],
    },
    {
      question: 'Merasa kurang istirahat hingga sulit untuk diam?',
      name: 'QE',
      options: [
        { id: 'questionstwo1', label: 'Tidak Pernah' },
        { id: 'questionstwo2', label: 'Beberapa Hari' },
        { id: 'questionstwo3', label: 'Sebagian Besar Hari' },
        { id: 'questionstwo4', label: 'Hampir Setiap Hari' },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="row">
          <p>Dalam 2 Minggu Terakhir</p>
          <p>Seberapa sering kamu merasa terganggu oleh hal berikut...</p>
        </div>
        {questions.map((q, index) => (
          <Question key={index} question={q.question} options={q.options} name={q.name} />
        ))}
        <div className="flex justify-center items-center mt-5">
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Kirim Jawaban</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
