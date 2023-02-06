// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const API_KEY = "fb921efd2b50464087fa45e81a5c3ab0";
// const API_URL = `https://newsapi.org/v2/everything?q=economy&apiKey=${API_KEY}`;

// function NewsPage() {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     axios
//       .get(API_URL)
//       .then((res) => {
//         setArticles(res.data.articles);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []);

//   return (
//     <div>
//       {articles.map((article) => (
//         <div key={article.url}>
//           <h2>{article.title}</h2>
//           <p>{article.description}</p>
//           <a href={article.url}>Read more</a>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default NewsPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
const API_KEY = 'fb921efd2b50464087fa45e81a5c3ab0';
const API_URL = `https://newsapi.org/v2/everything?q=economy&apiKey=${API_KEY}`;

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setArticles(res.data.articles);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className='container'>
      {articles.map((article) => (
        <Card
          key={article.url}
          title={article.title}
          description={article.description}
          image={article.urlToImage}
          url={article.url}
        />
      ))}
    </div>
  );
}

export default News;
