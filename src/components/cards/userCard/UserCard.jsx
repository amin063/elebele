import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LinkBtn from '../../link'

function UserCard({id, name, username, email, phone, address }) {
   
    return (
        <div className='flex flex-col border-b-2 w-[100%]'>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <LinkBtn  to={`details/${id}`} title={"View Details"}/>
        </div>
    )
}

export default UserCard