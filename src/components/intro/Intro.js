import React from 'react'
import './Intro.css'

const Intro = () => {
  return (
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h2 className='i-intro'>Hello, I am</h2>
                <h1 className='i-name'>Kumar Ankit</h1>
                <div className='i-title'>
                    <div className='i-title-wrapper'>
                        <div className='i-title-item'>React Js Developer</div>
                        <div className='i-title-item'>UI/UX Designer</div>
                        <div className='i-title-item'>JavaScript Developer</div>
                        <div className='i-title-item'>Content Writer</div>
                    </div>
                </div>
                <p className='i-desc'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>
            </div>
        </div>
        <div className='i-right'>
        <div className='i-bg'>
             
        </div>
            <img src={require('../../image/me.png')} alt='' className='i-img' />
        </div>
    </div>
  )
}

export default Intro