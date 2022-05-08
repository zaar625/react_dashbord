import React from 'react'
import { BrowserRouter, } from 'react-router-dom'

import Sidebar from '../sidebar/Sidebar'
import Routers from '../Routers'
import TopNav from '../topnav/TopNav'

import './layout.css'


const Layout = () => {

    return (
        <BrowserRouter>
            <div className='layout'>
                <Sidebar />
                <div className='layout__content'>
                    <TopNav />
                    <div className='layout__content-main'>
                        <Routers />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Layout