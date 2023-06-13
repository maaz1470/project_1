import Login from "../pages/Auth/Login";
import Profile from "../pages/Auth/Profile";
import Register from "../pages/Auth/Register";
import Cart from "../pages/Cart/Cart";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Shop from "../pages/Shop/Shop";
import Whitelist from "../pages/Whitelist/Whitelist";
const routes = [
    {
        name: 'Home',
        path: '/',
        component: <Home />,
    },
    {
        name: 'Product',
        path: '/product/:url',
        component: <Product />,
    },
    {
        name: 'Login',
        path: '/login',
        component: <Login />
    },
    {
        name: 'Register',
        path: '/register',
        component: <Register />
    },
    {
        name: 'Shop',
        path: '/shop',
        component: <Shop />
    },
    {
        name: 'Whitelist',
        path: '/whitelist',
        component: <Whitelist />
    },
    {
        name: 'Cart',
        path: '/cart',
        component: <Cart />
    },
    {
        name: 'Profile',
        path: '/profile',
        component: <Profile />
    },
    {
        name: 'Profile',
        path: '/contact',
        component: <Contact />
    }
];

export default routes;