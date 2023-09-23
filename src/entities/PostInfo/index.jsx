import React from 'react';
import LinkTo from "../../shared/ui/LinkTo";
import s from './styles.module.css'
import {useNavigate} from "react-router-dom";
import Button from "../../shared/ui/Button";

const PostInfo = ({id, title, body}) => {
    const navigate = useNavigate();
    return (
        <div className={s.wrapper}>
            <h3 className={s.title}>{id}. {title}</h3>
            <p className={s.body}>{body}</p>

            <Button onClick={() => navigate(-1)}>Go back</Button>
        </div>
    );
};

export default PostInfo;