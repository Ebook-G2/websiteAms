import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FormContact from '../components/FormContact'
import HeroOd from '../components/HeroOd'
function Contact() {
  return (
    <div>
    <Header/>
    <HeroOd title={'Contact us'} content={'Contact us'}/>
    <div className='pt-8'>
    <FormContact/>
    </div>
    <Footer/>
    </div>
  )
}

export default Contact