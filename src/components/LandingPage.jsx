
import { useGSAP } from '@gsap/react'
import Nav from './nav'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { useRef } from 'react'

const LandingPage = () => {

    const videoRef = useRef()

    useGSAP(()=>{
        const tl = gsap.timeline()
        const textLines = new SplitText(".heading",{type:"lines"})
        
        
        tl.from(".logo",{
            scale:0,
            opacity:0,
            duration:1
        },"c")

        tl.from("#desktop-nav-items",{
            y:-300,
            duration:0.5,
            stagger:0.3,
            opacity:0,
        })

        tl.from(".service",{
            x:300,
            duration:1,
            opacity:0
        },"c")

        const animateLine = textLines.lines.map((elem)=>(
            tl.from(elem,{
                y:-300,
                duration:0.5,
                opacity:0,
                ease:"back"
            })
        ))
        
        tl.from(".para",{
            scale:0,
            opacity:0,
            duration:1
        })
        
        tl.call(()=>{
            videoRef.current.play()
        })
    },[])
    
    // console.log(videoRef.current.duration)
  return (
    <section className='landing-page bg-bg h-screen w-full overflow-hidden flex-center'>
        <div className='relative container max-w-full h-full md:max-w-[90%] md:h-[90%] outline-none overflow-hidden md:rounded-[5vw] bg-bg'>
            <video ref={videoRef} id='video' muted className='w-full h-full object-cover md:rounded-[5vw]' src="/ai-face.mp4"></video>
            <div className='w-full h-full absolute top-0 left-0 bg-transparent'></div>
            <img className='w-[25vw] hidden md:block object-cover z-10 absolute top-[-1vh] left-[-1vw] rotate-180' src="/clip-shape.png" alt="image" />
            <img className='w-[25vw] hidden md:block object-cover  z-10 absolute bottom-[-1vh] right-[-1vw]' src="/clip-shape.png" alt="image" />
            <img className='w-[25vw] object-cover z-10 absolute bottom-0 left-0' src="/ellipse.png" alt="image" />
            <div className='content absolute z-20 top-[50%] left-[5vw] md:left-[8vw] translate-y-[-50%]'>
                <h2 className='heading text-[6vw]/35 md:text-[3vw]/18 text-black w-[20vw] font-AW'>CRAFTING DIGITAL MAGIC</h2>
                <p className='para text-[2.5vw] md:text-[1.5vw] my-[2vh] text-black w-[30vw] font-DM'>Bringing ideas to life with stunning design & code.</p>
            </div>
            <div className='logo absolute z-20 top-0 left-0 ml-[4.5rem] mt-[2.5rem] w-fit'>
                <h2 className='text-[2.5vw]/14 w-fit text-white uppercase font-AW'>blunex</h2>
                <h3 className='text-[0.7vw] my-[-0.1rem] ml-[0.25vw] w-fit text-white font-extralight font-DM uppercase tracking-[0.5vw]'>Digital Studio</h3>
            </div>
            <div className='service hidden md:block absolute z-20 bottom-0 right-0 mb-[1rem] mr-[3rem]'>
                <button className='uppercase font-DM text-[2vw] outline-none rounded-2xl text-white w-fit px-[2vw] py-[1vh] '>our service</button>
            </div>
            <Nav />
        </div>
    </section>
  )
}

export default LandingPage