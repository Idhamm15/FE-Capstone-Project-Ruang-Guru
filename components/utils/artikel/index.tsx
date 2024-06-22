import React from 'react';
import Link from 'next/link';

type Artikel = {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  link:string;
  button: string;
};

type ArtikelsProps = {
  title: string;
  articles: Artikel[];
};

function Artikels({ title, articles }: ArtikelsProps) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto max-w-7xl">
        <div className="flex flex-wrap w-full mb-4 p-4">
          <div className="w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">{title}</h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {articles.map((article, index) => (
            <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg">
                <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src={article.imageUrl} alt={article.title} />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{article.subtitle}</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{article.title}</h2>
                <p className="leading-relaxed text-base">{article.description}</p>
                <Link href={article.link} passHref className="font-semibold text-indigo-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {article.button}<span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Artikels;
