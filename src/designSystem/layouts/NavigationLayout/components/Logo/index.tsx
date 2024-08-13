import { Typography } from 'antd'
import { useRouter } from 'next/navigation'
import React, { ImgHTMLAttributes } from 'react'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  isLabel?: boolean
}

export const Logo: React.FC<Props> = ({
  height = 50,
  isLabel = false,
  style,
  ...props
}) => {
  const router = useRouter()

  const goTo = (url: string) => {
    router.push(url)
  }

  return (
    <div className="flex flex-row items-center gap-2">
      <img
        src="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/QwYzNg-curveaisolutionsconsultationanddevelopment-536o"
        height={height}
        style={{
          borderRadius: '5px',
          cursor: 'pointer',
          objectFit: 'contain',
          height: `${height}px`,
          ...style,
        }}
        {...props}
        onClick={() => goTo('/home')}
      />
      {isLabel && (
        <Typography.Title level={4} style={{ margin: '0px' }}>
          Curve AI Solutions Consultation and Development
        </Typography.Title>
      )}
    </div>
  )
}
