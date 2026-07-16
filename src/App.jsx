import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<Project />} />

          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<Article />} />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Analytics />
    </>
  );
}

export default App;