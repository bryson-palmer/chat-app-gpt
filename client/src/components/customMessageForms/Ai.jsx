import React, { useState } from 'react'

import { usePostAiTextMutation } from '@/state/api'
import MessageFormUI from './MessageFormUI'

const Ai = ({ props, activeChat }) => {
  const [attachment, setAttachment] = useState('')
  const [message, setMessage] = useState('')

  const [trigger] = usePostAiTextMutation()

  const { username, onSubmit } = props

  const handleChange = e => setMessage(e.target.value)

  const handleSubmit = async () => {
    const date = new Date()
      .toISOString()
      .replace('T', ' ')
      .replace('Z', `${Math.floor(Math.random() * 1000)}+00:00`)
    const at = attachment ? [{ blob: attachment, file: attachment.name }] : []
    const form ={
      attachments: at,
      created: date,
      sender_username: username,
      text: message,
      activeChatId: activeChat.id
    }
    onSubmit(form)
    trigger(form)
    setMessage('')
    setAttachment('')
  }

  return (
    <MessageFormUI
      setAttachment={setAttachment}
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default Ai