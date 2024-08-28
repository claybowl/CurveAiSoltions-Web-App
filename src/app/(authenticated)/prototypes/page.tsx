'use client'

import { Typography, Spin, Row, Col } from 'antd'
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'
import { Chatbot } from '@/components/Chatbot'

const { Title, Paragraph } = Typography

export default function PrototypesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: prototypes,
    isLoading,
    refetch,
  } = Api.prototype.findMany.useQuery({})

  if (isLoading) {
    return (
      <PageLayout layout="full-width">
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
          <Spin size="large" />
        </Row>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={2}>Prototypes</Title>
          <Paragraph>
            As a member, you can view and interact with the prototypes below.
          </Paragraph>
          <Chatbot />
        </Col>
      </Row>
    </PageLayout>
  )
}
