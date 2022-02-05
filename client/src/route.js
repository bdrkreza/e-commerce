import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { SoppingCart } from "./components/Cart/soppingCart/SoppingCart";
import { ProductByCategory } from "./components/category/ProductByCategory";
import { ProductDetails } from "./components/product/ProductDetails";
import { NotFound } from "./pages/404/NotFound";
import { Home } from "./pages/Home";
import { AccountView } from "./users/account/AccountView";
import { Dashboard } from "./users/Dashboard";
import { OrderTable } from "./users/orderList/OrderTable";
import { Payment } from "./users/payment/Payment";
import { Wishlist } from "./users/wishlist/Wishlist";




const routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/product/:productId", element: <ProductDetails /> },
  { path: "/cart", element: <SoppingCart /> },
  { path: "/category/:categoryId", element: <ProductByCategory /> },
  { path: "*", element: <NotFound /> },
  {
    path: "/profile",
    element: <Dashboard />,
    children: [
      { path: "account", element: <AccountView /> },
      {
        path: "order",
        element: <OrderTable />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
    ],
  },
];

export default routes;
