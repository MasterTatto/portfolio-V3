import React from 'react';
import styles from './styles.module.scss'
import {timeLine} from "./data";

const TimeLine = () => {

    return (
        <>
            <h1 className={styles.logo}>Expereans</h1>
            <div className={styles.box_item}>
                {timeLine.map((el) => {
                    return <div className={styles.item} key={el.data}>
                        <p className={styles.data}>{el.data}</p>
                        <span/>
                        <p className={styles.description}>{el.description}</p>
                    </div>
                })}
            </div>
        </>
    );
};

export default TimeLine;
