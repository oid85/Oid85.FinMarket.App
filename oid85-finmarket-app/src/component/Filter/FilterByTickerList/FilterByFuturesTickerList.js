import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {useDispatch} from 'react-redux'
import {setFuturesTickerList} from '../../../redux/actions/filterActions'

export const FilterByFuturesTickerList = ({key, tickerList}) => {

    const dispatch = useDispatch()
    
    return (
        <React.Fragment>
            <div>
                <button
                style={{
                    width: 75,
                    margin: 1
                }}
                    key={key}
                    className='btn btn-outline-primary'
                    onClick={() => {
                        dispatch(setFuturesTickerList(tickerList))
                    }}
                >{tickerList}</button>
            </div>
        </React.Fragment>
    )
}
