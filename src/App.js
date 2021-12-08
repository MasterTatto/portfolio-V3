import './App.scss';
import Header from './feature/header';
import Home from './feature/home';
import Portfolio from './feature/portfolio';
import {Route, Routes} from 'react-router-dom';
import Resume from './feature/resume';
import Skills from './feature/skills';
import Contact from './feature/contact';
import {useState} from 'react';
import {useWindowSize} from './helpers/windowsSize';
import {combineCss} from './helpers/combineCss';
import Bubble from './helpers/bubble';
import AnimatedCursor from 'react-animated-cursor';
import Particles from "react-tsparticles";

function App() {
    const [currentUrl, setCurrentUrl] = useState('/');
    const [showMenu, setShowMenu] = useState(false);
    const [backMode, setBackMode] = useState('particles')
    const {width} = useWindowSize();


    return (
        <>
            {/*<AnimatedCursor innerSize={8} outerSize={40} color='8, 253, 216' outerAlpha={0.3} innerScale={1} outerScale={2.1} />*/}
            <Header currentUrl={currentUrl} setCurrentUrl={setCurrentUrl} width={width} showMenu={showMenu}
                    setShowMenu={setShowMenu} setBackMode={setBackMode} backMode={backMode}/>

            {width <= 768 && (
                <span className={combineCss('showMenu', showMenu && 'hidden')} onClick={() => setShowMenu(true)}>
					menu
				</span>
            )}
            <div className='pages'>
                <Routes>
                    <Route path={'/'} element={<Home currentUrl={currentUrl}/>}/>
                    <Route path={'/portfolio'} element={<Portfolio currentUrl={currentUrl}/>}/>
                    <Route path={'/resume'} element={<Resume currentUrl={currentUrl}/>}/>
                    <Route path={'/skills'} element={<Skills currentUrl={currentUrl}/>}/>
                    <Route path={'/contact'} element={<Contact currentUrl={currentUrl}/>}/>
                </Routes>
                {backMode === 'particles' &&
                <Particles options={{
                    "fps_limit": 60,
                    "interactivity": {
                        "detectsOn": "canvas",
                        "events": {"onClick": {"enable": true, "mode": "push"}, "resize": true},
                        "modes": {"push": {"particles_nb": 4}, "repulse": {"distance": 200, "duration": 0.4}}
                    },
                    "particles": {
                        "color": {"value": "#181818"},
                        "links": {"color": "#08fdd8", "distance": 150, "enable": true, "opacity": 0.3, "width": 1},
                        "move": {
                            "bounce": false,
                            "direction": "none",
                            "enable": true,
                            "outMode": "out",
                            "random": false,
                            "speed": 1,
                            "straight": false
                        },
                        "number": {"density": {"enable": true, "area": 800}, "value": 80},
                        "opacity": {"value": 0.5},
                        "shape": {"type": "circle"},
                        "size": {"random": true, "value": 5}
                    },
                    "detectRetina": true
                }}/>}
                {backMode === 'bubbles' && <Bubble size={25}/>}
            </div>
        </>
    );
}

export default App;
