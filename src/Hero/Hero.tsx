import { useEffect, useRef } from 'react';
import mountain from '../assets/mountain.jpg'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import plane from '../assets/plane.png'



gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    const container = useRef<HTMLDivElement | null>(null)
    const title = useRef<HTMLHeadingElement | null>(null)
    const planeref = useRef<HTMLImageElement | null>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.fromTo(title.current, {

                y: 0,
                opacity: 1
            }, {
                y: -200,
                opacity: 0.7,
                scrollTrigger: {

                    trigger: container.current,
                    start: "12% top",
                    end: "bottom 50%",
                    scrub: true,

                }

            })

        })
        return () => ctx.revert()

    }, [])

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                planeref.current, {
                opacity: 0
            }, {
                x: 500,
                opacity: 1,
                scrollTrigger: {

                    trigger: container.current,
                    start: "12% top",
                    end: "bottom 50%",
                    scrub: true,
                    markers: true
                }
            }
            )

        })
        return () => ctx.revert()
    }, [])



    return (
        <div ref={container} className="relative overflow-hidden">
            <img
                className=" h-[70vh] sm:h-[90vh] w-full object-cover"
                src={mountain}
                alt="Mountain"
            />

            <h1 ref={title} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                 text-white text-3xl  md:text-7xl text-center font-bold  px-4">
                Where peace meets majestic mountains.
            </h1>

            <img ref={planeref} className='absolute left-0 w-[20%] top-1/2' src={plane} alt="" />
        </div>

    );
};

export default Hero;