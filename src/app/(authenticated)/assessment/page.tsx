'use client'

import { useState } from 'react'
import { Prisma } from '@prisma/client'
import { Form, Input, Button, Row, Col, Typography } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

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
      await createAssessment({ data: { ...values, userId: user?.id } })
      enqueueSnackbar('Assessment submitted successfully!', {
        variant: 'success',
      })
      router.push('/home')
    } catch (error) {
      enqueueSnackbar('Failed to submit assessment. Please try again.', {
        variant: 'error',
      })
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
