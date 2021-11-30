import React, {useEffect, useRef, useState} from 'react';
import styles from './styles.module.scss';
import Container from "../../helpers/container";

import {combineCss} from "../../helpers/combineCss";
import {items} from "./data";
import {Progress} from "antd";

const Skills = ({currentUrl}) => {
    let [left, setLeft] = useState(false);
    useEffect(() => {
        if (currentUrl === '/skills') {
            // setTimeout(() => {
            setLeft(true)
            // }, 10000)
        }
    })
    return (
        <div className={combineCss(styles.portfolio, left && styles.active)}>
            <Container className={styles.container}>
                <h1 className={styles.logo}>Skills</h1>
                <div className={styles.box}>
                    {items.map((el) => {
                        return <div>
                            <Progress strokeLinecap="square" type="circle" percent={75}/>

                        </div>
                    })}
                </div>

            </Container>
        </div>

    )
};

export default Skills;