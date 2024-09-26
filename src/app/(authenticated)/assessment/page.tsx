'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'
import { CheckCircleOutlined } from '@ant-design/icons'
import { Prisma } from '@prisma/client'
import {
  Button,
  Col,
  Form,
  Row,
  Typography,
  Steps,
  Progress,
  Tooltip,
} from 'antd'
import { useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
import { Introduction } from '@/designSystem/ui/Introduction'
import { BasicUnderstanding } from '@/designSystem/ui/BasicUnderstanding'
import { CurrentTechnology } from '@/designSystem/ui/CurrentTechnology'
import { OrganizationalCulture } from '@/designSystem/ui/OrganizationalCulture'
import { PersonalizedFeedback } from '@/designSystem/ui/PersonalizedFeedback'

const { Title, Text } = Typography
const { Step } = Steps

export default function AIReadinessAssessmentPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const { mutateAsync: createAssessment } =
    Api.aiReadinessAssessment.create.useMutation()

  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  const steps = [
    { title: 'Introduction', content: <Introduction form={form} /> },
    {
      title: 'Basic Understanding',
      content: <BasicUnderstanding form={form} />,
    },
    { title: 'Current Technology', content: <CurrentTechnology form={form} /> },
    {
      title: 'Organizational Culture',
      content: <OrganizationalCulture form={form} />,
    },
    {
      title: 'Personalized Feedback',
      content: <PersonalizedFeedback form={form} />,
    },
  ]

  const handleSubmit = async (
    values: Prisma.AiReadinessAssessmentCreateInput,
  ) => {
    setLoading(true)
    try {
      const omit = (obj, keys) => {
        const result = { ...obj }
        keys.forEach(key => delete result[key])
        return result
      }
      const data = omit(values, ['id', 'dateCreated', 'dateUpdated'])
      const aiReadinessScore = calculateAIReadinessScore(values)
      const recommendations = generateRecommendations(values)
      await createAssessment({
        data: {
          ...data,
          userId: user?.id,
          aiReadinessScore,
          recommendations,
        },
      })
      enqueueSnackbar('Assessment submitted successfully', {
        variant: 'success',
      })
      router.push('/dashboard')
    } catch (error) {
      enqueueSnackbar('Error submitting assessment', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const calculateAIReadinessScore = values => {
    // Implement logic to calculate AI readiness score based on responses
    return 0 // Placeholder
  }

  const generateRecommendations = values => {
    // Implement logic to generate personalized recommendations
    return '' // Placeholder
  }

  const renderTooltip = (label: string, explanation: string) => (
    <Tooltip title={explanation}>
      <span>{label}</span>
    </Tooltip>
  )

  const next = () => {
    form.validateFields().then(() => {
      setCurrentStep(currentStep + 1)
      setProgress(((currentStep + 1) / steps.length) * 100)
    })
  }

  const prev = () => {
    setCurrentStep(currentStep - 1)
    setProgress(((currentStep - 1) / steps.length) * 100)
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ marginTop: '50px' }}>
        <Col xs={24} sm={20} md={16} lg={12} xl={10}>
          <Title level={2} style={{ textAlign: 'center' }}>
            AI Readiness Assessment
          </Title>
          <Text
            type="secondary"
            style={{
              display: 'block',
              textAlign: 'center',
              marginBottom: '30px',
            }}
          >
            Complete the assessment to receive a tailored project pitch.
          </Text>
          <Steps current={currentStep}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <Progress percent={progress} style={{ marginBottom: '20px' }} />
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.List name="responses">
              {() => (
                <div style={{ marginTop: '20px' }}>
                  {steps[currentStep].content}
                </div>
              )}
            </Form.List>
            <Form.Item>
              {currentStep < steps.length - 1 && (
                <Button type="primary" onClick={next}>
                  Next
                </Button>
              )}
              {currentStep === steps.length - 1 && (
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  icon={<CheckCircleOutlined />}
                >
                  Submit
                </Button>
              )}
              {currentStep > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={prev}>
                  Previous
                </Button>
              )}
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
