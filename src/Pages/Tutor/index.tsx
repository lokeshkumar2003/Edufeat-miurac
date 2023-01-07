import React from 'react'
import BenifitAsTutor from './BenifitAsTutor'
import ExpertSteps from './ExpertSteps'
import Faq from './Faq'
import HeroSection from './HeroSection'
import Subjects from './Subjects'
import './styles.css'
export default function Tutor() {
  return (
    <div>
      <HeroSection />
      <BenifitAsTutor />
      <ExpertSteps />
      <Subjects />
      <Faq />
    </div>
  )
}
