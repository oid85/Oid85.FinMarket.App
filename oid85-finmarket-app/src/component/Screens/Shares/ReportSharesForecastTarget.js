import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaReportSharesForecastTarget } from '../../../redux/actions/reportSharesActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'
import {FilterBySharesTickerListGroup} from "../../Filter/FilterByTickerList/FilterBySharesTickerListGroup";

export const ReportSharesForecastTarget = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.reportShares.reportData)
    const tickerList = useSelector(state => state.filter.sharesTickerList)

    useEffect(() => {
        dispatch(sagaReportSharesForecastTarget())
    }, [])

    useEffect(() => {
        dispatch(sagaReportSharesForecastTarget())
    }, [tickerList])

    return (
        <React.Fragment>
            {
                !reportData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <FilterBySharesTickerListGroup />
                        <Table
                            title = {`${reportData.result.title}`}
                            reportTableData = {reportData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}