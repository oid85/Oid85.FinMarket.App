import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaReportFuturesSpread } from '../../../redux/actions/reportFuturesActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'
import {FilterByFuturesTickerListGroup} from "../../Filter/FilterByTickerList/FilterByFuturesTickerListGroup";

export const ReportFuturesSpread = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.reportFutures.reportData)
    const tickerList = useSelector(state => state.filter.futuresTickerList)

    useEffect(() => {
        dispatch(sagaReportFuturesSpread())
    }, [])

    useEffect(() => {
        dispatch(sagaReportFuturesSpread())
    }, [tickerList])

    return (
        <React.Fragment>
            {
                !reportData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <FilterByFuturesTickerListGroup />
                        <Table
                            title = {`${reportData.result.title}`}
                            reportTableData = {reportData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}