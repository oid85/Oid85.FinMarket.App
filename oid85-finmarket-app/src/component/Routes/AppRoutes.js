import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Workspace} from '../Workspace/Workspace'
import {ReportSuperTrend} from '../Report/ReportSuperTrend'
import {ReportCandleSequence} from '../Report/ReportCandleSequence'

export const AppRoutes = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Workspace />} />
                    <Route exact path="/report-supertrend" element={<ReportSuperTrend />} />
                    <Route exact path="/report-candle-sequence" element={<ReportCandleSequence />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}