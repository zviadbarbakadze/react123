import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";
import axios from 'axios'
import { useEffect, useState } from "react";
const ArticlePage = () => {
  const[articleInfo,setArticleInfo]=useState({upvotes:0,comments:[]})
  const { articleId } = useParams();
  useEffect( ()=>{
    async()=>{
      const response= await axios.get(`/api/articles/${articleId}`)
      .then(()=>{
        console.log(response.data)
        setArticleInfo(response.data)
      })
     
    }
    
  },[])
  
  const article = articles.find((article) => article.name === articleId);
  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <h1>{articleInfo.comments[0]}</h1>
      {article.content.map((content) => (
        // eslint-disable-next-line react/jsx-key
        <p>{content}</p>
      ))}
    </div>
  );
};

export default ArticlePage;
