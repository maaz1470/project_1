import { Route } from 'react-router-dom'
// import './assets/css/app.css'
import axios from 'axios'
import Layout from './components/pages/Layout'
import CustomRoutes from './components/routes/CustomRoutes'
import routes from './components/routes/routes'

axios.defaults.baseURL = 'http://127.0.0.1:8000'

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
          <Route path='*' element={<h1>404 not found</h1>} />
      </CustomRoutes>
    </>

  )
}

export default App
