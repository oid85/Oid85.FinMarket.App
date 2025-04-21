import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaReportBondsMarketEvent } from '../../../redux/actions/reportBondsActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'
import {FilterByBondsTickerListGroup} from "../../Filter/FilterByTickerList/FilterByBondsTickerListGroup";

export const ReportBondsMarketEvent = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.reportBonds.reportData)
    const tickerList = useSelector(state => state.filter.bondsTickerList)

    useEffect(() => {
        dispatch(sagaReportBondsMarketEvent())
    }, [])

    useEffect(() => {
        dispatch(sagaReportBondsMarketEvent())
    }, [tickerList])

    return (
        <React.Fragment>
            {
                !reportData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <FilterByBondsTickerListGroup />
                        <Table
                            title = {`${reportData.result.title}`}
                            reportTableData = {reportData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}