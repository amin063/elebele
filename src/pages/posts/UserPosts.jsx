import React, { useEffect, useState } from 'react'
import { postServices } from '../../services/PostServices'
import { useParams } from 'react-router-dom'
import PostCard from '../../components/cards/postCard/PostCard'

function UserPosts() {
  const { id } = useParams()
  const [posts, setPosts] = useState([])
  useEffect(() => {
    postServices.getUserPosts(id).then((data) => setPosts(data))
  }, [id])
  console.log(id);
  
  console.log(posts);

  return (
    <div className='w-[70%] m-auto'>
      {
        posts.map((post) => <PostCard key={post.id} {...post} />)
      }
    </div>
  )
}

export default UserPosts