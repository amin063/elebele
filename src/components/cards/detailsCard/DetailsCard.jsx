import React from 'react'
import LinkBtn from '../../link'


function DetailsCard({ id, name, username, email, phone, address }) {


    return (
        <div className='flex flex-col gap-2 my-5  w-[100%]'>

            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>hone: {phone}</p>


            <p>Street: {address?.street}</p>
            <p>Suite: {address?.suite}</p>
            <p>City: {address?.city}</p>
            <p>Zipcode: {address?.zipcode}</p>
            <div className='flex gap-5'>
                <LinkBtn title={"View Posts"} to={`/post/${id}`} />
                <LinkBtn title={"View Todos"} to={`/todo/${id}`} />
            </div>

        </div>
    )
}

export default DetailsCard