import gsap from 'gsap'
import {ScrollTrigger, SplitText} from 'gsap/all'
import About from './components/About'
import Cocktails from './components/Cocktails'
import Hero from './components/Hero'
import Navbar from './components/navbar'


export default function App() {
  gsap.registerPlugin(ScrollTrigger, SplitText)
  return (
   <main>
     <Navbar />
     <Hero  />
     <Cocktails />
     <About />
   </main>
  )
}
