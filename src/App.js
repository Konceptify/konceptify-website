import React, { useState, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/GlobalStyles'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Header from './components/Header'
import Hero from './components/Hero'
import Contact from './pages/Contact'
import LandingPage from './components/LandingPage'
import Pricing from './pages/Pricing'
import Legal from './pages/Legal'
import Footer from './components/Footer'
/* import ThemeToggle from './components/ThemeToggle' */

export const LanguageContext = React.createContext()

const Wrapper = styled.div`
	width: 100vw;
	display: flex;
	background-color: ${(props) => props.theme.white};
	flex-direction: column;
	position: absolute;
	overflow-x: hidden;
	transition: all 0.25s linear;
`
const themes = {
	darkMode: {
		white: '#2e3330',
		backgroundColor2: 'transparent',
		color: '#fff',
		primary: '#fff',
		primary90: '#fff',
		primary80: '#fff',
		primary70: '#fff',
		primary60: '#fff',
		primary50: '#fff',
		logoColor: '#fff',
		btnborderColor: '#3F4F45',
		name: 'flex-end',
		gradient: 'linear-gradient(#091236, #1E215D)',
	},
	lightMode: {
		white: '#fff',
		backgroundColor2: 'transparent',
		color: '#292928',
		logoColor: '#2e3330',
		primary: '#3F4F45',
		primary90: '#566c5e',
		primary80: '#6d8877',
		primary70: '#88a091',
		primary60: '#a4b6ab',
		primary50: '#c1cdc5',
		btnborderColor: '#fff',
		name: 'flex-start',
		gradient: 'linear-gradient(#39598A, #79D7ED)',
	},
}

const App = () => {
	/* 	const [theme, setTheme] = useState(themes.lightMode) */
	const [openNav, setOpenNav] = useState(false)
	const myRef = useRef()
	const location = useLocation()
	const [lang, setLang] = useState(
		localStorage.language !== undefined
			? JSON.parse(localStorage.getItem('language'))
			: window.navigator.language === 'sv' && 'sv-SE'
	)

	const ContextValue = {
		lang,
		setLang,
	}

	return (
		<>
			<LanguageContext.Provider value={ContextValue}>
				<AnimatePresence exitBeforeEnter initial={true}>
					<ThemeProvider theme={themes.lightMode}>
						<GlobalStyles />
						<Wrapper>
							<Header
								openNav={openNav}
								setOpenNav={setOpenNav}
							/>
							<Switch
								location={location}
								key={location.pathname}
							>
								<Route exact path='/'>
									<Hero myRef={myRef} />
									<LandingPage myRef={myRef} />
								</Route>
								<Route path='/contact'>
									<Contact />
								</Route>
								<Route path='/pricing'>
									<Pricing />
								</Route>
								<Route path='/privacy'>
									<Legal />
								</Route>
							</Switch>
							<Footer />
						</Wrapper>
					</ThemeProvider>
				</AnimatePresence>
			</LanguageContext.Provider>
		</>
	)
}

export default App
