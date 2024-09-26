import React from 'react'
import { Card, Typography, Button } from 'antd'

const { Title, Paragraph } = Typography

interface ServiceCardProps {
  title: string
  description: string
  link: string
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <Card
      hoverable
      style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <Title level={4}>{title}</Title>
      <Paragraph style={{ flex: 1 }}>{description}</Paragraph>
      <Button type="primary" href={link}>
        Learn More
      </Button>
    </Card>
  )
}

export default ServiceCard
