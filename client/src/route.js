import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { SoppingCart } from "./components/Cart/SoppingCart"
import { ProductByCategory } from "./components/category/ProductByCategory"
import { ProductDetails } from "./components/product/ProductDetails"
import { Home } from "./pages/Home"


const routes =[
    {path:"/", element:<Home/>},
    {path:"/login", element:<Login/>},
    {path:"/register", element:<Register/>},
    {path:"/product/:productId", element:<ProductDetails/>},
    {path:"/cart", element:<SoppingCart/>},
    {path:"/category/:categoryId", element:<ProductByCategory/>}

]

export default routes;