import React from 'react'
import { Link } from 'react-router-dom'

function LinkBtn({title, to }) {
    return (
        <Link to={to} className='px-5 py-1 my-5 bg-blue-500 text-white w-fit rounded-md'>{title}</Link>
    )
}

export default LinkBtn