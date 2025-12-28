import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(()=> {
    //     fetch(`https://api.github.com/users/Niraj-Kumar-Chauhan`)
    //     .then((res) => res.json())
    //     .then(res => setData(res))
    //     console.log(data)
        
    // }, [])

    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github followings : {data.following}
        <img src={data.avatar_url} alt="img" />
    </div>
  )
}

export const githubInfo = async() => {
    const response =  await fetch(`https://api.github.com/users/Niraj-Kumar-Chauhan`)
    return response.json()
}

export default Github