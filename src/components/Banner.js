import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { LanguageContext } from '../App'

const Wrapper = styled.aside`
	width: 99vw;
	height: 30px;
	background: ${({ theme }) => theme.primary90};
	color: ${({ theme }) => theme.white};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 0.8rem;
	cursor: pointer;
	position: fixed;
	z-index: 1000;

	@media (max-width: 768px) {
		position: static;
	}
`

const StyledLink = styled(Link)`
	color: white;
	margin-left: 6px;
`

const StyledDiv = styled.div`
	position: absolute;
	right: 10px;
`

const Banner = () => {
	const { lang } = useContext(LanguageContext)
	const [open, setOpen] = useState(true)
	/* const [open, setOpen] = useState(
		localStorage.banner !== undefined
			? JSON.parse(localStorage.getItem('banner'))
			: true
	) */

	return (
		<>
			{open && (
				<Wrapper>
					{lang
						? 'Vill du bli testpiltot för Zittron?'
						: 'Want to become a test pilot for Zittron?'}
					<StyledLink
						to='/contact'
						onClick={() =>
							localStorage.setItem(
								'banner',
								JSON.stringify(false)
							)
						}
					>
						{lang ? 'Klicka här' : 'Click here'}
					</StyledLink>
					<StyledDiv>
						<IoMdCloseCircleOutline
							size={20}
							onClick={() => {
								setOpen(false)
								localStorage.setItem(
									'banner',
									JSON.stringify(false)
								)
							}}
						/>
					</StyledDiv>
				</Wrapper>
			)}
		</>
	)
}

export default Banner
