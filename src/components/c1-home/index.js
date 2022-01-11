import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss';
import Container from '../../helpers/container';
import profile from '../../assets/img/me.jpg';
import resumePdf from '../../assets/ReactResume.pdf';
import {init} from 'ityped';
import {NavLink} from 'react-router-dom';
import {combineCss} from '../../helpers/combineCss';

const Home = ({setCurrentUrl}) => {
    useEffect(() => {
        const myElement = document.querySelector('#runText');
        init(myElement, {
            showCursor: false,
            typeSpeed: 250,
            strings: ['React', 'Redux', 'JavaScript', 'TypeScript', 'SASS'],
        });
    }, []);

    const [move, setMove] = useState(null);

    useEffect(() => {
        window.addEventListener('mousemove', parallax);

        function parallax(e) {
            let w = window.innerWidth / 2;
            let h = window.innerHeight / 2;
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let depth = `${(0 - (mouseX - w) * 0.008).toFixed(1)}%, ${(0 - (mouseY - h) * 0.008).toFixed(1)}%`;
            setMove(depth);
        }
    }, []);

    return (
        <div className={combineCss(styles.home)}>
            <Container className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <h2 className={styles.logo}>Myself</h2>
                        <p className={styles.text}>I’m a Front-End Developer located in Belarus. I have a serious
                            passion for by the development.</p>
                        <p className={styles.text}>
                            Well-organized person, problem solver, independent employee with high attention to detail.
                            Fan of sports, TV series or films by Marvel.{' '}
                        </p>
                        <p className={styles.text}>
                            {' '}
                            I have experience in creating SPA
                            <br/> using:
                            <span id={'runText'} className={styles.runText}/>
                        </p>
                        <div className={styles.linkBox}>
                            <NavLink className={styles.linkInfo} to={'/portfolio'}
                                     onClick={setCurrentUrl.bind(null, '/portfolio')}>
                                View portfolio
                            </NavLink>
                            <a rel="noreferrer" className={styles.linkInfo} href={resumePdf} target={'_blank'}
                               download={'resume.pdf'}>
                                Download resume
                            </a>
                        </div>
                    </div>

                    <div className={styles.avatar}>
                        <div className={styles.box_img}>
                            <img src={profile} alt='myself' className={'img'}
                                 style={{transform: `translate(${move})`}}/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Home;
