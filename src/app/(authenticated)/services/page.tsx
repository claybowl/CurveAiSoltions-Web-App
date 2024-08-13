'use client'

import { Prisma } from '@prisma/client'
import { Typography, List, Spin, Row, Col } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ServicesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: services,
    isLoading,
    refetch,
  } = Api.service.findMany.useQuery({})

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
          <Title level={2}>Available AI Services</Title>
          <Paragraph>
            As a member, you can view and choose from the list of available AI
            services below.
          </Paragraph>
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={services}
            renderItem={service => (
              <List.Item>
                <List.Item.Meta
                  avatar={<AppstoreOutlined style={{ fontSize: '24px' }} />}
                  title={<Text>{service.name}</Text>}
                  description={service.description}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </PageLayout>
  )
}
