import React from 'react'

function PostCard({title}) {
  return (
    <div className='flex flex-col border-b-2 w-[100%] mb-5'>{title}</div>
  )
}

export default PostCard