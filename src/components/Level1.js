import React, { useState } from 'react'
import Level2 from './Level2'

function Level1() {
  const [likes, setLikes] = useState(0)
  return (
    <div>
      <button
        onClick={() => {
          setLikes(likes + 1)
        }}
      >
        likes {likes}
      </button>
      <Level2 />
    </div>
  )
}

export default Level1
