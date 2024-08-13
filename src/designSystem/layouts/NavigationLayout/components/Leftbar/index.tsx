import { Flex, Menu, Row } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface Props {
  logo: ReactNode
  items: { key: string; label: string; onClick: () => void }[]
  itemsBottom?: { key: string; label: string; onClick: () => void }[]
}

export const Leftbar: React.FC<Props> = ({ logo, items, itemsBottom }) => {
  const pathname = usePathname()

  return (
    <>
      <Sider width={250} trigger={null} style={{ height: '100%' }}>
        <Row style={{ paddingLeft: 24, paddingTop: 16, paddingBottom: 16 }}>
          {logo}
        </Row>

        <Flex vertical justify="space-between" flex={1} className="pb-4">
          <Menu
            mode="inline"
            items={items}
            selectedKeys={[pathname]}
            style={{ width: '100%' }}
          />
          <Menu mode="inline" items={itemsBottom} style={{ width: '100%' }} />
        </Flex>
      </Sider>
    </>
  )
}
