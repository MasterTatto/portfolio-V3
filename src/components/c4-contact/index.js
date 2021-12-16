import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss';
import {combineCss} from '../../helpers/combineCss';
import Container from '../../helpers/container';

import MapContact from "./map";
import FormContact from "./form";

const Contact = ({currentUrl}) => {
    let [left, setLeft] = useState(false);
    useEffect(() => {
        if (currentUrl === '/contact') {
            setTimeout(() => {
                setLeft(true);
            }, 0);
        }
    });


    return (
        <div className={combineCss(styles.contact, left && styles.active)}>
            <Container>
                <FormContact/>
                <MapContact/>
            </Container>
        </div>
    );
};

export default Contact;
