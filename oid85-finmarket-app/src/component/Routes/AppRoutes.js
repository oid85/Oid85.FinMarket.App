import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Workspace} from '../Workspace/Workspace'
import {AlgoReportBacktestResultById} from "../Screens/Algo/AlgoReportBacktestResultById";
import {AlgoReportBacktestResultByTicker} from "../Screens/Algo/AlgoReportBacktestResultByTicker";


export const AppRoutes = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Workspace />} />
                    <Route exact path='/backtest-result-by-id' element={<AlgoReportBacktestResultById />} />
                    <Route exact path='/backtest-result-by-ticker' element={<AlgoReportBacktestResultByTicker />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}