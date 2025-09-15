import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {sagaPairArbitrageBacktestResultById} from '../../../redux/actions/pairArbitrageActions'
import './PairArbitrageBacktestResult.css'
import {PairArbitrageBacktestResultDiagram} from "../../Diagram/PairArbitrageBacktestResultDiagram";

export const PairArbitrageReportBacktestResultById = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const backtestResultData = useSelector(state => state.pairArbitrage.backtestResultData)

    useEffect(() => {
        dispatch(sagaPairArbitrageBacktestResultById())
    }, [])

    return (
        <React.Fragment>
            {
                !backtestResultData || loading
                    ? <Loader/>
                    :
                    <div className='backtest-result-container'>
                        <PairArbitrageBacktestResultDiagram data = {{...{...{...backtestResultData.result}.diagramData}.data}.series} />
                    </div>
            }
        </React.Fragment>
    )
}