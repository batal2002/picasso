import React from 'react';
import LinkTo from "../../shared/ui/LinkTo";
import s from './styles.module.css'

const PostInfo = ({id, title, body}) => {

    return (
        <div className={s.wrapper}>
            <h3 className={s.title}>{id}. {title}</h3>
            <p className={s.body}>{body}</p>
            <LinkTo link={`/posts/`}>Go back</LinkTo>
        </div>
    );
};

export default PostInfo;