import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaAlgoBacktestResults } from '../../../redux/actions/algoActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'

export const ReportBacktestResults = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const backtestResults = useSelector(state => state.algo.backtestResults)

    useEffect(() => {
        dispatch(sagaAlgoBacktestResults())
    }, [])

    return (
        <React.Fragment>
            {
                !backtestResults || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <Table
                            title = {`Бэктест`}
                            reportTableData = {backtestResults} />
                    </div>                    
            }
        </React.Fragment>
    )
}