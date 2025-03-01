import { css } from '@linaria/core'

export const messageStyle = css`
  margin-block: 30px;

  &:first-of-type {
    margin-top: 15px;
  }
`

export const textStyle = css`
  margin-top: 10px;
`

export const pathStyle = css`
  display: inline-flex;
  align-items: center;
  margin-top: 10px;
  padding: 3px 5px 3px 3px;
  border: solid 1px #444;
  font-size: 11px;
  border-radius: 4px;
  cursor: pointer;

  svg {
    margin-right: 4px;
  }
`
