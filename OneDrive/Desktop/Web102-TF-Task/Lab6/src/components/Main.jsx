import React from "react";
import DetailView from "../routes/DetailView";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App";
import Layout from "../routes/Layout";
import NotFound from "../routes/NotFound";

function Main(){

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                    <Route index element={<App />} />
                    <Route path="/coinDetails/:symbol" element={<DetailView />} />
                    <Route path="*" element={ <NotFound /> } />
                    </Route>
                </Routes>
                </BrowserRouter>
        </div>
    )
}

export default Main

