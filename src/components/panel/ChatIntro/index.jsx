import { wrapperStyle, headerWrapperStyle, titleStyle, infoStyle, footerStyle, commandStyle } from './style.js'

const ChatIntro = () => {
  return (
    <div className={wrapperStyle}>
      <div className={headerWrapperStyle}>
        <h2 className={titleStyle}>Ask Zeplyn Copilot</h2>
        <div className={infoStyle}>
          Zeplyn Copilot is not powered by AI, so you are on your own.
          Review your code carefully before deploying.
          <br />
          Good luck!
        </div>
      </div>
      <div className={footerStyle}>
        <div>Ways to use</div>
        <ol>
          <li>
            Open any file and type in one of the following messages
            <ul>
              <li>
                <span className={commandStyle}>Tell me if there are any json files in this dir</span>
              </li>
              <li>
                <span className={commandStyle}>Tell me if this file has syntax errors</span>
              </li>
            </ul>
          </li>
          <li>
            Right click on any file from the Explorer, and select "<span className={commandStyle}>Explain the utility of this file</span>"
          </li>
        </ol>
      </div>
    </div>
  )
}

export default ChatIntro
