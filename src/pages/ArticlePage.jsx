import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";
import axios from "axios";
import { useEffect, useState } from "react";
import CommentsList from "../components/CommentsList";
const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({
    upvotes: 0,
    comments: [],
  });

  const { articleId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/articles/${articleId}`);
      const newArticleInfo = response.data;

      setArticleInfo(newArticleInfo);
    };
    fetchData();
  }, [articleId]);

  const upvoteData = async () => {
    const response = await axios.put(`/api/articles/${articleId}/upvote`);
    const updatedData = response.data;
    setArticleInfo(updatedData);
  };

  const article = articles.find((article) => article.name === articleId);
  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <button onClick={upvoteData}>upvote</button>
      <h4>upvotes: {articleInfo.upvotes}</h4>
      {article.content.map((content, i) => (
        // eslint-disable-next-line react/jsx-key
        <p key={i}>{content}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
    </div>
  );
};

export default ArticlePage;
