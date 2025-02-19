// File type icons
import { TypeScriptLogo } from '../assets/TypeScriptLogo'
import { JavaScriptLogo } from '../assets/JavaScriptLogo'
import { JSONLogo } from '../assets/JSONLogo'
import { MarkdownLogo } from '../assets/MarkdownLogo'
import { HTMLLogo } from '../assets/HTMLLogo'
import { CSSLogo } from '../assets/CSSLogo'
import { DefaultFileIcon } from '../assets/DefaultFileIcon'

export default function getFileIcon (path) {
  const extension = path.split('.').pop()

  switch (extension) {
    case 'ts':
      return TypeScriptLogo
    case 'js':
      return JavaScriptLogo
    case 'json':
      return JSONLogo
    case 'md':
      return MarkdownLogo
    case 'html':
      return HTMLLogo
    case 'css':
      return CSSLogo
    default:
      return DefaultFileIcon
  }
}
