'use client'

import { Typography, Row, Col, Card, Button } from 'antd'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

const { Title, Paragraph } = Typography

export default function ServicesPage() {
  const services = [
    {
      title: 'Custom AI Chatbot',
      description: 'Intelligent conversational AI tailored to your needs.',
    },
    {
      title: 'Super Powered Discord Server Bot',
      description: 'Enhance your Discord server with advanced AI capabilities.',
    },
    {
      title: 'Data Analysis Assistant',
      description: 'AI-powered insights from your complex datasets.',
    },
    {
      title: 'Visual Artist',
      description: 'Create stunning visuals with AI-generated art.',
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ padding: '2rem' }}>
        <Col span={24} style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Title level={2}>Available AI Services</Title>
          <Paragraph>
            As a member, you can view and choose from our range of cutting-edge
            AI services below.
          </Paragraph>
        </Col>
        {services.map((service, index) => (
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={6}
            key={index}
            style={{ padding: '1rem' }}
          >
            <Card
              title={service.title}
              hoverable
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Paragraph style={{ flex: 1 }}>{service.description}</Paragraph>
              <Button type="primary">Learn More</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
