import React from 'react'
import SectionOne from './SectionOne/SectionOne'
import SectionTwo from './SectionTwo/SectionTwo'
import SectionThree from './SectionThree/SectionThree'
import SectionFour from './SectionFour/SectionFour'
import SectionFive from './SectionFive/SectionFive'

function AllSection() {
  return (
    <div>
        <SectionOne/>
        <SectionTwo/>
        {/* <SectionThree/> */}
        <SectionFour/>
        <SectionFive/>
    </div>
  )
}

export default AllSection