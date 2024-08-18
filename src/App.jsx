import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "@pages/Home";
import About from "@pages/About";
import Products from "@pages/Products";
import Layout from "@layouts/Layout";
import NotFound from "@pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
