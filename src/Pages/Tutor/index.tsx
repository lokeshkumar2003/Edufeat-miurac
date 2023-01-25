import React from 'react'
import BenifitAsTutor from './BenifitAsTutor'
import ExpertSteps from './ExpertSteps'
import Faq from './Faq'
import HeroSection from './HeroSection'
import Subjects from './Subjects'
import './styles.css'
// import TutorLoveEdufeat from './TutorLoveEdufeat'
import TutorLoveEdufeatTestimonials from "./TutorLoveEdufeatTestimonials"
export default function Tutor() {
  return (
    <div>
      <HeroSection />
      <BenifitAsTutor />
      <ExpertSteps />
      {/* <TutorLoveEdufeat /> */}
      <TutorLoveEdufeatTestimonials />
      <Subjects />
      <Faq />
    </div>
  )
}
