'use client'

import { useState } from 'react'
import { Prisma } from '@prisma/client'
import { Typography, Input, Button, List, Avatar, Spin, Row, Col } from 'antd'
import { SendOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function CommunicationPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [messageContent, setMessageContent] = useState<string>('')
  const {
    data: messages,
    isLoading,
    refetch,
  } = Api.message.findMany.useQuery({
    where: {
      OR: [{ senderId: user?.id }, { receiverId: user?.id }],
    },
    include: {
      sender: true,
      receiver: true,
    },
  })

  const { mutateAsync: sendMessage } = Api.message.create.useMutation()

  const handleSendMessage = async () => {
    if (messageContent.trim() === '') {
      enqueueSnackbar('Message content cannot be empty', { variant: 'error' })
      return
    }

    try {
      await sendMessage({
        data: {
          content: messageContent,
          timestamp: new Date().toISOString(),
          senderId: user?.id,
          receiverId: params.receiverId, // Assuming receiverId is passed as a param
        },
      })
      setMessageContent('')
      refetch()
      enqueueSnackbar('Message sent successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to send message', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ marginBottom: '20px' }}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={2}>Private Communication</Title>
          <Text>
            Communicate privately with the developer for seamless collaboration.
          </Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          {isLoading ? (
            <Spin size="large" />
          ) : (
            <List
              itemLayout="horizontal"
              dataSource={messages}
              renderItem={message => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar>{message.sender?.name?.charAt(0)}</Avatar>}
                    title={
                      <Text>
                        {message.sender?.name} to {message.receiver?.name} -{' '}
                        {dayjs(message.timestamp).format('YYYY-MM-DD HH:mm')}
                      </Text>
                    }
                    description={message.content}
                  />
                </List.Item>
              )}
            />
          )}
          <Input.TextArea
            rows={4}
            value={messageContent}
            onChange={e => setMessageContent(e.target.value)}
            placeholder="Type your message here..."
          />
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSendMessage}
            style={{ marginTop: '10px' }}
          >
            Send
          </Button>
        </Col>
      </Row>
    </PageLayout>
  )
}
