import React from 'react'
import AddSection from './AddSection'
import HeroSection from './HeroSection'
import HomeworkSteps from './HomeworkSteps'
import PersonalisedHelp from './PersonalisedHelp'
import PopularAmongStudents from './PopularAmongStudents'
import './styles.css'
export default function Home() {
  return (  
    <div>
      <HeroSection />
      <PersonalisedHelp />
      <HomeworkSteps />
      <AddSection />
      <PopularAmongStudents />
    </div>
  )
}
