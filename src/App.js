import { useRoutes } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import "./App.css";
import { Navbar } from "./components/header/Navbar";
import routes from "./route";

function App() {
  const element = useRoutes(routes);
  return (
    <CartProvider>
      <Navbar />
      {element}
    </CartProvider>
  );
}

export default App;
