import React from "react"
import { Outlet, Link } from "react-router-dom"

function Layout(){
  return (
    <div>

      <nav className="home-link" key="home-button">
        <Link style={{ color: "yellow" , textDecoration:"none"}} to="/">
            Home
        </Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout