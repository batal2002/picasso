import React from 'react';
import {Link} from "react-router-dom";
import s from './styles.module.css'

const LinkTo = ({children, link}) => {
    return (
        <Link to={link} className={s.link}>{children}</Link>
    );
};

export default LinkTo;