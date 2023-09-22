import React from 'react';
import s from "./styles.module.css";
import PostsList from "../../widgets/PostsList/PostsList";

const postListPage = () => {
    return (
        <div className={s.wrapper}>
            <PostsList/>
        </div>
    );
};

export default postListPage;