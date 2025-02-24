import { css } from '@linaria/core'

export const wrapperStyle = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const headerWrapperStyle = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const titleStyle = css`
  font-size: 20px;
  font-weight: bold;
`

export const infoStyle = css`
  margin-top: 25px;
  font-size: 12px;
  line-height: 1.5;
`

export const footerStyle = css`
  padding-bottom: 20px;
  font-size: 12px;
  line-height: 1.5;

  /* TODO: add separate classes for each of the following */

  ol {
    margin-left: 15px;
  }
  
  ul {
    margin-left: 10px;
  }

  li {
    margin-top: 5px;
  }
`

export const commandStyle = css`
  font-style: italic;
  color: var(--theme-color);
`
