import React from 'react'
import { Form, Input, Typography, Rate } from 'antd'

const { Title, Paragraph } = Typography

type Props = {
  form: any
}

export const PersonalizedFeedback: React.FC<Props> = ({ form }) => {
  return (
    <div>
      <Title level={3}>Personalized Feedback</Title>
      <Paragraph>
        Please provide your feedback on the assessment process.
      </Paragraph>

      <Form.Item
        name={['responses', 'overallExperience']}
        label="Overall Experience"
        rules={[
          { required: true, message: 'Please rate your overall experience' },
        ]}
      >
        <Rate />
      </Form.Item>

      <Form.Item
        name={['responses', 'mostUsefulSection']}
        label="Most Useful Section"
        rules={[
          { required: true, message: 'Please enter the most useful section' },
        ]}
      >
        <Input placeholder="Enter the section you found most useful" />
      </Form.Item>

      <Form.Item
        name={['responses', 'improvementSuggestions']}
        label="Suggestions for Improvement"
      >
        <Input.TextArea
          rows={4}
          placeholder="Enter your suggestions for improvement"
        />
      </Form.Item>

      <Form.Item
        name={['responses', 'additionalComments']}
        label="Additional Comments"
      >
        <Input.TextArea
          rows={4}
          placeholder="Any additional comments or feedback"
        />
      </Form.Item>
    </div>
  )
}
