import React, { useState } from 'react'
import { Modal, Button } from 'antd'

const VideoGuide: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [currentSection, setCurrentSection] = useState('')

  const showModal = (section: string) => {
    setCurrentSection(section)
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const getVideoContent = (section: string) => {
    switch (section) {
      case 'Introduction':
        return 'Placeholder content for Introduction video tutorial'
      case 'Basic Understanding':
        return 'Placeholder content for Basic Understanding video tutorial'
      case 'Current Technology':
        return 'Placeholder content for Current Technology video tutorial'
      case 'Organizational Culture':
        return 'Placeholder content for Organizational Culture video tutorial'
      case 'Personalized Feedback':
        return 'Placeholder content for Personalized Feedback video tutorial'
      default:
        return 'No content available'
    }
  }

  return (
    <div>
      <Button onClick={() => showModal('Introduction')}>
        Introduction Guide
      </Button>
      <Button onClick={() => showModal('Basic Understanding')}>
        Basic Understanding Guide
      </Button>
      <Button onClick={() => showModal('Current Technology')}>
        Current Technology Guide
      </Button>
      <Button onClick={() => showModal('Organizational Culture')}>
        Organizational Culture Guide
      </Button>
      <Button onClick={() => showModal('Personalized Feedback')}>
        Personalized Feedback Guide
      </Button>

      <Modal
        title={`${currentSection} Video Guide`}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <p>{getVideoContent(currentSection)}</p>
      </Modal>
    </div>
  )
}

export default VideoGuide
