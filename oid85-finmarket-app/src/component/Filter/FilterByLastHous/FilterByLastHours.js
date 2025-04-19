import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import moment from 'moment'
import {useDispatch} from 'react-redux'
import {setEndDateTime, setStartDateTime} from '../../../redux/actions/filterActions'

export const FilterByLastHours = ({hours}) => {

    const dispatch = useDispatch()
    
    return (
        <React.Fragment>
            <div>
                <button
                style={{
                    width: 75,
                    margin: 1
                }}
                    key={hours}
                    className='btn btn-outline-primary'
                    onClick={() => {
                        dispatch(setStartDateTime(moment()
                            .subtract(parseInt(hours), 'hours')
                            .format('YYYY-MM-DD HH:mm:ss')
                            .toString()))
                        dispatch(setEndDateTime(moment()
                            .format('YYYY-MM-DD HH:mm:ss')
                            .toString()))
                    }}
                >{parseInt(hours)} ч</button>
            </div>
        </React.Fragment>
    )
}
