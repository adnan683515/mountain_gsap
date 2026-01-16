import { ScrollTrigger } from 'gsap/ScrollTrigger'
import insideImage from '../assets/inside.jpg'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import leftImage from '../assets/leftImage.jpg'

gsap.registerPlugin(ScrollTrigger)

export default function SecondeDiv() {

    const bottleContainer = useRef<HTMLDivElement | null>(null);


    useEffect(() => {

    }, []);



    return (
        <div ref={bottleContainer} className='relative -mt-12 overflow-hidden'>
            <img className='w-full' src={insideImage} alt="" />

            {/* <img src={leftImage} className=' absolute left-0 h-full top-0' alt="" /> */}
{/* <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div> */}
        </div>
    )
}
