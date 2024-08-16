import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/HomePage";
import ArticlePage from "./pages/HomePage";
import ArticlesListPage from "./pages/HomePage";
import NotFoundPage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>My Awesome Blog </h1>
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/article" element={<ArticlePage />} />
            <Route path="/articleslit" element={<ArticlesListPage />} />
            <Route path="/notfound" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
