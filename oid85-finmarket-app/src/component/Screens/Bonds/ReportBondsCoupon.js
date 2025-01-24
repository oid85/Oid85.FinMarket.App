import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaReportBondsCoupon } from '../../../redux/actions/reportBondsActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'
import {FilterByLastDaysGroup} from '../../Filter/FilterByLastDaysGroup'

export const ReportBondsCoupon = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.reportShares.reportData)

    useEffect(() => {
        dispatch(sagaReportBondsCoupon())
    }, [])

    return (
        <React.Fragment>
            {
                !reportData.result || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <FilterByLastDaysGroup />
                        <Table
                            title = {`${reportData.result.title}`}
                            reportTableData = {reportData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}