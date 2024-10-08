import { Typography } from 'antd'
import Image from 'next/image'
import React from 'react'

const { Title, Paragraph } = Typography

interface TeamMember {
  name: string
  title: string
  bio: string
  photoUrl: string
}

interface Props {
  id?: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Austin Belcheff',
    title: 'CEO',
    bio: 'John has over 20 years of experience in the tech industry and is passionate about innovation.',
    photoUrl: '/images/aus_tin.png',
  },
  {
    name: 'Clayton Christian',
    title: 'CTO',
    bio: 'Jane is a brilliant technologist with a track record of developing cutting-edge solutions.',
    photoUrl: '/images/clay_ton.jpg',
  },
  {
    name: 'Mike Johnson',
    title: 'COO',
    bio: 'Mike excels in optimizing operations and driving business growth strategies.',
    photoUrl: '/images/mike-johnson.jpg',
  },
]

const LandingAboutUs: React.FC<Props> = ({ id }) => {
  return (
    <div id={id} className="max-w-4xl mx-auto py-12">
      <Title level={2} className="text-center mb-8">
        Our Leadership Team
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map(member => (
          <div key={member.name} className="text-center">
            <Image
              src={member.photoUrl}
              alt={member.name}
              width={192} // Increased width
              height={192} // Increased height
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
            />
            <Title level={4}>{member.name}</Title>
            <Paragraph className="text-gray-600 mb-2">{member.title}</Paragraph>
            <Paragraph>{member.bio}</Paragraph>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LandingAboutUs
