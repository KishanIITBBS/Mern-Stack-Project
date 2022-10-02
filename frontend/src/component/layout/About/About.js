import React from 'react'
import './aboutSection.css'
import { Button, Typography, Avatar } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
const About = () => {
  const visitInstagram = () => {
    window.location = 'https://www.instagram.com/kishanpatel3834/'
  }
  return (
    <div className='aboutSection'>
      <div></div>
      <div className='aboutSectionGradient'></div>
      <div className='aboutSectionContainer'>
        <Typography component='h1'>About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: '10vmax', height: '10vmax', margin: '2vmax 0' }}
              src='https://res.cloudinary.com/dfq7evxe2/image/upload/v1664571302/products/my_pic3_yphceg.png'
              alt='Founder'
            />
            <Typography>Kishan Patel</Typography>
            <Button onClick={visitInstagram} color='primary'>
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @meKishanPatel. Only with the
              purpose to learn and get more experience on MERN Stack.
            </span>
          </div>
          <div className='aboutSectionContainer2'>
            <Typography component='h2'>Our Brands</Typography>
            <a
              href='https://www.linkedin.com/in/kishan-patel-b50466205/'
              target='blank'
            >
              <LinkedInIcon className='linkedinSvgIcon' />
            </a>

            <a href='https://www.instagram.com/kishanpatel3834/' target='blank'>
              <InstagramIcon className='instagramSvgIcon' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
