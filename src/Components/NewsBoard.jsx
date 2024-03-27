import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);
    const API_KEY = "cc2fc5a000cb4864970c9898067de639";

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`;

        fetch(url)
            .then(response => response.json()) // Correcting the typo here
            .then(data => setArticles(data.articles))
            .catch(error => console.error("Error fetching data:", error));
    }, [category]);

    return (
        <div >
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            {articles.map((news, index) => (
                <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            ))}
        </div>
    );
};

export default NewsBoard;
