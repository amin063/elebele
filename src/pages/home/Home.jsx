import React, { useEffect, useState } from 'react'
import UserCard from '../../components/cards/userCard/UserCard'
import { userService } from '../../services/UserService'

function Home() {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        userService.getUsers().then((data) => setUsers(data))
    }, [])
    console.log(users);
    
    return (
        <div className='flex flex-col gap-5 w-[70%] m-auto'>
            {
                users.map((user) => <UserCard key={user.id} {...user}/>)
            }
        </div>
    )
}

export default Home