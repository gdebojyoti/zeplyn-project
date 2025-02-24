import { css } from '@linaria/core'

export const navStyle = css`
  width: 50px;
  background-color: var(--panel-alt-bg-color);
`

export const iconWrapperStyle = css`
  width: 50px;
  height: 50px;
  padding: 8px;
  cursor: pointer;
  opacity: .5;

  border-left: solid 2px transparent;
  border-right: solid 2px transparent;

  &:hover {
    opacity: 1;
  }
`

export const activeIconWrapperStyle = css`
  border-left-color: #fff;
  opacity: 1;
`

export const iconStyle = css`
  width: 100%;
  height: 100%;
`
