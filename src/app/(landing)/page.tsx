'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  SolutionOutlined,
  RocketOutlined,
  SmileOutlined,
  TeamOutlined,
  TrophyOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'Expert-Managed AI Solutions',
      description:
        'Get personalized AI tool implementations managed by experienced AI engineers.',
      icon: <SolutionOutlined />,
    },
    {
      heading: 'Comprehensive AI/ML Resources',
      description:
        'Access a wealth of technical articles, blogs, and information on AI and ML.',
      icon: <RocketOutlined />,
    },
    {
      heading: 'Tailored AI Solutions',
      description:
        'Receive customized project pitches based on your specific business needs.',
      icon: <EditOutlined />,
    },
    {
      heading: 'Seamless Communication',
      description:
        'Collaborate effortlessly with developers for personalized project execution.',
      icon: <TeamOutlined />,
    },
    {
      heading: 'Stay Competitive',
      description: 'Leverage AI technologies to stay ahead in your industry.',
      icon: <TrophyOutlined />,
    },
    {
      heading: 'Educational Resources',
      description:
        'Learn and grow with our extensive library of AI/ML educational content.',
      icon: <SmileOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'CEO, Tech Innovators',
      content:
        'This platform transformed our business operations with seamless AI integration.',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'CTO, Future Enterprises',
      content:
        'The expert-managed AI solutions provided us with a competitive edge.',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Michael Johnson',
      designation: 'Head of Data, Analytics Co.',
      content:
        'The tailored AI solutions were exactly what we needed to scale our projects.',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: 'Emily Davis',
      designation: 'Founder, AI Startups',
      content:
        'The educational resources are top-notch and helped our team upskill quickly.',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: 'Robert Brown',
      designation: 'Manager, Business Solutions',
      content:
        'Seamless communication with developers made project execution a breeze.',
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
    {
      name: 'Sophia Wilson',
      designation: 'Director, Innovation Hub',
      content:
        'The platform’s comprehensive resources are invaluable for our AI initiatives.',
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Features',
      link: '#features',
    },
    {
      title: 'Pricing',
      link: '#pricing',
    },
  ]

  const packages = [
    {
      title: 'Alpha Wave Membership',
      description: 'Exclusive for Kickstarter backers',
      monthly: 9,
      yearly: 69,
      features: ['Personalized AI Solutions', 'Access to All Resources'],
    },
    {
      title: 'Theta Wave Membership',
      description: 'Ideal for new clients',
      monthly: 19,
      yearly: 149,
      features: ['Expert-Managed Implementations', 'Priority Support'],
      highlight: true,
    },
    {
      title: 'Enterprise Solutions',
      description: 'Custom solutions for large businesses',
      monthly: 49,
      yearly: 399,
      features: ['Dedicated AI Engineer', 'Custom Project Pitches'],
    },
  ]

  const questionAnswers = [
    {
      question: 'What is included in the Alpha Wave Membership?',
      answer:
        'The Alpha Wave Membership includes personalized AI solutions and access to all resources.',
    },
    {
      question: 'How can I get started with the Theta Wave Membership?',
      answer:
        'Simply sign up on our platform and choose the Theta Wave Membership plan.',
    },
    {
      question: 'What kind of support is available?',
      answer:
        'We offer priority support for Theta Wave members and dedicated support for Enterprise clients.',
    },
    {
      question: 'Can I upgrade my membership plan?',
      answer:
        'Yes, you can upgrade your plan at any time through your account settings.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Sign Up',
      description: 'Create an account and choose your membership plan.',
    },
    {
      heading: 'AI Readiness Assessment',
      description:
        'Fill out our AI Readiness Assessment form to help us understand your needs.',
    },
    {
      heading: 'Receive Custom Solutions',
      description:
        'Get personalized project pitches and AI tool implementations.',
    },
    {
      heading: 'Collaborate and Implement',
      description:
        'Work with our developers to seamlessly integrate AI solutions into your business.',
    },
  ]

  const painPoints = [
    {
      emoji: '🤯',
      title: 'AI Complexity',
    },
    {
      emoji: '❓',
      title: 'Lack of Expertise',
    },
    {
      emoji: '🚧',
      title: 'Implementation Challenges',
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title="Transform Your Business with AI"
        subtitle="Unlock the full potential of AI and machine learning with our expert-managed solutions."
        buttonText="Get Started"
        buttonLink="/register"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/QwYzNg-curveaisolutionsconsultationanddevelopment-dmbZ"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText="from happy clients"
          />
        }
      />
      <LandingSocialProof logos={logos} title="Featured on" />
      <LandingPainPoints
        title="AI Adoption Challenges"
        painPoints={painPoints}
      />
      <LandingHowItWorks title="How It Works" steps={steps} />
      <LandingFeatures
        id="features"
        title="Achieve Your AI Goals"
        subtitle="Our platform provides everything you need to successfully integrate AI into your business."
        features={features}
      />
      <LandingTestimonials
        title="Success Stories"
        subtitle="See how our platform has helped other businesses achieve their AI dreams."
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Choose Your Plan"
        subtitle="Find the perfect plan to meet your AI needs."
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Got questions? We’ve got answers."
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title="Ready to Transform Your Business?"
        subtitle="Join us today and start your AI journey."
        buttonText="Get Started"
        buttonLink="/register"
      />
    </LandingContainer>
  )
}
