import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ArticlesList = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        // eslint-disable-next-line react/jsx-key
        <Link className="article-list-item" to={`${article.name}`}>
          <h3>{article.title}</h3>
          <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
      ))}
    </div>
  );
};

export default ArticlesList;
