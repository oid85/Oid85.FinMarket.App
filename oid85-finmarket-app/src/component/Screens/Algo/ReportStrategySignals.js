import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaAlgoStrategySignals } from '../../../redux/actions/algoActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'

export const ReportStrategySignals = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const strategySignals = useSelector(state => state.algo.strategySignals)

    useEffect(() => {
        dispatch(sagaAlgoStrategySignals())
    }, [])

    return (
        <React.Fragment>
            {
                !strategySignals || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <Table
                            title = {`Сигналы`}
                            reportTableData = {strategySignals} />
                    </div>                    
            }
        </React.Fragment>
    )
}