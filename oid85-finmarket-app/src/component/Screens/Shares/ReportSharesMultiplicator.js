import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaReportSharesMultiplicator } from '../../../redux/actions/reportSharesActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'

export const ReportSharesMultiplicator = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.reportShares.reportData)

    useEffect(() => {
        dispatch(sagaReportSharesMultiplicator())
    }, [])

    return (
        <React.Fragment>
            {
                !reportData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <Table
                            title = {`${reportData.result.title}`}
                            reportTableData = {reportData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}