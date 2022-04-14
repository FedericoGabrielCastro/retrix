import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from "../views/HomePage";

/**
 * @returns {JSX.Element} Returns all Pages.
 */
export const CustomRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}