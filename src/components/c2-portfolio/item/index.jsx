import React from 'react';
import styles from './styles.module.scss'
import {useParams} from "react-router-dom";

const Item = ({data}) => {
    const {title} = useParams()


    return (
        <div className={styles.box}>
            {data.filter((f) => f.title === title).map((el) => {
                return <div className={styles.aboutWork} key={el.title}>

                    <div className={styles.wrapper}>

                        <div className={styles.left}>
                            <div className={styles.imgBox}>
                                <div className={styles.img} style={{backgroundImage: `url(${el.img})`}}/>
                            </div>
                        </div>

                        <div className={styles.right}>

                            <div className={styles.text}>
                                <h1>{el.title}</h1>
                                <p>{el.description}</p>
                                <span>{el.stack}</span>
                            </div>

                            <div className={styles.btn}>
                                <a rel="noreferrer" href={'/'} className={styles.linkInfo} target={'_blank'}>View
                                    code</a>
                                <a rel="noreferrer" href={'/'} className={styles.linkInfo} target={'_blank'}>View
                                    demo</a>
                            </div>

                        </div>
                    </div>
                </div>
            })}
        </div>
    );
};

export default Item;
