'use client'

import { Prisma } from '@prisma/client'
import { Typography, Table, Spin, Row, Col } from 'antd'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function DeveloperDashboardPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: assessments,
    isLoading,
    refetch,
  } = Api.aiReadinessAssessment.findMany.useQuery({
    include: { user: true },
  })

  const columns = [
    {
      title: 'Client Name',
      dataIndex: ['user', 'name'],
      key: 'clientName',
    },
    {
      title: 'Responses',
      dataIndex: 'responses',
      key: 'responses',
    },
    {
      title: 'Date Submitted',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <span>
          <CheckCircleOutlined style={{ color: 'green', marginRight: 8 }} />
          <CloseCircleOutlined style={{ color: 'red' }} />
        </span>
      ),
    },
  ]

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
          <Title level={2}>AI Readiness Assessment Submissions</Title>
          <Text>
            Review and create tailored project pitches for clients based on
            their AI readiness assessments.
          </Text>
          <Table
            columns={columns}
            dataSource={assessments}
            rowKey="id"
            pagination={{ pageSize: 10 }}
            style={{ marginTop: 24 }}
          />
        </Col>
      </Row>
    </PageLayout>
  )
}
