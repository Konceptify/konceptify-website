import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { LanguageContext } from '../App'
import sanityClient from '../client'

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
		font-size: 2vw;
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
	const [data, setData] = useState()
	/* const [open, setOpen] = useState(
		localStorage.banner !== undefined
			? JSON.parse(localStorage.getItem('banner'))
			: true
	) */

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "banner"] {
                banner
            }`
			)
			.then((data) => {
				setData(data[0])
			})
			.catch((error) => console.log(error))
	}, [])

	return (
		<>
			{open && (
				<Wrapper>
					{data
						? lang
							? data.banner.sv
							: data.banner.en
						: null}
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
