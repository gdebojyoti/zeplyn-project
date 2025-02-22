import { css } from '@linaria/core'

export const editorStyle = css`
  flex-grow: 1;
  background-color: var(--editor-bg-color);
  border-left: solid 1px #333;
  border-right: solid 1px #333;
`

export const editorHeaderStyle = css`
  display: flex;
  height: 35px;
  border-bottom: solid 1px #333;
  background-color: var(--panel-bg-color);
`
export const editorTabStyle = css`
  display: flex;
  align-items: center;
  padding-inline: 15px;
  border-right: solid 1px #333;
  font-size: 14px;
  font-weight: bold;
  background-color: var(--editor-bg-color);
`

export const editorWindowStyle = css`
  padding: 15px;
`
