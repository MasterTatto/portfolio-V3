import React from 'react';
import styles from './styles.module.scss';
import {combineCss} from '../../helpers/combineCss';
import Container from '../../helpers/container';
import MapContact from "./map";
import FormContact from "./form";

const Contact = () => {

    return (
        <div className={combineCss(styles.contact)}>
            <Container>
                <FormContact/>
                <MapContact/>
            </Container>
        </div>
    );
};

export default Contact;
