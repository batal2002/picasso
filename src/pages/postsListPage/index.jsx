import React from 'react';
import s from "./styles.module.css";
import PostsList from "../../widgets/PostsList";

const PostListPage = () => {
    return (
        <div className={s.wrapper}>
            <PostsList/>
        </div>
    );
};

export default PostListPage;