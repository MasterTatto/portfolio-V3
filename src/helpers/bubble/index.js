import React from 'react';
import styles from "./styles.module.scss"
import {randomNumber} from "../randomNumber";
import {combineCss} from "../combineCss";

const Bubble = ({size}) => {
    const bubbles = Array.from({length: size}, (v, k) => k)
    return (
        <div>
            {bubbles.map((el) => {
                return <div className={combineCss(styles.dot)}
                            style={{left: `${randomNumber(0, 90)}%`, animationDuration: `${randomNumber(4, 10)}s`}}
                            key={el}>
                    <div className={styles.dota}>*</div>
                </div>
            })
            }
        </div>
    );
};

export default Bubble;
