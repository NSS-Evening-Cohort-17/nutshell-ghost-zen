import react, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { addArticle } from './../modules/ArticlesManager'


export const AddArticleForm = () => {
    const sessionUser = JSON.parse(window.sessionStorage.getItem("nutshell_user"))
    const sessionUserId = sessionUser.id
    const [article, setArticle] = useState({
        
        title: "",
        synopsis: "",
        timestamp: new Date().toLocaleString(),
        url: "",
        userId: sessionUserId
    });

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const newArticle = {...article}
        let selectedVal = event.target.value
        newArticle[event.target.id] = selectedVal
        setArticle(newArticle)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (article.url === null || article.title === null || article.synopsis === null) {
            window.alert('All fields must be filled in')
        } else {
            addArticle(article)
                .then(() => navigate("/"))
        }
    }

    return (
        <form>
            <h2 className="page__title">Add an article</h2>
            <fieldset>
                <div>
                    <label htmlFor="title">Headline</label>
                    <input type="text" id="title" onChange={handleInputChange} required value={article.title} /> 
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label htmlFor="synopsis">Synopsis</label>
                    <input type="text" id="synopsis" onChange={handleInputChange} required value={article.synopsis} /> 
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label htmlFor="url">URL</label>
                    <input type="url" id="url" onChange={handleInputChange} required value={article.url} /> 
                </div>
            </fieldset>

            <button className="crud__btn btn"
                onClick={handleSubmit}>
                Submit
            </button>
        </form>
    )
}