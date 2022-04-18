import React, { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';

import LazyLoadingSpinner from "../components/LazyLoadingSpinner/LazyLoadingSpinner";

// Import all page with a lazy load.
const ErrorPage = lazy(() => import("../views/ErrorPage/ErrorPage"))
const GamePage = lazy(() => import("../views/GamePage/GamePage"))
const HomePage = lazy(() => import("../views/HomePage/HomePage"))
const OptionsPage = lazy(() => import("../views/OptionsPage/OptionsPage"))
const PiecesPage = lazy(() => import("../views/PiecesPage/PiecesPage"))
const RecordsPage = lazy(() => import("../views/RecordsPage/RecordsPage"))
const TutorialPage = lazy(() => import("../views/TutorialPage/TutorialPage"))

/**
 * Compile all routes properties.
 * @type {Array<Object>} Every object content all info about the page
 */
export const manageRoutes = [
    {path: "/", renderPage: HomePage},
    {path: "/game", renderPage: GamePage},
    {path: "/options", renderPage: OptionsPage},
    {path: "/pieces", renderPage: PiecesPage},
    {path: "/records", renderPage: RecordsPage},
    {path: "/tutorial", renderPage: TutorialPage}
]


/**
 * Mange all routes here.
 * @returns {JSX.Element} Returns all Pages.
 */
export const CustomRoutes = () => {

    return (
        <Routes data-testid="browserouter">
            {
                manageRoutes.map((item, index) => {
                    
                    return <Route 
                        key={index} 
                        path={item.path} 
                        element={
                            <Suspense fallback={ <LazyLoadingSpinner /> } >
                                <item.renderPage/>
                            </Suspense>
                        }
                    />
                })
            }
            <Route path="*" element={
                <Suspense fallback={ <LazyLoadingSpinner /> } >
                    <ErrorPage/>
            </Suspense>
            }/>
        </Routes>
    )
}