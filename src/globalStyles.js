import { css } from '@linaria/core'

const globalStyles = css`
  :global() {
    /* css reset */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font: inherit;
    }

    /* css variables */
    :root {
      --panel-bg-color: #262627;
      --panel-alt-bg-color: #333;
      --panel-highlight-color: #36363B;
      --panel-hover-color: #2A2D2E;
      --editor-bg-color: #202020;
      --theme-color: #d35400;
    }

    html, body, #root {
      width: 100%;
      height: 100%;
    }

    svg {
      width: 1rem;
      height: 1rem;
      scale: 0.75;
    }
  }
  
  display: flex;
  width: 100%;
  height: 100%;
  color: #bbb;
  font-family: sans-serif;
`

export default globalStyles
