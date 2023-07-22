import React from 'react'

import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import useGetUserId from './Hooks/useGetUserId'
import PrivateRoute from './Routes/PrivateRoute'
import Backend from './backend/Backend'
import Content from './backend/inc/Content'
import Dashboard from './backend/pages/Dashboard'
import AddSlider from './backend/pages/Slider/AddSlider'
import EditSlider from './backend/pages/Slider/EditSlider'
import Slider from './backend/pages/Slider/Slider'
import Auth from './backend/pages/auth/Auth'
import Login from './backend/pages/auth/Login'
import Register from './backend/pages/auth/Register'
import AddBrand from './backend/pages/brand/AddBrand'
import AllBrands from './backend/pages/brand/AllBrands'
import EditBrand from './backend/pages/brand/EditBrand'
import AddCategory from './backend/pages/category/AddCategory'
import AllCategories from './backend/pages/category/AllCategories'
import EditCategory from './backend/pages/category/EditCategory'
import AddPage from './backend/pages/page/AddPage'
import AllPages from './backend/pages/page/AllPages'
import AddProduct from './backend/pages/product/AddProduct'
import AllProduct from './backend/pages/product/AllProduct'
import EditProduct from './backend/pages/product/EditProduct'
import Order from './backend/pages/order/Order'
import View from './backend/pages/order/View'
axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.interceptors.request.use(function(config){
	const token = useGetUserId();
	config.headers.Authorization = token ? `Bearer ${token}` : null
	return config;
})


export default function Main(){
	return (
		<div>
			<Routes>
				<Route path='*' element={<h1>404 not found</h1>} />
				
				<Route path='/panel/*' element={<PrivateRoute />}>
					
					<Route path='*' element={<Backend />}>
						<Route path='dashboard' element={
							<Content>
								<Dashboard />
							</Content>
						} />
						<Route path='category' element={<Content />}>
							<Route path='' element={<AllCategories />} />
							<Route path='add' element={<AddCategory />} />
							<Route path='edit/:id' element={<EditCategory />} />
						</Route>
						<Route path='brand' element={<Content />}>
							<Route path='' element={<AllBrands />} />
							<Route path='add' element={<AddBrand />} />
							<Route path='edit/:id' element={<EditBrand />} />
						</Route>
						<Route path='product' element={<Content />}>
							<Route path='' element={<AllProduct />} />
							<Route path='add' element={<AddProduct />} />
							<Route path='edit/:id' element={<EditProduct />} />
						</Route>
						<Route path='order' element={<Content />}>
							<Route path='' element={<Order />} />
							<Route path='view/:id' element={<View />} />
						</Route>
						<Route path='slider' element={<Content />}>
							<Route path='' element={<Slider />} />
							<Route path='add' element={<AddSlider />} />
							<Route path='edit/:id' element={<EditSlider />} />
						</Route>
						<Route path='pages' element={<Content />}>
							<Route path='' element={<AllPages />} />
							<Route path='add' element={<AddPage />} />
						</Route>
					</Route>

					
				</Route>
				<Route path='/auth/*' element={<Auth />} >
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
				</Route>
			</Routes>
		</div>
	)
}