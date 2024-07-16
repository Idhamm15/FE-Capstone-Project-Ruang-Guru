"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

type Artikel = {
  id: number;
  title: string;
  description1: string;
  description2: string;
  description3: string;
  image_url: string;
  button: string;
};

type ArtikelsProps = {
  title: string;
};

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

function Artikels({ title }: ArtikelsProps) {
  const [articles, setArticles] = useState<Artikel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/articles`);
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
          {articles.map((article) => (
            <div key={article.id} className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg">
                <img
                  className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                  src={article.image_url}
                  alt={article.title}
                  onError={(e) => { e.currentTarget.src = '/path/to/fallback/image.jpg'; }}
                />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{article.title}</h2>
                <p className="leading-relaxed text-base">{truncateText(article.description1, 100)}</p>
                <Link href={`/artikel/details-artikel/${article.id}`} passHref>
                  <span className="font-semibold text-indigo-600">
                    Lihat Selengkapnya <span aria-hidden="true">&rarr;</span>
                  </span>
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
