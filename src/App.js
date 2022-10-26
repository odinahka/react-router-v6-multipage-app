import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Navigate replace to="/welcome" />} />
        <Route path="/welcome/*" element={<Welcome />}>
          <Route
            path="new-user"
            element={<p className="centered">Welcome, new user</p>}
          />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
