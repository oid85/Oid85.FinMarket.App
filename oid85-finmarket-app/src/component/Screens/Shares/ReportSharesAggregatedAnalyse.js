import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaReportShareAggregatedAnalyse, sagaSharesWatchListTickers } from '../../../redux/actions/reportSharesActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'
import {FilterByLastDaysGroup} from '../../Filter/FilterByLastDaysGroup'
import {FilterByTickerGroup} from "../../Filter/FilterByTickerGroup";

export const ReportSharesAggregatedAnalyse = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.reportShares.reportData)
    const watchListTickers = useSelector(state => state.reportShares.watchListTickers)
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)
    const ticker = useSelector(state => state.filter.ticker)

    useEffect(() => {
        dispatch(sagaSharesWatchListTickers())
    }, [])

    useEffect(() => {
        dispatch(sagaReportShareAggregatedAnalyse())
    }, [])

    useEffect(() => {
        dispatch(sagaReportShareAggregatedAnalyse())
    }, [startDate])

    useEffect(() => {
        dispatch(sagaReportShareAggregatedAnalyse())
    }, [endDate])

    useEffect(() => {
        dispatch(sagaReportShareAggregatedAnalyse())
    }, [ticker])

    return (
        <React.Fragment>
            {
                !reportData.result || !watchListTickers.result || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <FilterByLastDaysGroup />
                        <FilterByTickerGroup tickers = {watchListTickers.result} />
                        <Table
                            title = {`${reportData.result.title}`}
                            reportTableData = {reportData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}