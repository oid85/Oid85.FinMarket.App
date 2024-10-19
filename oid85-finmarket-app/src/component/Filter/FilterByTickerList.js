import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {useDispatch} from 'react-redux'
import {setTickerList} from '../../redux/actions/filterActions'

export const FilterByTickerList = ({key, name, text}) => {

    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <div>
                <button
                style={{
                    width: 90,
                    margin: 1
                }}
                    key={key}
                    className='btn btn-outline-primary'
                    onClick={() => {
                        dispatch(setTickerList(name))
                    }}
                >{text}</button>
            </div>
        </React.Fragment>
    )
}