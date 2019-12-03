import React, { useContext } from 'react'
import Person from './Person';
import MyContext from '../context/context';


export default function Family( props ) {
    const myContext = useContext(MyContext)
    return (
        <div>
            <Person />
            <h1>{myContext.h1}</h1>
        </div>
    )
}
