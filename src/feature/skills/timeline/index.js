import React, {useState} from 'react';
import styles from './styles.module.scss'
import {timeLine} from "./data";

const TimeLine = () => {
    return (
        <>
            <h1 className={styles.logo}>Expirians</h1>
            <div className={styles.box_item}>
                {timeLine.map((el) => {
                    return <div className={styles.item}>
                        <p className={styles.data}>{el.data}</p>
                        <span></span>
                        <p className={styles.description}>{el.description}</p>
                    </div>
                })}
            </div>
        </>
    );
};

export default TimeLine;
