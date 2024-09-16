import React from 'react'
import { Typography, Form, Input } from 'antd'

const { Title, Paragraph } = Typography

type IntroductionProps = {
  form: any
}

export const Introduction: React.FC<IntroductionProps> = ({ form }) => {
  return (
    <div>
      <Title level={3}>Welcome to the AI Readiness Assessment</Title>
      <Paragraph>
        This assessment will help us understand your organization's current AI
        capabilities and readiness. Please answer the following questions to the
        best of your knowledge.
      </Paragraph>
      <Form.Item
        name={['responses', 'organizationName']}
        label="Organization Name"
        rules={[
          { required: true, message: 'Please enter your organization name' },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['responses', 'industry']}
        label="Industry"
        rules={[{ required: true, message: 'Please enter your industry' }]}
      >
        <Input />
      </Form.Item>
    </div>
  )
}
