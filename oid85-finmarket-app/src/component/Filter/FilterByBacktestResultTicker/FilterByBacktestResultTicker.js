import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {useDispatch} from 'react-redux'
import {setBacktestResultTicker} from '../../../redux/actions/filterActions'

export const FilterByBacktestResultTicker = ({ticker}) => {

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
                    key={ticker}
                    className='btn btn-outline-primary'
                    onClick={() => {
                        dispatch(setBacktestResultTicker(ticker))
                    }}
                >{ticker}</button>
            </div>
        </React.Fragment>
    )
}
