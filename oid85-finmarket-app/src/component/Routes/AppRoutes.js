import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Workspace} from '../Workspace/Workspace'
import {Report} from '../Report/Report'

export const AppRoutes = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Workspace />} />
                    <Route exact path="/report" element={<Report />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}