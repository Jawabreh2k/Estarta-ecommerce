// React
import { lazy, Suspense, useEffect } from "react";
// React router Dom
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
// components
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";
// Pages
const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Products = lazy(() => import("./pages/Products"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./pages/Login"));
// Redux
import { useDispatch, useSelector } from "react-redux";

import { validateToken } from "./redux/auth/actions";

function ProtecedRoute({ element }) {
  const { isAuth } = useSelector((state) => state.authReducer);

  if (isAuth) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
}

function App() {
  const dispatch = useDispatch();
  const { loading, isAuth } = useSelector((state) => state.authReducer);
  const nav = useNavigate();

  useEffect(() => {
    if (isAuth)
      dispatch(validateToken()).then((res) => {
        if (!res) nav("/login");
      });
  }, [isAuth]);

  if (loading) return <Spinner />;

  return (
    <div className="App">
      <Suspense fallback="Loading...">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/products"
            element={<ProtecedRoute element={<Products />} />}
          />
          <Route path="/cart" element={<ProtecedRoute element={<Cart />} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
