import React, { useState } from 'react'
import { Input, Button, List, Typography, Spin } from 'antd'
import { Api } from '@/core/trpc'

const { Title, Paragraph } = Typography

export const Chatbot: React.FC = () => {
  const [input, setInput] = useState<string>('')
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [],
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSend = async () => {
    if (!input.trim()) return

    setMessages([...messages, { role: 'user', content: input }])
    setInput('')
    setIsLoading(true)

    try {
      const response = await Api.ai.generateText
        .useMutation()
        .mutateAsync({ prompt: input })
      setMessages([
        ...messages,
        { role: 'user', content: input },
        { role: 'bot', content: response.answer },
      ])
    } catch (error) {
      console.error('Failed to fetch response:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="chatbot-container p-4">
      <Title level={3}>Chatbot Interface</Title>
      <Paragraph>Ask me anything!</Paragraph>
      <div className="chatbot-messages mb-4">
        <List
          dataSource={messages}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={item.role === 'user' ? 'You' : 'Bot'}
                description={item.content}
              />
            </List.Item>
          )}
        />
      </div>
      <div className="chatbot-input flex items-center">
        <Input
          value={input}
          onChange={e => setInput(e.target.value)}
          onPressEnter={handleSend}
          placeholder="Type your message..."
          className="mr-2"
        />
        <Button type="primary" onClick={handleSend} disabled={isLoading}>
          {isLoading ? <Spin /> : 'Send'}
        </Button>
      </div>
    </div>
  )
}
