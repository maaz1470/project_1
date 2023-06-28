import Checkout from "../pages/Checkout/Checkout";
import Profile from "../pages/Auth/Profile";

const adminRoutes = [
    
    {
        name: 'Checkout',
        path: 'checkout',
        component: <Checkout />
    },
    {
        name: 'Profile',
        path: 'profile',
        component: <Profile />
    },
]

export default adminRoutes;