import { Routes, Route } from "react-router-dom";
import Header from "../app/header";
import Product from "../app/product";
const Router = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
      </Routes>
    </div>
  );
};
export default Router;
