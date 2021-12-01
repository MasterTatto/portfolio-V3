import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss';
import Container from "../../helpers/container";
import {combineCss} from "../../helpers/combineCss";
import {items} from "./data";
import {useWindowSize} from "../../helpers/windowsSize";
import ProgressBar from "../Progress";
import TimeLine from "./timeline";

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
                            <ProgressBar title={el.title} percent={el.percent} widthProgress={widthProgress}/>
                        </div>
                    })}
                </div>
                <TimeLine/>
            </Container>
        </div>

    )
};

export default Skills;