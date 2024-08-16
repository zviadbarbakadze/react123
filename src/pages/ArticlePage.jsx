import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";
const ArticlePage = () => {
  const { articleId } = useParams();
  const article = articles.find((article) => article.name === articleId);
  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      {article.content.map((content) => (
        // eslint-disable-next-line react/jsx-key
        <p>{content}</p>
      ))}
    </div>
  );
};

export default ArticlePage;
