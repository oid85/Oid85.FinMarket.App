import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaReportIndexesMarketEvent } from '../../../redux/actions/reportIndexesActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'
import {FilterByIndexesTickerListGroup} from "../../Filter/FilterByTickerList/FilterByIndexesTickerListGroup";

export const ReportIndexesMarketEvent = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.reportIndexes.reportData)
    const tickerList = useSelector(state => state.filter.indexesTickerList)

    useEffect(() => {
        dispatch(sagaReportIndexesMarketEvent())
    }, [])

    useEffect(() => {
        dispatch(sagaReportIndexesMarketEvent())
    }, [tickerList])

    return (
        <React.Fragment>
            {
                !reportData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <FilterByIndexesTickerListGroup />
                        <Table
                            title = {`${reportData.result.title}`}
                            reportTableData = {reportData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}