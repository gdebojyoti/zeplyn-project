import { APP_NAME } from '../../../../config/variables'

import chatIcon from '../../../assets/icons/chat.png'

export const menu = [
  {
    key: 'chat', // NOTE: this would be a perfect spot for TS
    icon: chatIcon,
    title: `Chat with ${APP_NAME}`
  }
]
