import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { userService } from '../../services/UserService';
import DetailsCard from '../../components/cards/detailsCard/DetailsCard';

function UserDetails() {
  const [user, setUser] = useState({})
  const { id } = useParams()
  useEffect(() => {
    userService.getUser(id).then((data) => setUser(data))
  }, [])


  return (
    <div className='w-[70%] m-auto'>
      <DetailsCard {...user} />
    </div>
  )
}

export default UserDetails