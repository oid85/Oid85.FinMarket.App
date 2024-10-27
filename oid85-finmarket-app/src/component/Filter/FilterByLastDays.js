import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import moment from 'moment'
import {useDispatch} from 'react-redux'
import {setEndDate, setStartDate} from '../../redux/actions/filterActions'

export const FilterByLastDays = ({key, days}) => {

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
                        dispatch(setStartDate(moment()
                            .subtract(parseInt(days) - 1, 'days')
                            .format('YYYY-MM-DD')
                            .toString()))
                        dispatch(setEndDate(moment()
                            .format('YYYY-MM-DD')
                            .toString()))
                    }}
                >{parseInt(days)} дн</button>
            </div>
        </React.Fragment>
    )
}