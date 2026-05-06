import gsap from 'gsap'
import {ScrollTrigger, SplitText} from 'gsap/all'
import Hero from './components/Hero'
import Navbar from './components/navbar'


export default function App() {
  gsap.registerPlugin(ScrollTrigger, SplitText)
  return (
   <main>
     <Navbar />
     <Hero  />
     <div className='h-dvh bg-black'></div>
   </main>
  )
}
