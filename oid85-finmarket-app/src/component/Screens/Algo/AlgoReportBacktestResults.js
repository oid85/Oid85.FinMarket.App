import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import { sagaAlgoBacktestResults } from '../../../redux/actions/algoActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'
import { FilterByBacktestResultTickerGroup } from "../../Filter/FilterByBacktestResultTicker/FilterByBacktestResultTickerGroup";
import { FilterByBacktestResultStrategyNameGroup} from "../../Filter/FilterByBacktestResultStrategyName/FilterByBacktestResultStrategyNameGroup";

export const AlgoReportBacktestResults = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const reportData = useSelector(state => state.algo.reportData)
    const ticker = useSelector(state => state.filter.backtestResultTicker)
    const strategyName = useSelector(state => state.filter.backtestResultStrategyName)

    useEffect(() => {
        dispatch(sagaAlgoBacktestResults())
    }, [])

    useEffect(() => {
        dispatch(sagaAlgoBacktestResults())
    }, [ticker, strategyName])

    return (
        <React.Fragment>
            {
                !reportData || loading
                    ? <Loader/>
                    :                    
                    <div className='report-container'>
                        <FilterByBacktestResultTickerGroup />
                        <FilterByBacktestResultStrategyNameGroup />
                        <Table
                            title = {`${reportData.result.title}`}
                            reportTableData = {reportData.result} />
                    </div>                    
            }
        </React.Fragment>
    )
}