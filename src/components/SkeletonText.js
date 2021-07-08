import React from 'react'
import { ReactComponent as Icon } from '../assets/checkIconsvg.svg'
import styled from 'styled-components'

const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	width: 100%;

	padding: 10px 30px;
`

const DivContainer = styled.div`
	width: 100%;
`

const GreyDiv = styled.div`
	background: #c4c4c4;
	height: 16px;
	width: ${({ width }) => width};
	margin: 10px 10px;
	border-radius: 5px;
`

const SkeletonText = () => {
	return (
		<StyledDiv>
			<Icon />
			<DivContainer>
				<GreyDiv width='85%' />
				<GreyDiv width='75%' />
				<GreyDiv width='30%' />
			</DivContainer>
		</StyledDiv>
	)
}

export default SkeletonText
