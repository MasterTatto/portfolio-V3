import './App.scss';
import Header from "./feature/header";
import Home from "./feature/home";
import Portfolio from "./feature/portfolio";
import {Route, Routes} from "react-router-dom";
import Resume from "./feature/resume";
import Skills from "./feature/skills";
import Contact from "./feature/contact";
import {useState} from "react";
import {useWindowSize} from "./helpers/windowsSize";
import {combineCss} from "./helpers/combineCss";


function App() {
    const [currentUrl, setCurrentUrl] = useState('/')
    const [sizeBubble, setSizeBubble] = useState(35)
    const [showMenu, setShowMenu] = useState(false)
    const {width} = useWindowSize()
    console.log(width)

    return (
        <div className='App' onDoubleClick={() => setSizeBubble(sizeBubble + 1)}>
            <Header currentUrl={currentUrl} setCurrentUrl={setCurrentUrl} width={width} showMenu={showMenu} setShowMenu={setShowMenu}/>

            {width <= 576 && <span className={combineCss('showMenu',showMenu && 'hidden')} onClick={() => setShowMenu(true)}>menu</span>}

            <Routes>
                <Route exact path={'*'} element={<Home currentUrl={currentUrl} sizeBubble={sizeBubble}/>}/>
                <Route path={'/portfolio'} element={<Portfolio currentUrl={currentUrl}/>}/>
                <Route path={'/resume'} element={<Resume currentUrl={currentUrl}/>}/>
                <Route path={'/skills'} element={<Skills currentUrl={currentUrl}/>}/>
                <Route path={'/contact'} element={<Contact currentUrl={currentUrl}/>}/>
            </Routes>

        </div>
    )
};

export default App;
