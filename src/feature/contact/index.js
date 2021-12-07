import React, {useEffect, useRef, useState} from 'react';
import styles from './styles.module.scss';
import {combineCss} from '../../helpers/combineCss';
import {ReactComponent as ContactMe} from '../../assets/icons/shake.svg';
import {ReactComponent as Sucsses} from '../../assets/icons/sucses.svg';
import Container from '../../helpers/container';
import emailjs from 'emailjs-com';
import {init} from 'emailjs-com';
import {useFormik} from "formik";
import {validate} from "../../helpers/validate";
import {TextField} from "@mui/material";

const Contact = ({currentUrl}) => {
    init('user_o9lBAZW5hXTb1BQ0r6faI');
    const form = useRef();
    let [left, setLeft] = useState(false);
    const [sucsses, setSucsses] = useState(false);
    const [disabled, setDisabled] = useState(false);


    useEffect(() => {
        if (currentUrl === '/contact') {
            setTimeout(() => {
                setLeft(true);
            }, 0);
        }
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            messages: '',
        },
        validate: (values) => validate(values),
        onSubmit: values => {
            sendEmail()
        }
    })

    const checkedValidate = !formik.errors.email && !formik.errors.name && !formik.errors.messages;

    console.log(checkedValidate)

    const sendEmail = (e) => {
        e.preventDefault(e);
        formik.handleSubmit(e)

        if (!checkedValidate) return
        setDisabled(true)
        emailjs.sendForm('service_elap3uh', 'template_2gya86a', form.current, 'user_o9lBAZW5hXTb1BQ0r6faI')
        .then((result) => {

                setDisabled(false)
                setSucsses(true)

                setTimeout(() => {
                    setSucsses(false)
                    formik.resetForm(e)
                }, 3000)
            },
            (error) => {
                console.log(error.text);
            }
        );
    };
    console.log(formik.errors)


    return (
        <div className={combineCss(styles.portfolio, left && styles.active)}>
            <div className={combineCss(styles.alert, sucsses && styles.active)}>
                <Sucsses className={styles.sucses}/>
                <p>Thanks {formik.values.name} for messages</p>
            </div>
            <Container>
                <div className={styles.wrapper}>

                    <div className={styles.imgBox}>
                        <h1 className={styles.logo}>Contact</h1>
                        <ContactMe className={styles.img}/>
                    </div>
                    <div className={styles.inputsBox}>

                        <form ref={form} className={styles.formStyles} onSubmit={sendEmail}>
                            <div className={styles.topInputs}>

                                <TextField name='name' className={combineCss(styles.input)} type='text'
                                           label='Name'
                                           error={!!formik.errors.name && formik.touched.name}
                                           helperText={formik.touched.name ? formik.errors.name : null}
                                           {...formik.getFieldProps('name')}
                                           InputLabelProps={{className: styles.test__label}}
                                           InputProps={{className: styles.test__input}}/>


                                <TextField name='email' className={combineCss(styles.input)} type='text'
                                           label='Email'
                                           error={!!formik.errors.email && formik.touched.email}
                                           helperText={formik.touched.email ? formik.errors.email : null}
                                           {...formik.getFieldProps('email')}
                                           InputLabelProps={{className: styles.test__label}}
                                           InputProps={{className: styles.test__input}}/>
                            </div>


                            <TextField name={'subject'} className={combineCss(styles.input)} type='text'
                                       label='Subject' {...formik.getFieldProps('subject')}
                                       InputLabelProps={{className: styles.test__label}}
                                       InputProps={{className: styles.test__input}}/>


                            <textarea name='messages' className={combineCss(styles.input, styles.inputArea)}
                                      placeholder='Messages' onChange={formik.handleChange}
                                      value={formik.values.messages}></textarea>


                            <div>
                                <button className={combineCss(styles.btn)} type='submit'
                                        disabled={disabled}>
                                    Send messages!
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
