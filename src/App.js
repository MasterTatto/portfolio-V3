import './App.scss';
import Header from './feature/header';
import Home from './feature/home';
import Portfolio from './feature/portfolio';
import { Route, Routes } from 'react-router-dom';
import Resume from './feature/resume';
import Skills from './feature/skills';
import Contact from './feature/contact';
import { useState } from 'react';
import { useWindowSize } from './helpers/windowsSize';
import { combineCss } from './helpers/combineCss';
import Bubble from './helpers/bubble';
import AnimatedCursor from 'react-animated-cursor';

function App() {
	const [currentUrl, setCurrentUrl] = useState('/');
	const [showMenu, setShowMenu] = useState(false);
	const { width } = useWindowSize();
	console.log(width);

	return (
		<>
			<AnimatedCursor innerSize={8} outerSize={40} color='8, 253, 216' outerAlpha={0.3} innerScale={1} outerScale={2.1} />
			<Header currentUrl={currentUrl} setCurrentUrl={setCurrentUrl} width={width} showMenu={showMenu} setShowMenu={setShowMenu} />

			{width <= 768 && (
				<span className={combineCss('showMenu', showMenu && 'hidden')} onClick={() => setShowMenu(true)}>
					menu
				</span>
			)}
			<div className='pages'>
				<Routes>
					<Route path={'/'} element={<Home currentUrl={currentUrl} />} />
					<Route path={'/portfolio'} element={<Portfolio currentUrl={currentUrl} />} />
					<Route path={'/resume'} element={<Resume currentUrl={currentUrl} />} />
					<Route path={'/skills'} element={<Skills currentUrl={currentUrl} />} />
					<Route path={'/contact'} element={<Contact currentUrl={currentUrl} />} />
				</Routes>
				{width > 550 && <Bubble size={25} />}
			</div>
		</>
	);
}

export default App;
