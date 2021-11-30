import React, {useEffect, useRef, useState} from 'react';
import styles from './styles.module.scss';
import {combineCss} from "../../helpers/combineCss";

const Resume = ({currentUrl}) => {
    let [left, setLeft] = useState(false);
    useEffect(() => {
        if (currentUrl === '/resume') {
            setTimeout(() => {
                setLeft(true)
            }, 0)
        }
    })
    return (
        <div className={combineCss(styles.portfolio, left && styles.active)}>
            <h1>Resume</h1>
        </div>

    )
};

export default Resume;