import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Workspace} from '../Workspace/Workspace'
import {SharesScreen} from '../Screens/Shares/SharesScreen'
import {ReportSharesSuperTrend} from '../Screens/Shares/ReportSharesSuperTrend'
import {ReportSharesCandleSequence} from '../Screens/Shares/ReportSharesCandleSequence'
import {ReportSharesCandleVolume} from '../Screens/Shares/ReportSharesCandleVolume'
import {ReportSharesRsi} from '../Screens/Shares/ReportSharesRsi'
import {ReportShareAnalyse} from '../Screens/Shares/ReportShareAnalyse'
import {ReportDividends} from '../Screens/Shares/ReportDividends'
import {ReportBonds} from '../Screens/Bonds/ReportBonds'


export const AppRoutes = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Workspace />} />
                    <Route exact path='/tech-analyse' element={<SharesScreen />} />
                    <Route exact path='/report-supertrend' element={<ReportSharesSuperTrend />} />
                    <Route exact path='/report-candle-sequence' element={<ReportSharesCandleSequence />} />
                    <Route exact path='/report-candle-volume' element={<ReportSharesCandleVolume />} />
                    <Route exact path='/report-rsi' element={<ReportSharesRsi />} />
                    <Route exact path='/report-dividends' element={<ReportDividends />} />
                    <Route exact path='/report-bonds' element={<ReportBonds />} />
                    <Route exact path='/report-stock' element={<ReportShareAnalyse />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}