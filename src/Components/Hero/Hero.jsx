import React from 'react'
import './Hero.css'
import profile_img from '../../assets/about_profile.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Ashutosh singh,</span> full stack developer based in INDIA.</h1>
      <p>I am a B.Tech Computer Science student and a Full Stack Developer from Delhi, India. Currently, I am pursuing a Java Full Stack Developer course from IT-Vedant and actively looking for a fresher job opportunity. </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <a href="/Ashutosh_Singh_Resume.pdf" download className="hero-resume">My Resume</a>

      </div>
    </div>
  )
}

export default Hero