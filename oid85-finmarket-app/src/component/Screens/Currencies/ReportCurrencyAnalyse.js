import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {sagaReportCurrencyAnalyse, sagaCurrenciesWatchListTickers} from '../../../redux/actions/reportCurrenciesActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'
import { FilterByLastDaysGroup } from '../../Filter/FilterByLastDaysGroup'

export const ReportCurrencyAnalyse = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.reportCurrencies.reportData)
    const watchListTickers = useSelector(state => state.reportCurrencies.watchListTickers)
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)
    const ticker = useSelector(state => state.filter.ticker)

    useEffect(() => {
        dispatch(sagaCurrenciesWatchListTickers())
    }, [])

    useEffect(() => {
        dispatch(sagaReportCurrencyAnalyse())
    }, [])

    useEffect(() => {
        dispatch(sagaReportCurrencyAnalyse())
    }, [startDate])

    useEffect(() => {
        dispatch(sagaReportCurrencyAnalyse())
    }, [endDate])

    useEffect(() => {
        dispatch(sagaReportCurrencyAnalyse())
    }, [ticker])

    return (
        <React.Fragment>
            {
                !reportData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <FilterByLastDaysGroup/>
                        <Table
                            title = {`${reportData.result.title}`}
                            reportTableData = {reportData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}