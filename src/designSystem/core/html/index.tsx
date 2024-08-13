import { theme } from 'antd'
import { ReactNode } from 'react'

const { useToken } = theme

interface Props {
  children: ReactNode
}

export const MrbHtml: React.FC<Props> = ({ children }: Props) => {
  const { token } = useToken()

  return (
    <html
      lang="en"
      style={{ background: token.colorBgBase, color: token.colorTextBase }}
    >
      <head>
        <title>Curve AI Solutions Consultation and Development</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
