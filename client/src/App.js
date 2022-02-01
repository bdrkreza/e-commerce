import { useRoutes } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/header/Navbar";
import routes from "./route";

function App() {
  const element = useRoutes(routes);
  return (
    <CartProvider>
      <header>
        <div class="row nomargin">
          <Navbar />
        </div>
      </header>
      <main>
        <div class="row nomargin">
          <div>{element}</div>
        </div>
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
