import { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Article } from "./components/Article/Article";

export const App = () => {

  return (

    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:id" element={<Article />} />
      </Routes>

    </>


  );
}

export default App;