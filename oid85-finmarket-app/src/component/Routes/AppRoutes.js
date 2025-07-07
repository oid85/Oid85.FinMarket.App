import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Workspace} from '../Workspace/Workspace'
import {ReportBacktestResultById} from "../Screens/Algo/ReportBacktestResultById";
import {ReportBacktestResultByTicker} from "../Screens/Algo/ReportBacktestResultByTicker";


export const AppRoutes = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Workspace />} />
                    <Route exact path='/backtest-result-by-id' element={<ReportBacktestResultById />} />
                    <Route exact path='/backtest-result-by-ticker' element={<ReportBacktestResultByTicker />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}