import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router"


const NotFound = () => {

    return (
        <div>
            <Routes>
                <Route
                    path="*"
                    element={
                        <main className="not-found">
                            <p >There's nothing here!</p>
                            <Link style={{ color: "black"}} to="/">
                                Back to Home
                            </Link>
                        </main>
                    }
                    />
            </Routes>
        </div>
    )
}


export default NotFound