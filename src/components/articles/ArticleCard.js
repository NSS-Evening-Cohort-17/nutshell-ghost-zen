import react from "react";
import { Link } from "react-router-dom";

export const ArticleCard = ({ article, handleDeleteArticle, handleEditArticle }) => {


    return (
        <>
        <div className="article__cards">
            <div className="article__card">
                <h5 className="article__title"> {article.title}</h5>
                    <p><em>Posted on {article.timestamp}</em></p>
                    <p><strong>Synopsis</strong> {article.synopsis}</p>
                    <Link to={article.url}>
                        <p>{article.url}</p>
                    </Link>
                <div className="crud_btns">
                    <button type="button" className="crud__btn btn" onClick={() => handleDeleteArticle(article.id)}>Delete</button>
                    {/* <button type="button" className="crud__btn btn" onClick={() => {navigate(`/${article.id}/edit`)}} >Edit</button>  */}

                    <Link className="crud__btn btn" to={`/${article.id}/edit`}> 
                        <button>Edit</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}


 