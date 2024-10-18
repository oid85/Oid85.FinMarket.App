import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Workspace} from '../Workspace/Workspace'
import {ReportSuperTrend} from '../Report/ReportSuperTrend'
import {ReportCandleSequence} from '../Report/ReportCandleSequence'
import {ReportStock} from '../Report/ReportStock'

export const AppRoutes = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Workspace />} />
                    <Route exact path='/report-supertrend' element={<ReportSuperTrend />} />
                    <Route exact path='/report-candle-sequence' element={<ReportCandleSequence />} />
                    <Route exact path='/report-stock' element={<ReportStock />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}