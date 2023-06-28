import { Route } from 'react-router-dom'
// import './assets/css/app.css'
import axios from 'axios'
import Layout from './components/pages/Layout'
import CustomRoutes from './components/routes/CustomRoutes'
import routes from './components/routes/routes'
import { getItem } from './components/hook/useCheckAuth'
import ProtectedAdminRoutes from './components/routes/ProtectedAdminRoutes'
import adminRoutes from './components/routes/adminRoutes'
import Checkout from './components/pages/Checkout/Checkout'

axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.interceptors.request.use(function(config){
  const token = getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : null
  return config;
})
function App() {

  return (
    <>

      <CustomRoutes>
          <Route path='/' element={<Layout />}>
            {
              routes.map((el, index) => {
                  if(el.component){
                    return (
                        <Route key={index} path={el.path} element={el.component} />
                    )
                  }
              })
            }
          </Route>
          <Route path='/customer/*' element={<Layout />}>
            <Route path='*' element={<ProtectedAdminRoutes />}>
              {
                adminRoutes.map((route,rand) => {
                  if(route.component){
                    return <Route key={rand} path={route.path} element={route.component} />;
                  }
                })
              }
            {/* <Route path='checkout' element={<Checkout />} /> */}


            </Route>
              
          </Route>
          <Route path='*' element={<h1>404 not found</h1>} />
      </CustomRoutes>

      {/* <ProtectedAdminRoutes>
        
      </ProtectedAdminRoutes> */}

    </>

  )
}

export default App
