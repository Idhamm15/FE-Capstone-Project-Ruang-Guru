"use client"

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

type Artikel = {
  id: number;
  title: string;
  description1: string;
  description2: string;
  description3: string;
  image_url: string;
};

const DetailsArtikel = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Artikel | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchArticle = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/articles/${id}`);
          // console.log(response.data); // Debugging: Print response data
          setArticle(response.data.articles); // Adjust to handle single article object
          setLoading(false);
        } catch (error) {
          console.error('Error fetching article:', error);
          setLoading(false);
        }
      };

      fetchArticle();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (

    <section className="text-gray-600 body-font">
    <Navbar/>
      <div className="container px-5 py-24 mx-auto max-w-7xl">
        <div className="flex flex-wrap w-full mb-4 p-4">
          <div className="w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">{article.title}</h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="w-full p-4">
            <div className="bg-white p-6 rounded-lg">
              <img
                className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                style={{ height: '500px', width: '100%' }}
                src={article.image_url}
                alt={article.title}
                onError={(e) => { e.currentTarget.src = '/path/to/fallback/image.jpg'; }}
              />
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{article.title}</h2>
              <p className="leading-relaxed text-base">{article.description1}</p><br />
              <p className="leading-relaxed text-base">{article.description2}</p><br />
              <p className="leading-relaxed text-base">{article.description3}</p>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </section>
  );
};

export default DetailsArtikel;
