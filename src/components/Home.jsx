import React from 'react'
import "../styles/Home.css"
import Form from './Form'
import Box from './Box'
import thumbnail1 from "../assets/thumbnail1.png"
import thumbnail2 from "../assets/thumbnail2.png"
import thumbnail3 from "../assets/thumbnail3.png"
import thumbnail4 from "../assets/thumbnail4.png"
import thumbnail5 from "../assets/thumbnail5.png"
import thumbnail6 from "../assets/thumbnail6.png"

export default function Home() {
  return (
    <div className='home'>
        <div className='heading'>
            <h1>Suite Of Business Support Services</h1>
            <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium incidunt earum nihil dolorum, dicta libero debitis deserunt, ea animi vitae officiis amet nostrum quia odio. Quod magni autem dolore aspernatur?</p>
            <Form/>
        </div>
        <div className='boxes'>
            <Box thumbnail={thumbnail1} heading="Presentation Design"/>
            <Box thumbnail={thumbnail2} heading="Audio-Visual Production"/>
            <Box thumbnail={thumbnail3} heading="Translation Services"/>
            <Box thumbnail={thumbnail4} heading="Graphic Design"/>
            <Box thumbnail={thumbnail5} heading="Research & Analysis"/>
            <Box thumbnail={thumbnail6} heading="Data Processing"/>
        </div>
    </div>
  )
}
