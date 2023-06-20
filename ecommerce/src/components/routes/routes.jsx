import Login from "../pages/Auth/Login";
import Profile from "../pages/Auth/Profile";
import Register from "../pages/Auth/Register";
import Verify from "../pages/Auth/Verify";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
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
        name: 'Checkout',
        path: '/checkout',
        component: <Checkout />
    },
    {
        name: 'Profile',
        path: '/profile',
        component: <Profile />
    },
    {
        name: 'Contact',
        path: '/contact',
        component: <Contact />
    },
    {
        name: 'Category',
        path: '/category/:name',
        component: <Contact />
    },
    {
        name: 'Verify',
        path: '/verify-customer/:token',
        component: <Verify />
    }
];

export default routes;