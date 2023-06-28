import React from 'react'
import { Outlet } from 'react-router-dom'

import 'https://cdnjs.cloudflare.com/ajax/libs/metisMenu/3.0.7/metisMenu.min.js'
import './../../assets/backend/assets/js/app.js'
import Header from './inc/Header'
import LeftSidebar from './inc/LeftSidebar'
import RightBar from './inc/RightBar'
export default function Backend(){
    return (
        <div>
            <div id='layout-wrapper'>
                <Header />
                <LeftSidebar />

                <Outlet />
                
            </div>
            
            <RightBar />
            
        </div>
    )
}