import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import thumbnail from '../assets/thumbnail.jpg'
function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full text-center">
                <Container>
                    <div className="flex">
                 
                            <img src={thumbnail} className='' alt="" />
                            <div className='absolute p-56 left-10 animate-pulse'>
                            <h1 className="text-6xl font-extralight hover:text-gray-500 italic">
                                 Blogging
                            </h1>
                            <h1 className="text-3xl font-extralight  pt-10 hover:text-gray-500 italic ">
                                  Social Media
                            </h1>
                            <h1 className="text-6xl font-extralight  py-10 hover:text-gray-500 italic ">
                                  Sign In to experience
                            </h1>
                            </div>
                       
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8 mt-10'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home