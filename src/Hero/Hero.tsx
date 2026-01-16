import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import mountain from "../assets/mountain.jpg";
import plane from "../assets/plane.png";
import cloude1 from "../assets/cloud1.png";
import cloud2 from "../assets/edited-photo (3).png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const container = useRef<HTMLDivElement | null>(null);
    const title = useRef<HTMLHeadingElement | null>(null);
    const planeref = useRef<HTMLImageElement | null>(null);
    const cloudeRef = useRef<HTMLDivElement | null>(null);

    /* ---------------- TITLE ANIMATION ---------------- */
    useEffect(() => {
        if (!container.current || !title.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                title.current!,
                { y: 0, opacity: 1 },
                {
                    y: -200,
                    opacity: 0.7,
                    scrollTrigger: {
                        trigger: container.current,
                        start: "12% top",
                        end: "bottom 50%",
                        scrub: true,
                    },
                }
            );
        }, container);

        return () => ctx.revert();
    }, []);

    /* ---------------- PLANE + CLOUD RESPONSIVE ---------------- */
    useEffect(() => {
        if (!container.current || !planeref.current || !cloudeRef.current) return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            /* ---------- DESKTOP ---------- */
            mm.add("(min-width: 1024px)", () => {
                gsap.fromTo(
                    planeref.current!,
                    { x: -200, opacity: 0 },
                    {
                        x: "100vw",
                        opacity: 1,
                        scrollTrigger: {
                            trigger: container.current,
                            start: "5% top",
                            end: "bottom top",
                            scrub: true,
                        },
                    }
                );

                gsap.to(cloudeRef.current!, {
                    x: "50vw",
                    opacity: 0.5,
                    scrollTrigger: {
                        trigger: container.current,
                        start: "5% top",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            });

            /* ---------- TABLET ---------- */
            mm.add("(min-width: 640px) and (max-width: 1023px)", () => {
                gsap.to(planeref.current!, {
                    x: "60vw",
                    opacity: 1,
                    scrollTrigger: {
                        trigger: container.current,
                        start: "10% top",
                        end: "bottom top",
                        scrub: true,
                    },
                });

                gsap.to(cloudeRef.current!, {
                    x: "35vw",
                    opacity: 0.45,
                    scrollTrigger: {
                        trigger: container.current,
                        start: "10% top",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            });

            /* ---------- MOBILE ---------- */
            mm.add("(max-width: 639px)", () => {
                gsap.to(planeref.current!, {
                    x: "40vw",
                    opacity: 1,
                    scrollTrigger: {
                        trigger: container.current,
                        start: "15% top",
                        end: "bottom top",
                        scrub: true,
                    },
                });

                gsap.to(cloudeRef.current!, {
                    x: "20vw",
                    opacity: 0.4,
                    scrollTrigger: {
                        trigger: container.current,
                        start: "15% top",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            });
        }, container);

        return () => ctx.revert();
    }, []);

    /* ---------------- JSX ---------------- */
    return (
        <div
            ref={container}
            className="relative overflow-hidden min-h-[180vh]"
        >
            {/* Background */}
            <img
                className="h-[70vh] sm:h-[90vh] w-full object-cover"
                src={mountain}
                alt="Mountain"
            />

            {/* Title */}
            <h1
                ref={title}
                className="
    absolute
    top-1/2 sm:top-1/4
    left-1/2
    -translate-x-1/2 -translate-y-1/2
    text-white
    text-3xl sm:text-4xl md:text-6xl
    text-center
    font-bold
    px-4
  "
            >
                Where peace meets majestic mountains.
            </h1>


            {/* Plane */}
            <img
                ref={planeref}
                className="absolute left-0  top-[25%] w-[40%] sm:top-[30%]  sm:w-[25%] md:w-[20%]"
                src={plane}
                alt="Plane"
            />

            {/* Clouds */}
            <div
                ref={cloudeRef}
                className="absolute top-6 sm:top-10 left-0 w-full
                   h-[180px] sm:h-[250px] md:h-[300px]
                   pointer-events-none"
            >
                <img
                    className="absolute opacity-30 w-[20%] left-[6.25%] z-20"
                    src={cloude1}
                    alt="Cloud"
                />

                <img
                    className="absolute w-[20%]  opacity-45 top-5 left-[12.5%] z-10"
                    src={cloud2}
                    alt="Cloud"
                />
            </div>
        </div>
    );
};

export default Hero;
