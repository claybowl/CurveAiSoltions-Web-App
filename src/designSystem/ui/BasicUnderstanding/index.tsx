import React from 'react'
import { Form, Input, Radio, Typography } from 'antd'

const { Title, Text } = Typography

type Props = {
  form: any
}

export const BasicUnderstanding: React.FC<Props> = ({ form }) => {
  return (
    <div>
      <Title level={4}>Basic Understanding of AI</Title>
      <Text type="secondary">
        Let's assess your current understanding of AI technologies.
      </Text>

      <Form.Item
        name={['responses', 'aiKnowledge']}
        label="How would you rate your organization's overall knowledge of AI?"
        rules={[{ required: true, message: 'Please select an option' }]}
      >
        <Radio.Group>
          <Radio value="beginner">Beginner</Radio>
          <Radio value="intermediate">Intermediate</Radio>
          <Radio value="advanced">Advanced</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name={['responses', 'aiApplications']}
        label="What potential AI applications have you identified for your business?"
        rules={[{ required: true, message: 'Please provide an answer' }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item
        name={['responses', 'aiChallenges']}
        label="What challenges do you anticipate in implementing AI solutions?"
        rules={[{ required: true, message: 'Please provide an answer' }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>
    </div>
  )
}
