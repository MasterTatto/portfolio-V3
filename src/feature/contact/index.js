import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { combineCss } from '../../helpers/combineCss';
import { ReactComponent as ContactMe } from '../../assets/icons/contactMe.svg';
import Container from '../../helpers/container';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';

const Contact = ({ currentUrl }) => {
	init('user_o9lBAZW5hXTb1BQ0r6faI');

	let [left, setLeft] = useState(false);
	useEffect(() => {
		if (currentUrl === '/contact') {
			setTimeout(() => {
				setLeft(true);
			}, 0);
		}
	});

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_elap3uh', 'template_2gya86a', form.current, 'user_o9lBAZW5hXTb1BQ0r6faI').then(
			(result) => {
				alert(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	return (
		<div className={combineCss(styles.portfolio, left && styles.active)}>
			<Container>
				<div className={styles.wrapper}>
					<div className={styles.imgBox}>
						<ContactMe className={styles.img} />
					</div>
					<div className={styles.inputsBox}>
						<form ref={form} className={styles.formStyles} onSubmit={sendEmail}>
							<div className={styles.topInputs}>
								<input name='name' className={combineCss(styles.input)} type='text' placeholder='Name' />
								<input name='email' className={combineCss(styles.input)} type='text' placeholder='Email' />
							</div>
							<input className={combineCss(styles.input)} type='text' placeholder='Subject' />
							<textarea name='messages' className={combineCss(styles.input, styles.inputArea)} placeholder='Messages'></textarea>
							<div>
								<button href='#' className={styles.btn} type='submit'>
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
