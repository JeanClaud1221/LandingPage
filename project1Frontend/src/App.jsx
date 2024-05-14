import { useState } from 'react'
import './App.css'
import NavBar from './component/Nav'
import NameImage from './component/NameImage'
import ThreeImage from './component/ThreeImage'
import TwoImage from './component/TwoImage'
import EmailSender from './component/Email'

function App() {

  return (
    <>
      <div className=' flex flex-col items-center' >
        <div className='max-w-2xl'>
          <NavBar logo="./assets/union.svg" />
          <NameImage name="Jck studios" image="https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <h1 className='text-l sm:text-xl font-normal px-3 2xl:px-0 my-3'>We make <span className='text-blue-700 font-semibold'>Networking</span> and <span className='text-blue-700 font-semibold'>Software</span> solutions look simple and easy providing quality products and exellent service</h1>
          <TwoImage subImage='https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=600'
            mainImage='https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=600' />
          <h2 className="text-l sm:text-xl text-center px-3 2xl:px-0 my-3">Our company was found in 2001 by brothers Michaell and Steven with the purpose of helping small businesses achive their IT needs but quicly grew into something more.Even during growth the companys main focus is still growing small busnisses in the comunity and helping them thrive</h2>
          <ThreeImage subImageBottom='https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=600' subImageTop='https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=600'
            mainImage='https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600' />
          <h2 className="text-l sm:text-xl text-center px-3 2xl:px-0 my-3">We specialize in networking and software development, catering to a spectrum ranging from modest websites to expansive e-commerce platforms like Amazon and eBay. Additionally, we provide comprehensive cybersecurity support. But our services extend beyond that; we also handle various networking needs including VoIP, Wi-Fi, and firewall setup and maintenance.</h2>
          <h3 className='text-l sm:text-xl font-semibold text-center px-3 2xl:px-0 my-3 border-t-2 pt-3'>Want to send the developer a email about questions or just wondering how something works</h3>
        </div>
        <EmailSender />
      </div>
    </>
  )
}

export default App
