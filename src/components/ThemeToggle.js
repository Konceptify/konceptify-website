import React from 'react'
import styled from 'styled-components'
import { RiSunLine, RiMoonLine } from 'react-icons/ri'

const ToggleContainer = styled.div`
	width: 80px;
	height: 35px;
	background: ${({ theme }) => (theme.gradient ? theme.gradient : '#bbbbb')};
	position: fixed;
	bottom: 10px;
	margin: 20px;
	position: absolute;
	z-index: 10;
	border-radius: 15px;
	display: flex;
	align-items: center;
	justify-content: ${({ theme }) => theme.name && theme.name};
	padding: 3px 5px;
`

const ThemeToggle = ({ setTheme, theme, themes }) => {
	function handleClick() {
		setTheme(
			theme === themes.darkMode ? themes.lightMode : themes.darkMode
		)
	}

	return (
		<>
			<ToggleContainer>
				{theme.name && theme.name === 'flex-start' ? (
					<RiSunLine
						onClick={handleClick}
						size='20'
						fill='#fffb7d'
					/>
				) : (
					<RiMoonLine
						onClick={handleClick}
						size='20'
						fill='#fff'
					/>
				)}
			</ToggleContainer>
		</>
	)
}

export default ThemeToggle
