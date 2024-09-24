//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './index.css'

import Navbar from './Navbar';

import Header from './Header';

import Header1 from './Header1'

import Featured from './Featured';

import Testimonial from './Testimonial';

import ClientTestimonial from "./Clienttestimonial";

import Message from "./Message";

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>

    <div className='bg-black min-h-screen'>



    <Navbar/>

    <Header/>

    <Header1/>

    <Featured/>

    <Testimonial/>

    <ClientTestimonial/>

    <Message/>
    

</div>
  
    </>
  )
}

export default App
