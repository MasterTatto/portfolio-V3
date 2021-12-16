import React from "react";
import styles from './styles.module.scss'
import {NavLink} from "react-router-dom";

const Fullitems = ({data}) => {

    return (
        <div className={styles.box}>

            {data.map((el) => {
                return <div className={styles.item}>
                    <div className={styles.boxImg} style={{backgroundImage: `url(${el.img})`}}/>

                    <div className={styles.boxInfo}>
                        <h1 className={styles.title}>{el.title}</h1>
                        <NavLink to={`/portfolio/${el.title}`} className={styles.link}>View page</NavLink>
                    </div>


                </div>
            })}
        </div>
    );
};

export default Fullitems;
