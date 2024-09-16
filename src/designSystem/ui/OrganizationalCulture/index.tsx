import React from 'react'
import { Form, Input, Select, Radio, Typography } from 'antd'

const { Title, Text } = Typography
const { TextArea } = Input

type Props = {
  form: any
}

export const OrganizationalCulture: React.FC<Props> = ({ form }) => {
  return (
    <div>
      <Title level={3}>Organizational Culture Assessment</Title>
      <Text type="secondary">
        Please answer the following questions about your organization's culture
        and readiness for AI adoption.
      </Text>

      <Form.Item
        name={['responses', 'innovationCulture']}
        label="How would you describe your organization's culture towards innovation?"
        rules={[{ required: true, message: 'Please select an option' }]}
      >
        <Radio.Group>
          <Radio value="conservative">Conservative</Radio>
          <Radio value="moderate">Moderate</Radio>
          <Radio value="innovative">Innovative</Radio>
          <Radio value="disruptive">Disruptive</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name={['responses', 'aiAdoptionReadiness']}
        label="How ready is your organization to adopt AI technologies?"
        rules={[{ required: true, message: 'Please select an option' }]}
      >
        <Select>
          <Select.Option value="not ready">Not ready</Select.Option>
          <Select.Option value="somewhat ready">Somewhat ready</Select.Option>
          <Select.Option value="ready">Ready</Select.Option>
          <Select.Option value="very ready">Very ready</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name={['responses', 'aiTrainingPrograms']}
        label="Does your organization have AI training programs for employees?"
        rules={[{ required: true, message: 'Please select an option' }]}
      >
        <Radio.Group>
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
          <Radio value="planning">Planning to implement</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name={['responses', 'aiEthicsPolicy']}
        label="Does your organization have an AI ethics policy?"
        rules={[{ required: true, message: 'Please select an option' }]}
      >
        <Radio.Group>
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
          <Radio value="developing">Currently developing</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name={['responses', 'culturalChallenges']}
        label="What are the main cultural challenges you foresee in adopting AI?"
        rules={[{ required: true, message: 'Please provide an answer' }]}
      >
        <TextArea rows={4} />
      </Form.Item>
    </div>
  )
}
