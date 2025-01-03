import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { FilterMarket } from '../../Filter/FilterMarket'
import {sagaReportSharesCandleVolume, sagaSharesWatchListTickers} from '../../../redux/actions/reportSharesActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'

export const ReportSharesCandleVolume = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.reportShares.reportData)
    const startDate = useSelector(state => state.filter.startDate)
    const endDate = useSelector(state => state.filter.endDate)

    useEffect(() => {
        dispatch(sagaSharesWatchListTickers())
    }, [])

    useEffect(() => {
        dispatch(sagaReportSharesCandleVolume())
    }, [])

    useEffect(() => {
        dispatch(sagaReportSharesCandleVolume())
    }, [startDate])

    useEffect(() => {
        dispatch(sagaReportSharesCandleVolume())
    }, [endDate])

    return (
        <React.Fragment>
            {
                !reportData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <FilterMarket />
                        <Table 
                            title = {`${reportData.result.title}: ${startDate} - ${endDate}`}
                            reportTableData = {reportData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}