'use client';

import { useState } from 'react';
import { Input, Button, List, Space } from 'antd';
import { PageLayout } from '@/designSystem/layouts/Page.layout';
import { Api } from '@/core/trpc';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { mutateAsync: generateText } = Api.ai.generateText.useMutation();

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const { answer } = await generateText({ prompt: inputText });
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: answer,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageLayout>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <List
          dataSource={messages}
          renderItem={(message) => (
            <List.Item style={{
              justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start'
            }}>
              <div style={{
                maxWidth: '70%',
                padding: '10px 15px',
                borderRadius: '10px',
                backgroundColor: message.sender === 'user' ? '#1890ff' : '#f0f0f0',
                color: message.sender === 'user' ? 'white' : 'black'
              }}>
                {message.text}
              </div>
            </List.Item>
          )}
        />
        <Space.Compact style={{ width: '100%', marginTop: '20px' }}>
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onPressEnter={handleSendMessage}
            placeholder="Type your message..."
            disabled={isLoading}
          />
          <Button
            type="primary"
            onClick={handleSendMessage}
            loading={isLoading}
          >
            Send
          </Button>
        </Space.Compact>
      </div>
    </PageLayout>
  );
}
