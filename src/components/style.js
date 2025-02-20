import { css } from '@linaria/core'
import { styled } from '@linaria/react'

export const dummyStyle = css`
  border-right: solid 2px red;
`

export const PanelNameStyle = styled.h2`
  color: gold;
  background-color: ${({ isEnabled }) => !isEnabled ? 'red' : 'blue'};
`
