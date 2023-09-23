import React, {useEffect, useRef, useState} from 'react';
import {postAPI} from "../../shared/api/postAPI";
import Post from "../../entities/Post";
import Preloader from "../../shared/ui/Preloader";
import {useObserver} from "../../shared/lib/hooks/useObserver";

const PostsList = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [list, setList] = useState([])
    const [limit, setLimit] = useState(10)
    const {data, error, isLoading} = postAPI.useFetchAllPostsQuery({limit, page: currentPage})
    const lastElement = useRef(null)
    let totalPages = 100 / limit

    useObserver(lastElement, currentPage < totalPages, isLoading, () => {
        setLoading(true)
        setCurrentPage(currentPage + 1)
    }, [list])

    useEffect(() => {
        if (!isLoading && data) {
            setList([...list, ...data])
            setLoading(false)
        }
    }, [data])

    if (error) return <h2>{error.error}</h2>

    if (isLoading) return <Preloader/>

    return (<div>
        {list.map(post => <Post key={post.id} id={post.id} title={post.title} body={post.body}/>)}
        {loading && <Preloader/>}
        <div ref={lastElement} style={{height: 2}}></div>
    </div>)
};

export default PostsList;