'use client'

import { Typography, Card, Row, Col, Button } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function MembershipPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: memberships,
    isLoading,
    refetch,
  } = Api.membership.findMany.useQuery({})

  const handleSelectMembership = async (membershipId: string) => {
    try {
      const { mutateAsync: updateUser } = Api.user.update.useMutation()
      await updateUser({ where: { id: user.id }, data: { membershipId } })
      enqueueSnackbar('Membership updated successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to update membership', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row
        justify="center"
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        <Col span={24}>
          <Title level={2}>Choose Your Membership</Title>
          <Paragraph>
            As a registered user, you can choose between Alpha Wave Membership
            and Theta Wave Membership.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]}>
        {memberships?.map(membership => (
          <Col xs={24} sm={12} md={8} key={membership.id}>
            <Card
              title={membership.name}
              bordered={false}
              actions={[
                <Button
                  type="primary"
                  icon={<CheckCircleOutlined />}
                  onClick={() => handleSelectMembership(membership.id)}
                >
                  Select
                </Button>,
              ]}
            >
              <Text>{membership.description}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
