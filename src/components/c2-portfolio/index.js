import React from 'react';
import styles from './styles.module.scss';
import {combineCss} from "../../helpers/combineCss";
import Container from "../../helpers/container";
import FullItems from "./fullitems";

const Portfolio = ({data}) => {
    return (
        <div className={combineCss(styles.portfolio)}>
            <Container className={styles.container}>
                <FullItems data={data}/>
            </Container>
        </div>

    )
};

export default Portfolio;