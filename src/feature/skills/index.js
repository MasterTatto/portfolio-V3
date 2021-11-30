import React, {useEffect, useRef, useState} from 'react';
import styles from './styles.module.scss';
import Container from "../../helpers/container";
// import 'antd/dist/antd.css';
import {combineCss} from "../../helpers/combineCss";
import {items} from "./data";
import {Progress} from "antd";
import Bubble from "../../helpers/bubble";
import {useWindowSize} from "../../helpers/windowsSize";

const Skills = ({currentUrl}) => {
    let [left, setLeft] = useState(false);
    const {width} = useWindowSize()

    const widthProgress = ((width < 1200 && width > 450) && 100) || (width < 450 && 80) || 130

    useEffect(() => {
        if (currentUrl === '/skills') {
            setLeft(true)
        }
    }, [currentUrl])
    return (
        <div className={combineCss(styles.skills, left && styles.active)}>
            <Container className={styles.container}>
                <h1 className={styles.logo}>Skills</h1>
                <div className={styles.box}>
                    {/*<div className={styles.line}></div>*/}
                    {items.map((el) => {
                        return <div className={styles.item}>
                            <Progress strokeLinecap="square" type="circle"
                                      status={'normal'} percent={el.percent}
                                      strokeColor={'#08fdd8'} strokeWidth={10} width={widthProgress}
                                      trailColor={'#fff'}/>
                            <p>{el.title}</p>
                        </div>
                    })}
                </div>
            </Container>
            <Bubble size={25}/>
        </div>

    )
};

export default Skills;