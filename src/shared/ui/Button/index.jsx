import React from 'react';
import {Link} from "react-router-dom";
import s from './styles.module.css'

const Button = ({children, onClick}) => {
    return (
        <button onClick={onClick} className={s.btn}>{children}</button>
    );
};

export default Button;