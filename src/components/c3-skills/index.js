import React from 'react';
import styles from './styles.module.scss';
import Container from "../../helpers/container";
import {combineCss} from "../../helpers/combineCss";
import {items} from "./data";
import {useWindowSize} from "../../helpers/windowsSize";
import ProgressBar from "./Progress";
import TimeLine from "./timeline";

const Skills = () => {
    const {width} = useWindowSize()
    const widthProgress = ((width < 1200 && width > 450) && 100) || (width < 450 && 80) || 130
    console.log('render')
    return (
        <div className={combineCss(styles.skills)}>
            <Container className={styles.container}>
                <h1 className={styles.logo}>Skills</h1>
                <div className={styles.box}>
                    {items.map((el, i) => {
                        return <div className={styles.item} key={i}>
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