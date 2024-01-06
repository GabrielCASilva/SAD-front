import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { Outlet } from 'react-router-dom'

import './style.css'

export default function Layout(){

    return (
        <div className="page-container">
            <Header/>
            <div className="container flex">
                <Sidebar/>
                <div className="container">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}