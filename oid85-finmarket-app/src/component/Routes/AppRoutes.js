import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Workspace} from '../Workspace/Workspace'
import {ReportBacktestResult} from "../Screens/Algo/ReportBacktestResult";


export const AppRoutes = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Workspace />} />
                    <Route exact path='/backtest-result' element={<ReportBacktestResult />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}