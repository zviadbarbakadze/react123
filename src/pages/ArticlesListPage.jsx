import articles from "./article-content";
import ArticlesList from "../components/ArticlesList";
const ArticlesListPage = () => {
  return (
    <div>
      <h1>Articles</h1>
      <ArticlesList articles={articles} />
    </div>
  );
};

export default ArticlesListPage;
