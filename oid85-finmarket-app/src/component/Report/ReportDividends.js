import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../Loader/Loader'
import { sagaReportDividends } from '../../redux/actions/reportActions'
import './Report.css'
import { Table } from './Table'

export const ReportDividends = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.report.reportData)   

    useEffect(() => {
        dispatch(sagaReportDividends())
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