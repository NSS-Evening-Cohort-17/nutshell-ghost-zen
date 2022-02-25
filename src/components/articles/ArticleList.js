import react, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArticleCard } from './ArticleCard';
import { getAllArticles, deleteArticle } from './../modules/ArticlesManager'

export const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const navigate = useNavigate();

    const getArticles = () => {
        return getAllArticles().then(articlesFromAPI => {
            setArticles(articlesFromAPI)
        })
    }

    useEffect(() => {
        getArticles();
    }, []);


    const handleDeleteArticle = (id) => {
        deleteArticle(id)
        .then(() => getAllArticles().then(setArticles));
    };




    return (
        <>
        <h2 className="page__title">Articles</h2>
        <button type="button" className="big__btn btn" onClick={() => {navigate("/addArticle")}} >Add an article</button>
        <div className="article__card">
            {articles.map(article =>
                <ArticleCard
                key={article.id}
                article={article}
                handleDeleteArticle={handleDeleteArticle} 
                />
            )}
        </div>

        </>
    )
}

