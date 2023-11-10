import React from 'react'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <div className='mainLayout'>
            <div>Header</div>
            <div className='mainContent'>
                <Outlet />
            </div>
            <div>Footer</div>
        </div>

    )
}
