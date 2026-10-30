import React from "react"
import {Outlet} from 'react-router-dom'
import LandingPage from "../../pages/LandingPage"

const PublicLayout = () => {
    return (
        <div className="public-wrapper">
            <Outlet />
        </div>
    )
}

export default PublicLayout