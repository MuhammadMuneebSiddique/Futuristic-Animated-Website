import React, { useRef, useState } from 'react'
import { NavItems } from '../../constant'
import { IoCloseOutline } from 'react-icons/io5'
import { CiMenuFries } from 'react-icons/ci'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const Nav = () => {

    
    const [menu , setMenu] = useState(false)

    const animation = useRef()

    useGSAP(()=>{
        const tl = gsap.timeline()

        tl.from("#header-container",{
            x:400,
            duration:0.7,
        })

        tl.from("#nav-items",{
            x:300,
            duration:1,
            opacity:0,
            stagger:0.3
        })

        tl.from(".close",{
            opacity:0
        })

        animation.current = tl.pause()

    },[])
    
    const handleMenuOpen = () => {
        setMenu(!menu)
        animation.current.play()
    }

    const handleMenuClose = () => {
        animation.current.reverse()
        setTimeout(() => setMenu(!menu),3900)
    }

  return (
    <nav className='nav absolute py-[3rem] top-0 right-[5vw]'>
        <div className='block md:hidden relative z-10'>
            <CiMenuFries onClick={handleMenuOpen} className={`open text-5xl ${menu ? "hidden" : "block"}`} />
            <IoCloseOutline onClick={handleMenuClose} className={`close text-6xl ${menu ? "block" : "hidden"}`} />
        </div>
        <ul id='header-container' className={` md:hidden flex text-[2.5vw] tracking-wide font-DM font-medium capitalize pl-[5rem] pt-[8rem] fixed h-screen w-[40vw] top-0 right-[-1rem] bg-white flex-col gap-[5vh] ${menu ? "flex" : "hidden"}`}>
            {NavItems.map((elem)=>{
                return <li id='nav-items' key={elem.id} className=' text-primary cursor-pointer  hover:text-primary'>{elem.title}</li>
            })}
        </ul>
        <ul className='hidden md:flex text-[1.6vw] font-medium flex-center gap-[4vw] font-DM capitalize'>
            {NavItems.map((elem)=>{
                return <li id='desktop-nav-items' key={elem.id} className=' text-white cursor-pointer  hover:text-primary'>{elem.title}</li>
            })}
        </ul>
    </nav>
  )
}

export default Nav