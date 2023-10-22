import React, { useRef, useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import emailjs from '@emailjs/browser'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';




const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs.sendForm('service_09hd3ud', 'template_1637ugs', form.current, 'bNR94E5jZiB0J0JMU')
      .then((result) => {
        setLoading(false)
        setFormSubmitted(true)
        e.target.reset()
      }, (error) => {
        alert('Contact submission failed. Please try again or email me at ishawshank39@gmail.com directly. Sorry for the inconvenience.')
      });
  }

  return (
    <div id='contact' className='flex justify-center flex-col items-center'>
      <h1 className='contactPageTitle text-5xl font-semibold'>Contact me</h1>
      <span className='contactDescription p-4 text-lg font-light'>Please fill out the form below to discuss any work opportunities</span>
      { formSubmitted && (
        <div className='flex justify-center text-center'>
          <p className='p-8 text-green-400 font-normal text-xl'>Thank you for reaching out.<br/><br/> I have receieved your request and will get back to you as soon as I can.</p>
        </div>
      )}
      <form ref={form} className='contactForm flex flex-col m-4 items-center justify-center' onSubmit={sendEmail}>
        <input type='text' name='from_name' className='name bg-zinc-800' placeholder='Your name' />
        <input type='email' name='from_email' className='email bg-zinc-800' placeholder='Your email' />
        <textarea name='message' className='msg bg-zinc-800' rows='5' placeholder='Your message'/>

        <button className='submitBtn m-4 flex justify-center items-center' type='submit' value='Send'>
          {loading && <FontAwesomeIcon className='mr-4' icon={faSpinner} spin />}
          Submit</button>
      </form>
      
      <div className='links flex justify-center mb-8 w-full'>
        <a href='https://www.linkedin.com/in/ishawshank39/' target='_blank' rel="noreferrer">
          <FontAwesomeIcon className='linkImg mx-8' icon={faLinkedin} />
        </a>
        <a href='https://github.com/iShawshank' target='_blank' rel="noreferrer">
          <FontAwesomeIcon className='linkImg mx-8' icon={faSquareGithub} />
        </a>
      </div>
    </div>
  )
}

export default Contact