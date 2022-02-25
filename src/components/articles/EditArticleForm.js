import react, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getAllArticles, editArticle, getArticleById } from './../modules/ArticlesManager'


export const EditArticleForm = () => {
    const [article, setArticle] = useState({
        title: "",
        synopsis: "",
        url: ""
    })
    const [isLoading, setIsLoading] = useState(false);
    const {articleId} = useParams();
    const navigate = useNavigate();

    const handleFieldChange = (event) => {
        const stateToChange = {...article };
        stateToChange[event.target.id] = event.target.value;
        setArticle(stateToChange)
    }

    const updateArticle = (event) => {
        event.preventDefault()
        setIsLoading(true);

        const editedArticle = {
            id: articleId,
            title: article.title,
            synopsis: article.synopsis,
            url: article.url
        };
    editArticle(editedArticle)
        .then(() => navigate("/")
        )
    }

    useEffect(() => {
        getAllArticles()
            .then(setArticle)
    }, []);

    useEffect(() => {
        getArticleById(articleId)
            .then(article => {
                setArticle(article);
                setIsLoading(false);
            });
    },  []);


    return (
        <>
        <h2 className="page__title">Update an article</h2>
        <form>
            <fieldset>
                <div>
                    <label htmlFor="title">Headline</label>
                    <input 
                        type="text" 
                        id="title" 
                        onChange={handleFieldChange} 
                        value={article.title} 
                    /> 
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label htmlFor="synopsis">Synopsis</label>
                    <input 
                        type="text" 
                        id="synopsis" 
                        onChange={handleFieldChange} 
                        value={article.synopsis} 
                    /> 
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label htmlFor="url">URL</label>
                    <input 
                        type="url" 
                        id="url" 
                        onChange={handleFieldChange} 
                        value={article.url} 
                    /> 
                </div>
            </fieldset>

            <button 
                className="crud__btn btn"
                type="button" disabled={isLoading}
                onClick={updateArticle}>
                Submit
            </button>
        </form>
        </>
    );
}