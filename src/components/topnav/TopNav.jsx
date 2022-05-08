import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from '../dropdown/Dropdown'
import notifications from '../../assets/JsonData/notification.json'

import './topnav.css'

const renderNotificationITem = (item, index) => (
    <div className='notification-item' key={index}>
        <i className={item.icon} />
        <span>{item.content}</span>
    </div>
)


const TopNav = () => {
    return (
        <div className='topnav'>
            <div className='topnav__search'>
                <input type='text' placeholder='Search here...' />
                <i className='bx bx-search'></i>
            </div>
            <div className='topnav__right'>
                <div className='topnav__right-item'>
                    {/* dropdown */}
                    <Dropdown
                        icon='bx bx-user'
                    />

                </div>
                <div className='topnav__right-item'>
                    {/* dropdown */}
                    <Dropdown
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationITem(item, index)}
                        renderFooter={() => <Link to='/'>Viwe All</Link>}
                    />
                </div>
                <div className='topnav__right-item'>
                    {/* theme setting */}
                    <Dropdown />
                </div>
            </div>
        </div>
    )
}

export default TopNav