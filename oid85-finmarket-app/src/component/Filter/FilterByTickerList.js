import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import moment from 'moment'
import {useDispatch} from 'react-redux'
import {setTickerList} from '../../redux/actions/filterActions'

export const FilterByTickerList = ({key, tickerList}) => {

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
                        dispatch(setTickerList(tickerList))
                    }}
                >{tickerList}</button>
            </div>
        </React.Fragment>
    )
}
