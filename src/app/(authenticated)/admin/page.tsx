'use client'

import { Prisma } from '@prisma/client'
import { useState } from 'react'
import { Typography, Button, Form, Input, Table, Space, Popconfirm } from 'antd'
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AdminDashboardPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  // Membership Tiers State
  const [memberships, setMemberships] = useState<
    Prisma.MembershipGetPayload<{}>[]
  >([])
  const { data: membershipsData, refetch: refetchMemberships } =
    Api.membership.findMany.useQuery({})
  const { mutateAsync: createMembership } = Api.membership.create.useMutation()
  const { mutateAsync: updateMembership } = Api.membership.update.useMutation()
  const { mutateAsync: deleteMembership } = Api.membership.delete.useMutation()

  // AI Services State
  const [services, setServices] = useState<Prisma.ServiceGetPayload<{}>[]>([])
  const { data: servicesData, refetch: refetchServices } =
    Api.service.findMany.useQuery({})
  const { mutateAsync: createService } = Api.service.create.useMutation()
  const { mutateAsync: updateService } = Api.service.update.useMutation()
  const { mutateAsync: deleteService } = Api.service.delete.useMutation()

  // Articles State
  const [articles, setArticles] = useState<Prisma.ArticleGetPayload<{}>[]>([])
  const { data: articlesData, refetch: refetchArticles } =
    Api.article.findMany.useQuery({})
  const { mutateAsync: createArticle } = Api.article.create.useMutation()
  const { mutateAsync: updateArticle } = Api.article.update.useMutation()
  const { mutateAsync: deleteArticle } = Api.article.delete.useMutation()

  const handleCreate = async (
    type: 'membership' | 'service' | 'article',
    values: any,
  ) => {
    try {
      if (type === 'membership') {
        await createMembership({ data: values })
        refetchMemberships()
      } else if (type === 'service') {
        await createService({ data: values })
        refetchServices()
      } else if (type === 'article') {
        await createArticle({ data: values })
        refetchArticles()
      }
      enqueueSnackbar('Created successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Creation failed', { variant: 'error' })
    }
  }

  const handleUpdate = async (
    type: 'membership' | 'service' | 'article',
    id: string,
    values: any,
  ) => {
    try {
      if (type === 'membership') {
        await updateMembership({ where: { id }, data: values })
        refetchMemberships()
      } else if (type === 'service') {
        await updateService({ where: { id }, data: values })
        refetchServices()
      } else if (type === 'article') {
        await updateArticle({ where: { id }, data: values })
        refetchArticles()
      }
      enqueueSnackbar('Updated successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Update failed', { variant: 'error' })
    }
  }

  const handleDelete = async (
    type: 'membership' | 'service' | 'article',
    id: string,
  ) => {
    try {
      if (type === 'membership') {
        await deleteMembership({ where: { id } })
        refetchMemberships()
      } else if (type === 'service') {
        await deleteService({ where: { id } })
        refetchServices()
      } else if (type === 'article') {
        await deleteArticle({ where: { id } })
        refetchArticles()
      }
      enqueueSnackbar('Deleted successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Deletion failed', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Admin Dashboard</Title>
      <Text>Manage membership tiers, AI services, and articles.</Text>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Section
          title="Membership Tiers"
          data={membershipsData}
          onCreate={values => handleCreate('membership', values)}
          onUpdate={(id, values) => handleUpdate('membership', id, values)}
          onDelete={id => handleDelete('membership', id)}
        />
        <Section
          title="AI Services"
          data={servicesData}
          onCreate={values => handleCreate('service', values)}
          onUpdate={(id, values) => handleUpdate('service', id, values)}
          onDelete={id => handleDelete('service', id)}
        />
        <Section
          title="Articles"
          data={articlesData}
          onCreate={values => handleCreate('article', values)}
          onUpdate={(id, values) => handleUpdate('article', id, values)}
          onDelete={id => handleDelete('article', id)}
        />
      </Space>
    </PageLayout>
  )
}

interface SectionProps {
  title: string
  data: any[]
  onCreate: (values: any) => void
  onUpdate: (id: string, values: any) => void
  onDelete: (id: string) => void
}

const Section: React.FC<SectionProps> = ({
  title,
  data,
  onCreate,
  onUpdate,
  onDelete,
}) => {
  const [form] = Form.useForm()

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: any, record: any) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() => form.setFieldsValue(record)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure?"
            onConfirm={() => onDelete(record.id)}
          >
            <Button icon={<DeleteOutlined />} danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  const handleFinish = (values: any) => {
    if (values.id) {
      onUpdate(values.id, values)
    } else {
      onCreate(values)
    }
    form.resetFields()
  }

  return (
    <div>
      <Title level={3}>{title}</Title>
      <Form form={form} layout="inline" onFinish={handleFinish}>
        <Form.Item name="id" hidden>
          <Input />
        </Form.Item>
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please input the name!' }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item name="description">
          <Input placeholder="Description" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
            {form.getFieldValue('id') ? 'Update' : 'Create'}
          </Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={data} rowKey="id" />
    </div>
  )
}
