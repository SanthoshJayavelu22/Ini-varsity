import React from 'react'
import Hero from '../components/explore/Hero'
import TeachWithUs from '../components/explore/TeachWithUs'
import Curriculum from '../components/explore/Curriculum'
import CampusToClient from '../components/explore/CampusToClient'
import CertificationSection from '../components/explore/CertificationSection'
import TestimonialsFAQ from '../components/explore/TestimonialsFAQ'
import EducationCTASection from '../components/EducationCTASection'

const Explore = () => {
  return (
    <main>
      <Hero/>
      <TeachWithUs/>
      <Curriculum/>
      <CampusToClient/>
      <CertificationSection/>
      <TestimonialsFAQ/>
      <EducationCTASection/>
    </main>
  )
}

export default Explore
