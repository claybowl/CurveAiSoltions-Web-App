'use client'

import { Typography, Card, Row, Col, Button, List } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'
const { Title, Text, Paragraph } = Typography

export default function MembershipPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const memberships = [
    {
      id: 'alpha',
      name: 'Alpha Wave',
      price: 29,
      description: 'Exclusive tier for Kickstarter backers',
      features: ['Personalized AI Solutions', 'Access to All Resources'],
      targetAudience: 'Early adopters and Kickstarter backers',
    },
    {
      id: 'theta',
      name: 'Theta Wave',
      price: 39,
      description: 'Ideal for new clients',
      features: ['Expert-Managed Implementations', 'Priority Support'],
      targetAudience: 'Businesses new to AI integration',
    },
    {
      id: 'gamma',
      name: 'Gamma Wave',
      price: 69,
      description: 'Custom enterprise solutions',
      features: ['Dedicated AI Engineer', 'Custom Project Pitches'],
      targetAudience: 'Large enterprises requiring tailored solutions',
    },
  ]

  const handleSelectMembership = async (membershipId: string) => {
    try {
      const { mutateAsync: updateUser } = Api.user.update.useMutation()
      await updateUser({ where: { id: user.id }, data: { membershipId } })
      enqueueSnackbar('Membership updated successfully', { variant: 'success' })
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
          <Title level={2}>Curve AI Solutions: Membership Tiers</Title>
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]}>
        {memberships.map(membership => (
          <Col xs={24} sm={12} md={8} key={membership.id}>
            <Card
              title={membership.name}
              bordered={false}
              className="h-full flex flex-col"
              actions={[
                <Button
                  type="primary"
                  icon={<CheckCircleOutlined />}
                  onClick={() => handleSelectMembership(membership.id)}
                >
                  Get Started
                </Button>,
              ]}
            >
              <div className="flex-grow">
                <Text strong>${membership.price}/month</Text>
                <Paragraph>{membership.description}</Paragraph>
                <Text strong>Features:</Text>
                <List
                  dataSource={membership.features}
                  renderItem={item => <List.Item>{item}</List.Item>}
                />
                <Text strong>Target Audience:</Text>
                <Paragraph>{membership.targetAudience}</Paragraph>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
