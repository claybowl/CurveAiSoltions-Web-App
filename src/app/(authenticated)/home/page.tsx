'use client'

import { Prisma } from '@prisma/client'
import { useState } from 'react'
import { Typography, Row, Col, Card, Button, Form, Input } from 'antd'
import {
  UserAddOutlined,
  ReadOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function LandingPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: articles, isLoading: articlesLoading } =
    Api.article.findMany.useQuery({})
  const { mutateAsync: createUser } = Api.user.create.useMutation()

  const [form] = Form.useForm()

  const handleRegister = async (values: Prisma.UserCreateInput) => {
    try {
      await createUser({ data: values })
      enqueueSnackbar('Registration successful', { variant: 'success' })
      router.push('/membership')
    } catch (error) {
      enqueueSnackbar('Registration failed', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row
        justify="center"
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        <Col span={24}>
          <Title level={1}>Welcome to Our AI Consulting Firm</Title>
          <Paragraph>
            Learn about our services, read our technical articles, and join us
            to access additional services.
          </Paragraph>
        </Col>
      </Row>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={8}>
          <Card
            title={
              <>
                <InfoCircleOutlined /> Our Services
              </>
            }
            bordered={false}
          >
            <Paragraph>
              We offer a range of AI consulting services to help your business
              leverage the power of AI and machine learning.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card
            title={
              <>
                <ReadOutlined /> Technical Articles
              </>
            }
            bordered={false}
          >
            {articlesLoading ? (
              <Text>Loading articles...</Text>
            ) : (
              articles?.map(article => (
                <Paragraph key={article.id}>
                  <Title level={4}>{article.title}</Title>
                  <Text>{article.content}</Text>
                </Paragraph>
              ))
            )}
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card
            title={
              <>
                <UserAddOutlined /> Register
              </>
            }
            bordered={false}
          >
            <Form form={form} layout="vertical" onFinish={handleRegister}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: 'Please enter your email' }]}
              >
                <Input type="email" />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  { required: true, message: 'Please enter your password' },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
