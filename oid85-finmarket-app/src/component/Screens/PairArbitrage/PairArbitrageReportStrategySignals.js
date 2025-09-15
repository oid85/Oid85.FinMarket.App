import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaPairArbitrageStrategySignals } from '../../../redux/actions/pairArbitrageActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'

export const PairArbitrageReportStrategySignals = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.pairArbitrage.reportData)

    useEffect(() => {
        dispatch(sagaPairArbitrageStrategySignals())
    }, [])

    console.log(reportData)

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