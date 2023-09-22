import React from 'react';
import {useParams} from "react-router-dom";
import {postAPI} from "../../shared/api/postAPI";
import PostInfo from "../../entities/PostInfo/PostInfo";
import Preloader from "../../shared/ui/Preloader/Preloader";

const PostPage = () => {
    const id = useParams().id

    const {data, error, isLoading} = postAPI.useFetchCurrentPostQuery(id)

    if (error) return <h2>{error.error}</h2>

    if (isLoading) return <Preloader/>
    return (
        <div>
            <PostInfo id={data.id} title={data.title} body={data.body}/>
        </div>
    );
};

export default PostPage;