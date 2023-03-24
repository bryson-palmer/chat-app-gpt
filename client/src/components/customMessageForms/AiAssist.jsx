import React, { useEffect, useState } from 'react'

import { usePostAiAssistMutation } from '@/state/api'
import MessageFormUI from './MessageFormUI'

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
   }, [delay, value])

   return debouncedValue
}

const AiAssist = ({ props, activeChat }) => {
  const [appendText, setAppendText] = useState('')
  const [attachment, setAttachment] = useState('')
  const [message, setMessage] = useState('')

  const [triggerAssist, resultAssist] = usePostAiAssistMutation()
  const debouncedValue = useDebounce(message, 1000)

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
    setMessage('')
    setAttachment('')
  }

  const handleKeyDown = e => {
    if (e.keyCode === 9 || e.KeyCode === 13) {
      e.preventDefault()
      setMessage(`${message} ${appendText}`)
    }
  }

  useEffect(() => {
    if (debouncedValue) {
      const form = { text: message }
      triggerAssist(form)
    }
  }, [debouncedValue]) // eslint-disable-line

  useEffect(() => {
    if (resultAssist.data?.text) {
      setAppendText(resultAssist.data.text)
    }
  }, [resultAssist]) // eslint-disable-line

  useEffect(() => {
    if (appendText && !message) {
      setAppendText('')
    }
  }, [appendText, message])

  return (
    <MessageFormUI
      setAttachment={setAttachment}
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      appendText={appendText}
      handleKeyDown={handleKeyDown}
    />
  )
}

export default AiAssist