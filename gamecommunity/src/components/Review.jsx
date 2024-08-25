import React from 'react'
import { useParams } from 'react-router-dom'

function Review() {

    const {name}=useParams()

    return (
        <p className='text-white'> Heyyyyy  {name}</p>
    )
}

export default Review
