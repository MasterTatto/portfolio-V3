import React, {useEffect, useRef, useState} from 'react';
import styles from './styles.module.scss';
import {combineCss} from "../../helpers/combineCss";
import {items} from "./data";
import Container from "../../helpers/container";
import Fullitems from "./fullitems";

const Portfolio = ({currentUrl,data}) => {
    let [left, setLeft] = useState(false);
    useEffect(() => {
        if (currentUrl === '/portfolio') {
            setTimeout(() => {
                setLeft(true)
            }, 0)
        }
    })

    return (
        <div className={combineCss(styles.portfolio, left && styles.active)}>
            <Container className={styles.container}>
                <Fullitems data={data}/>
            </Container>
        </div>

    )
};

export default Portfolio;