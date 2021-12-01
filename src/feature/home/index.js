import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss';
import Container from "../../helpers/container";
import profile from '../../assets/img/me.jpg'
import {init} from "ityped";
import {NavLink} from "react-router-dom";
// import resume from '../../assets/resume.pdf'
import {randomNumber} from "../../helpers/randomNumber";
import {combineCss} from "../../helpers/combineCss";
import Bubble from "../../helpers/bubble";
import {useWindowSize} from "../../helpers/windowsSize";

const Home = ({currentUrl, sizeBubble}) => {
    useEffect(() => {
        const myElement = document.querySelector('#runText')
        init(myElement, {
            showCursor: false,
            typeSpeed: 250,
            strings: ['React', 'Redux', 'JavaScript', 'TypeScript', 'SASS']
        })
    }, [])

    const [move, setMove] = useState(null)

    useEffect(() => {
        window.addEventListener('mousemove', parallax)

        function parallax(e) {
            let w = window.innerWidth / 2;
            let h = window.innerHeight / 2;
            let mouseX = e.clientX
            let mouseY = e.clientY

            let depth = `${(0 - (mouseX - w) * 0.008).toFixed(1)}%, ${(0 - (mouseY - h) * 0.008).toFixed(1)}%`
            setMove(depth)
        }
    }, [])

    let [left, setLeft] = useState(false);
    useEffect(() => {
        if (currentUrl === '/') {
            setLeft(true)
        }
    }, [currentUrl])


    return (
        <div className={combineCss(styles.home, left && styles.active)}>
            <Container className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <h2 className={styles.logo}>Myself</h2>
                        <p className={styles.text}>
                            I’m a Front-End Developer located in Belarus. I have a serious
                            passion for by the
                            development.</p>
                        <p className={styles.text}>Well-organized person, problem solver, independent employee with high
                            attention to detail. Fan of sports, TV series or films by Marvel. </p>
                        <p className={styles.text}> I have experience in creating SPA<br/> using:
                            <span id={'runText'}
                                  className={styles.runText}>
                            </span>
                        </p>
                        <div className={styles.linkBox}>
                            <NavLink className={styles.linkInfo} to={'/portfolio'}>View portfolio</NavLink>
                            <a className={styles.linkInfo} target={'_blank'} href={'#'}>Download
                                resume
                            </a>
                        </div>
                    </div>

                    <div className={styles.avatar}>
                        <img
                            src={profile}
                            alt="myself"
                            className={'img'}
                            style={{transform: `translate(${move})`}}
                        />
                    </div>
                </div>
            </Container>
            {/*{width > 550 && <Bubble size={25}/>}*/
            }
        </div>
    )
};

export default Home;