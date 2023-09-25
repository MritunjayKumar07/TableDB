import React from 'react'
import SectionOne from '../../components/homeComp/SectionOne'
import SectionTwo from '../../components/homeComp/SectionTwo'
import SectionThree from '../../components/homeComp/SectionThree'
import SectionFour from '../../components/homeComp/SectionFour'
import SectionFive from '../../components/homeComp/SectionFive'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </div>
  )
}

export default Home
