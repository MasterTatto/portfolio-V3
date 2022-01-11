import './App.scss';
import Header from './components/c0-header';
import Home from './components/c1-home';
import Portfolio from './components/c2-portfolio';
import {Route, Routes} from 'react-router-dom';
import Skills from './components/c3-skills';
import Contact from './components/c4-contact';
import {useState} from 'react';
import {useWindowSize} from './helpers/windowsSize';
import {combineCss} from './helpers/combineCss';
import Bubble from './helpers/bubble';
import Particles from "react-tsparticles";
import {items} from "./components/c2-portfolio/data";
import Item from "./components/c2-portfolio/item";

function App() {
    const [currentUrl, setCurrentUrl] = useState('/');
    const [showMenu, setShowMenu] = useState(false);
    const [backMode, setBackMode] = useState('bubbles')
    const {width} = useWindowSize()

    return (
        <>
            <Header currentUrl={currentUrl} setCurrentUrl={setCurrentUrl} width={width} showMenu={showMenu}
                    setShowMenu={setShowMenu} setBackMode={setBackMode} backMode={backMode}/>

            {width <= 768 && (
                <span className={combineCss('showMenu', showMenu && 'hidden')} onClick={() => setShowMenu(true)}>
					menu
				</span>
            )}
            <div className='pages'>
                <Routes>
                    <Route path={'/'} element={<Home setCurrentUrl={setCurrentUrl}/>}/>
                    <Route path={'/portfolio'} element={<Portfolio data={items}/>}/>
                    <Route path={'/portfolio/:title'} element={<Item data={items}/>}/>
                    <Route path={'/skills'} element={<Skills/>}/>
                    <Route path={'/contact'} element={<Contact/>}/>
                </Routes>
                {backMode === 'particles' &&
                    <Particles options={{
                        "fps_limit": 160,
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
