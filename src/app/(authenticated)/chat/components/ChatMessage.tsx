import React from 'react';
import { Card } from 'antd';
import dayjs from 'dayjs';
import { ChatMessage as ChatMessageType } from '../types';

interface Props {
  message: ChatMessageType;
}

const ChatMessage: React.FC<Props> = ({ message }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: isUser ? 'flex-end' : 'flex-start',
      marginBottom: '1rem'
    }}>
      <Card
        style={{
          maxWidth: '70%',
          backgroundColor: isUser ? '#e6f7ff' : '#f5f5f5',
          borderRadius: '8px',
        }}
        bodyStyle={{ padding: '12px' }}
      >
        <div>{message.content}</div>
        <div style={{ 
          fontSize: '0.8rem', 
          color: '#888', 
          marginTop: '4px',
          textAlign: isUser ? 'right' : 'left'
        }}>
          {dayjs(message.timestamp).format('HH:mm')}
        </div>
      </Card>
    </div>
  );
};

export default ChatMessage;
