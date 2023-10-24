import React from 'react'
import './Intro.css';
import bg from '../../assets/bg.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Intro = () => {
  return (
    <section id='intro' className='grid grid-cols-1 lg:grid-cols-2 w-full'>
      <div className='introImage lg:order-2 flex flex-col justify-center items-center'>
        <div className='bgContainer'>
          <img src={bg} alt='profile' className='bg' />
        </div>
      </div>
      <div className='introContent lg:order-1'>
        <p className='hello'>Hello,</p>
        <p className='introText'>I'm <span className='introName'>Kevin Shaw</span></p>
        <span className='introTitle'>Senior Full Stack Engineer</span>
        <p className='introDescription mb-3'>
          Husband, Dad of 2, and Software Engineer with 7+ years of engineering experience and over 20+ years of professional experience.
        </p>
        <div className='buttonContainer flex justify-center lg:justify-start'>
          <button className='hireMeBtn' onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth'})}>
            <FontAwesomeIcon className='btnImg' icon='comment-dots' />
            Hire Me
          </button>
        </div>
      </div>
    </section>
  )
}

export default Intro