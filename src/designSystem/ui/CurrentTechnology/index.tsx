import React from 'react'
import { Form, Input, Select, Slider, Typography } from 'antd'

const { Title, Text } = Typography
const { Option } = Select

type Props = {
  form: any
}

export const CurrentTechnology: React.FC<Props> = ({ form }) => {
  return (
    <div>
      <Title level={4}>Current Technology Assessment</Title>
      <Text type="secondary">
        Evaluate your organization's current technological landscape.
      </Text>

      <Form.Item
        name={['responses', 'currentTechStack']}
        label="What is your current technology stack?"
        rules={[
          {
            required: true,
            message: 'Please describe your current tech stack',
          },
        ]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item
        name={['responses', 'dataInfrastructure']}
        label="How would you describe your data infrastructure?"
        rules={[{ required: true, message: 'Please select an option' }]}
      >
        <Select placeholder="Select an option">
          <Option value="basic">
            Basic - Limited data collection and storage
          </Option>
          <Option value="intermediate">
            Intermediate - Structured data storage with some analytics
          </Option>
          <Option value="advanced">
            Advanced - Comprehensive data warehouse with analytics capabilities
          </Option>
        </Select>
      </Form.Item>

      <Form.Item
        name={['responses', 'aiIntegrationLevel']}
        label="To what extent have you integrated AI into your current processes?"
        rules={[{ required: true, message: 'Please select a level' }]}
      >
        <Slider
          marks={{
            0: 'None',
            25: 'Basic',
            50: 'Moderate',
            75: 'Significant',
            100: 'Extensive',
          }}
          step={25}
        />
      </Form.Item>

      <Form.Item
        name={['responses', 'techChallenges']}
        label="What are your main technological challenges?"
        rules={[{ required: true, message: 'Please describe your challenges' }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>
    </div>
  )
}
