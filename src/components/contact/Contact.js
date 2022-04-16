import React, { useRef, useState, useContext } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import {ThemeContext} from '../../context'

const Contact = () => {

    const formRef = useRef()
    const [done, setDone] = useState(false)

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleSubmit= (e) => {
        e.preventDefault()

        emailjs.sendForm('service_dua77yf', 'template_37kig5n', 
        formRef.current, 'hMmCo9uUhqIpSnlSA')
        .then((result) => {
          console.log(result.text)
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <div className='c'>
        <div className='c-bg'></div>
        <div className='c-wrapper'>
            <div className="c-left">
                <h1 className="c-title">Let's discuss about work</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={require('../../image/phone.png')} 
                            alt='phone-img' className='c-icon'/>
                            +1 234 567 890
                    </div>
                    <div className="c-info-item">
                        <img src={require('../../image/email.png')} 
                            alt='email-img' className='c-icon'/>
                            contact@kumar.com
                    </div>
                    <div className="c-info-item">
                        <img src={require('../../image/address.png')} 
                            alt='address-img' className='c-icon'/>
                            45/A, 23rd Street, Northkig Road, Breland 
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>Lorem ipsum dolor sit amet ?</b> Consectetur adipisicing elit. Beatae, neque. Veritatis natus magnam cumque facere modi! Totam voluptates quisquam dignissimos cupiditate ex. Assumenda, nam explicabo
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}} type='text' placeholder='Name' name='user_name'/>
                    <input style={{backgroundColor: darkMode && "#333"}} type='text' placeholder='Subject' name='user_subject'/>
                    <input style={{backgroundColor: darkMode && "#333"}} type='text' placeholder='Email' name='user_email'/>

                    <textarea style={{backgroundColor: darkMode && "#333"}} rows='5' placeholder='Message' name='message' />
                    <button>Submit</button>
                    {done && " Thankyou ..."}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact