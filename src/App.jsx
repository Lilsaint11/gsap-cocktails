import gsap from 'gsap'
import {ScrollTrigger, SplitText} from 'gsap/all'


export default function App() {
  gsap.registerPlugin(ScrollTrigger, SplitText)
  return (
    <div className='flex-center h-[100vh]'>
      <h1 className='text-3xl text-indigo-300'>Hello gsap</h1>
    </div>
  )
}
