import Hero from '../components/Hero';
import VideoCards from '../components/VideoCards';
import AboutSection from '../components/AboutSection';
import ConferenceSection from "../components/ConferenceSection";
import EducationSection from '../components/EducationSection';
import EducationCTASection from '../components/EducationCTASection';
const Home = () => {
  return (
    <div>
        <Hero />
        <VideoCards />
        <AboutSection />
         <ConferenceSection />
         <EducationSection/>
         <EducationCTASection/>
       
    </div>
  )
}

export default Home
