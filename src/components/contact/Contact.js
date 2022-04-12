import React from 'react'
import './contact.css'

const Contact = () => {
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
                <form>
                    <input type='text' placeholder='Name' name='user_name'/>
                    <input type='text' placeholder='Subject' name='user_subject'/>
                    <input type='text' placeholder='Email' name='user_email'/>

                    <textarea rows='5' placeholder='Message' name='message' />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact