import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';

const Newsboard = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
        let res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch news');
        let data = await res.json();
        setArticles(data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  if (loading) {
    return <h3 className="text-center">Loading...</h3>; // Loading message
  }

  if (error) {
    return <h3 className="text-center text-danger">Error: {error}</h3>; // Error message
  }

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="text-success">News</span>
      </h2>
      <div className="row">
        {articles.map((news, index) => (
          <Newsitem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Newsboard;
