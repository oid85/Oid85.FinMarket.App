import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {sagaAlgoBacktestResultById} from '../../../redux/actions/algoActions'
import './BacktestResult.css'
import {BacktestResultDiagram} from "../../Diagram/BacktestResultDiagram";
import {Table} from "../../Report/Table";

export const ReportBacktestResultById = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const backtestResultData = useSelector(state => state.algo.backtestResultData)

    useEffect(() => {
        dispatch(sagaAlgoBacktestResultById())
    }, [])

    return (
        <React.Fragment>
            {
                !backtestResultData || loading
                    ? <Loader/>
                    :
                    <div className='backtest-result-container'>
                        <BacktestResultDiagram backtestResultData = {backtestResultData.diagramData} />
                        <Table
                            title = {`${backtestResultData.reportData.result.title}`}
                            reportTableData = {backtestResultData.reportData.result} />
                    </div>
            }
        </React.Fragment>
    )
}