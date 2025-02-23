import { css } from '@linaria/core'
import { styled } from '@linaria/react'

export const menuBackgroundStyle = css`
  position: fixed;
  inset: 0;
  cursor: auto;
`

export const MenuStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  padding: 5px;
  border: solid 1px var(--panel-alt-bg-color);
  font-size: 12px;
  background-color: var(--panel-bg-color);
  border-radius: 5px;
  transform: ${({ position }) => `translate(${position.x}px, ${position.y}px)`};
`

export const menuItemStyle = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 25px;
  padding-inline: 20px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    color: #eee;
    background-color: var(--theme-color);
  }
`
