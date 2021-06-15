import React, { useState, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/GlobalStyles'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Hero from './components/Hero'
import Contact from './pages/Contact'
import LandingPage from './components/LandingPage'
import Pricing from './pages/Pricing'
import Legal from './pages/Legal'
/* import ThemeToggle from './components/ThemeToggle' */

const Wrapper = styled.div`
	width: 100vw;
	display: flex;
	background-color: ${(props) => props.theme.backgroundColor};
	flex-direction: column;
	position: absolute;
	overflow-x: hidden;
	transition: all 0.25s linear;
`
const themes = {
	darkMode: {
		backgroundColor: '#2e3330',
		backgroundColor2: 'transparent',
		color: '#fff',
		btnBgColor: '#fff',
		logoColor: '#fff',
		btnborderColor: '#3F4F45',
		name: 'flex-end',
		gradient: 'linear-gradient(#091236, #1E215D)',
	},
	lightMode: {
		backgroundColor: '#fff',
		backgroundColor2: 'transparent',
		color: '#292928',
		logoColor: '#2e3330',
		btnBgColor: '#3F4F45',
		btnborderColor: '#fff',
		name: 'flex-start',
		gradient: 'linear-gradient(#39598A, #79D7ED)',
	},
}

const App = () => {
	/* 	const [theme, setTheme] = useState(themes.lightMode) */
	const [openNav, setOpenNav] = useState(false)
	const myRef = useRef()

	return (
		<>
			<ThemeProvider theme={themes.lightMode}>
				<GlobalStyles />
				<Wrapper>
					<Header openNav={openNav} setOpenNav={setOpenNav} />
					<Switch>
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
						<Route path='/legal'>
							<Legal />
						</Route>
					</Switch>
				</Wrapper>
			</ThemeProvider>
		</>
	)
}

export default App
