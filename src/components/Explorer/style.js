import { css } from '@linaria/core'
import { styled } from '@linaria/react'

export const explorerStyle = css`
  min-width: 250px;
  font-size: 14px;
  background-color: var(--panel-bg-color);
`

export const panelNameStyle = css`
  display: flex;
  align-items: center;
  height: 35px;
  padding-left: 15px;
  text-transform: uppercase;
  font-size: 11px;
`

export const LabelStyle = styled.div`
  display: flex;
  align-items: center;
  height: 22px;
  user-select: none;
  background-color: ${({ isSelected }) => isSelected ? 'var(--panel-highlight-color)' : 'transparent'};
  cursor: pointer;

  &:hover {
    background-color: var(--panel-hover-color);
  }
`

export const labelFileNameStyle = css`
  margin-left: 3px;
`
