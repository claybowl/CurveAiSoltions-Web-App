'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'
import { CheckCircleOutlined } from '@ant-design/icons'
import { Prisma } from '@prisma/client'
import { Button, Col, Form, Input, Row, Typography } from 'antd'
import { useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
const { Title, Text } = Typography

export default function AIReadinessAssessmentPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const { mutateAsync: createAssessment } =
    Api.aiReadinessAssessment.create.useMutation()

  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (
    values: Prisma.AiReadinessAssessmentCreateInput,
  ) => {
    setLoading(true)
    try {
      const omit = (obj, keys) => {
        const result = { ...obj }
        keys.forEach(key => delete result[key])
        return result
      }
      const data = omit(values, ['id', 'dateCreated', 'dateUpdated']) // remove unnecessary properties
      await createAssessment({ data: { ...data, userId: user?.id } })
      //...
    } catch (error) {
      //...
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ marginTop: '50px' }}>
        <Col xs={24} sm={20} md={16} lg={12} xl={10}>
          <Title level={2} style={{ textAlign: 'center' }}>
            AI Readiness Assessment
          </Title>
          <Text
            type="secondary"
            style={{
              display: 'block',
              textAlign: 'center',
              marginBottom: '30px',
            }}
          >
            Fill out the form below to receive a tailored project pitch.
          </Text>
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              name="responses"
              label="Your Responses"
              rules={[
                { required: true, message: 'Please provide your responses' },
              ]}
            >
              <Input.TextArea
                rows={6}
                placeholder="Enter your responses here"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                icon={<CheckCircleOutlined />}
                block
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
