import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {useDispatch} from 'react-redux'
import {setBacktestResultStrategyName} from '../../../redux/actions/filterActions'

export const FilterByBacktestResultStrategyName = ({strategyName}) => {

    const dispatch = useDispatch()
    
    return (
        <React.Fragment>
            <div>
                <button
                    style={{
                        width: 80,
                        margin: 1,
                        fontSize: 10
                    }}
                    key={days}
                    className='btn btn-outline-primary'
                    onClick={() => {
                        dispatch(setBacktestResultStrategyName(strategyName))
                    }}
                >{strategyName}</button>
            </div>
        </React.Fragment>
    )
}
