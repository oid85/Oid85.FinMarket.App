import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {sagaReportBondAnalyse, sagaBondsWatchListTickers} from '../../../redux/actions/reportBondsActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'
import { FilterByLastDaysGroup } from '../../Filter/FilterByLastDaysGroup'

export const ReportBondAnalyse = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.reportBonds.reportData)
    const watchListTickers = useSelector(state => state.reportBonds.watchListTickers)
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)
    const ticker = useSelector(state => state.filter.ticker)

    useEffect(() => {
        dispatch(sagaBondsWatchListTickers())
    }, [])

    useEffect(() => {
        dispatch(sagaReportBondAnalyse())
    }, [])

    useEffect(() => {
        dispatch(sagaReportBondAnalyse())
    }, [startDate])

    useEffect(() => {
        dispatch(sagaReportBondAnalyse())
    }, [endDate])

    useEffect(() => {
        dispatch(sagaReportBondAnalyse())
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