import React, { useState, useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/GlobalStyles'
import { Switch, Route, useLocation, useHistory } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Chat from './useChat'
import Header from './components/Header'
import Hero from './components/Hero'
import Contact from './pages/Contact'
import RequestDemo from './pages/RequestDemo'
import LandingPage from './components/LandingPage'
import Pricing from './pages/Pricing'
import Legal from './pages/Legal'
import Footer from './components/Footer'
import { Cookie } from './components/Cookie'
import { Cookies } from './pages/Cookies'
import ReactGA from 'react-ga'
ReactGA.initialize('UA-206812801-1')

export const LanguageContext = React.createContext()

const Wrapper = styled.div`
	display: flex;
	background-color: ${(props) => props.theme.white};
	flex-direction: column;
	position: relative;
	overflow-x: hidden;
	transition: all 0.1s linear;
	/* margin-top: 20px; */

	@media (max-width: 768px) {
		margin-top: 0px;
	}
`
const themes = {
	lightMode: {
		white: '#fff',
		whiteOf: '#f0f0f0',
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

	const [openCookie, setOpenCookie] = useState(!navigator.cookieEnabled)

	const myRef = useRef()
	const location = useLocation()
	const history = useHistory()
	const sliderRef = useRef()
	const [openModal, setOpenModal] = useState(false)
	const [conceptSlide, setConceptSlide] = useState('Compliance')
	const [snackbarMessage, setSnackbarMessage] = useState('')
	const [lang, setLang] = useState(
		localStorage.language !== undefined
			? JSON.parse(localStorage.getItem('language'))
			: window.navigator.language === 'sv' && 'sv-SE'
	)

	const handleFooterClick = async (state) => {
		history.push('/')
		await setConceptSlide(state)
		await sliderRef.current.scrollIntoView()
	}

	const ContextValue = {
		lang,
		setLang,
		conceptSlide,
		setConceptSlide,
		handleFooterClick,
		sliderRef,
		openCookie,
		setOpenCookie,
		myRef,
		snackbarMessage,
		setSnackbarMessage,
		openModal,
		setOpenModal,
	}

	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search)
	}, [])

	useEffect(() => {
		let msg = '%c Hi ????! Welcome to Konceptify.com!'
		/* let msg2 = 'govirtual@konceptify.com for job aplications' */
		let styles = [
			'font-size: 12px',
			'font-family: monospace',
			'background: white',
			'display: inline-block',
			'color: black',
			'padding: 8px 19px',
			'border: 1px dashed;',
		].join(';')
		console.log(msg, styles)
		const faviconUpdate = async () => {
			const favicon = document.getElementById('favicon')
			//check count value, if below 0 we change href property to our red circle image path
			if (
				window.matchMedia &&
				window.matchMedia('(prefers-color-scheme: dark)').matches
			) {
				favicon.href = 'Resurs vit.png'
			}
			//if above 0, we set back to green
			else {
				favicon.href = '/Resurs 2.png'
			}
		}
		//run our function here
		faviconUpdate()
	}, [])

	return (
		<>
			<LanguageContext.Provider value={ContextValue}>
				<AnimatePresence exitBeforeEnter initial={true}>
					<ThemeProvider theme={themes.lightMode}>
						{location.pathname === '/request-demo' ? null : <Chat />}

						<Cookie />
						<GlobalStyles />

						<Wrapper>
							{location.pathname === '/request-demo' ? null : (
								<Header openNav={openNav} setOpenNav={setOpenNav} />
							)}

							<Switch location={location} key={location.pathname}>
								<Route exact path="/">
									<Hero />
									<LandingPage myRef={myRef} />
								</Route>
								<Route path="/contact">
									<Contact />
								</Route>
								<Route path="/pricing">
									<Pricing />
								</Route>
								<Route path="/privacy">
									<Legal />
								</Route>
								<Route path="/cookies">
									<Cookies />
								</Route>
								<Route path="/request-demo">
									<RequestDemo />
								</Route>
							</Switch>
							{location.pathname === '/request-demo' ? null : <Footer />}
						</Wrapper>
					</ThemeProvider>
				</AnimatePresence>
			</LanguageContext.Provider>
		</>
	)
}

export default App
