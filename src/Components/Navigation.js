import React, { useContext, useState, useEffect } from 'react'
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import AnchorLink from './AnchorLink'
import Button from './Button'
import { NavContext } from './Context'

function Navigation() {

    const [showNav, setShowNav] = useState(false)
    const [show, handleShow] = useState(false)

    const [activeNav, setActiveNav] = useContext(NavContext)

    useEffect(() => {
        const myFunc = () => {
            if (window.scrollY > 50) {
                handleShow(true);
            } else handleShow(false);
        }
        window.addEventListener("scroll", myFunc)
        return () => {
            window.removeEventListener("scroll", myFunc)
        }
    }, [])

    const animation = useAnimation()
    const sideNavAnimate = useAnimation()

    useEffect(() => {
        if (show) {
            animation.start({
                backgroundColor: '#605B60'
            })
        } else {
            animation.start({
                backgroundColor: 'transparent'
            })
        }
    }, [show])

    

    useEffect(() => {
        if (showNav) {
            sideNavAnimate.start({
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.2
                },
                y: 0,
                x: '0vw'
            })
        } else {
            sideNavAnimate.start({
                opacity: 0,
                scale: 0.9,
                x: '100vw'
            })
        }
    }, [showNav])



    const handleNav = (navLink) => {
        setActiveNav(navLink)
    }

    return (
        <>
            <motion.nav className={`w-full fixed top-0 flex flex-row justify-between px-side py-5 items-center z-10 `} animate={animation} >
                <div className='text-sm text-main-white font-bold font-gothic' >
                    <AnchorLink route="/" >
                        <div className="flex flex-row justify-start items-center gap-1" >
                            <svg width="35" height="42" viewBox="0 0 35 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.62891 12.0039H6.43359C7.01172 12.0039 7.48828 11.9062 7.86328 11.7109C8.23828 11.5078 8.51562 11.2266 8.69531 10.8672C8.88281 10.5 8.97656 10.0742 8.97656 9.58984C8.97656 9.15234 8.89062 8.76562 8.71875 8.42969C8.55469 8.08594 8.30078 7.82031 7.95703 7.63281C7.61328 7.4375 7.17969 7.33984 6.65625 7.33984C6.24219 7.33984 5.85938 7.42188 5.50781 7.58594C5.15625 7.75 4.875 7.98047 4.66406 8.27734C4.45312 8.57422 4.34766 8.93359 4.34766 9.35547H0.960938C0.960938 8.41797 1.21094 7.60156 1.71094 6.90625C2.21875 6.21094 2.89844 5.66797 3.75 5.27734C4.60156 4.88672 5.53906 4.69141 6.5625 4.69141C7.71875 4.69141 8.73047 4.87891 9.59766 5.25391C10.4648 5.62109 11.1406 6.16406 11.625 6.88281C12.1094 7.60156 12.3516 8.49219 12.3516 9.55469C12.3516 10.0938 12.2266 10.6172 11.9766 11.125C11.7266 11.625 11.3672 12.0781 10.8984 12.4844C10.4375 12.8828 9.875 13.2031 9.21094 13.4453C8.54688 13.6797 7.80078 13.7969 6.97266 13.7969H4.62891V12.0039ZM4.62891 14.5703V12.8242H6.97266C7.90234 12.8242 8.71875 12.9297 9.42188 13.1406C10.125 13.3516 10.7148 13.6562 11.1914 14.0547C11.668 14.4453 12.0273 14.9102 12.2695 15.4492C12.5117 15.9805 12.6328 16.5703 12.6328 17.2188C12.6328 18.0156 12.4805 18.7266 12.1758 19.3516C11.8711 19.9688 11.4414 20.4922 10.8867 20.9219C10.3398 21.3516 9.69922 21.6797 8.96484 21.9062C8.23047 22.125 7.42969 22.2344 6.5625 22.2344C5.84375 22.2344 5.13672 22.1367 4.44141 21.9414C3.75391 21.7383 3.12891 21.4375 2.56641 21.0391C2.01172 20.6328 1.56641 20.125 1.23047 19.5156C0.902344 18.8984 0.738281 18.168 0.738281 17.3242H4.125C4.125 17.7617 4.23438 18.1523 4.45312 18.4961C4.67188 18.8398 4.97266 19.1094 5.35547 19.3047C5.74609 19.5 6.17969 19.5977 6.65625 19.5977C7.19531 19.5977 7.65625 19.5 8.03906 19.3047C8.42969 19.1016 8.72656 18.8203 8.92969 18.4609C9.14062 18.0938 9.24609 17.668 9.24609 17.1836C9.24609 16.5586 9.13281 16.0586 8.90625 15.6836C8.67969 15.3008 8.35547 15.0195 7.93359 14.8398C7.51172 14.6602 7.01172 14.5703 6.43359 14.5703H4.62891Z" fill="#F86615" />
                                <path d="M23.125 21.625V24.2734H10.832L10.668 22.2227L17.7812 10.9375H20.4648L17.5586 15.8008L14.0195 21.625H23.125ZM21.1914 10.9375V28H17.8164V10.9375H21.1914Z" fill="#BE4E28" />
                                <path d="M25.3477 28.2305L22.6523 27.5859L23.625 18.9375H33.2109V21.668H26.4023L25.9805 25.4531C26.207 25.3203 26.5508 25.1797 27.0117 25.0312C27.4727 24.875 27.9883 24.7969 28.5586 24.7969C29.3867 24.7969 30.1211 24.9258 30.7617 25.1836C31.4023 25.4414 31.9453 25.8164 32.3906 26.3086C32.8438 26.8008 33.1875 27.4023 33.4219 28.1133C33.6562 28.8242 33.7734 29.6289 33.7734 30.5273C33.7734 31.2852 33.6562 32.0078 33.4219 32.6953C33.1875 33.375 32.832 33.9844 32.3555 34.5234C31.8789 35.0547 31.2812 35.4727 30.5625 35.7773C29.8438 36.082 28.9922 36.2344 28.0078 36.2344C27.2734 36.2344 26.5625 36.125 25.875 35.9062C25.1953 35.6875 24.582 35.3633 24.0352 34.9336C23.4961 34.5039 23.0625 33.9844 22.7344 33.375C22.4141 32.7578 22.2461 32.0547 22.2305 31.2656H25.582C25.6289 31.75 25.7539 32.168 25.957 32.5195C26.168 32.8633 26.4453 33.1289 26.7891 33.3164C27.1328 33.5039 27.5352 33.5977 27.9961 33.5977C28.4258 33.5977 28.793 33.5156 29.0977 33.3516C29.4023 33.1875 29.6484 32.9609 29.8359 32.6719C30.0234 32.375 30.1602 32.0312 30.2461 31.6406C30.3398 31.2422 30.3867 30.8125 30.3867 30.3516C30.3867 29.8906 30.332 29.4727 30.2227 29.0977C30.1133 28.7227 29.9453 28.3984 29.7188 28.125C29.4922 27.8516 29.2031 27.6406 28.8516 27.4922C28.5078 27.3438 28.1055 27.2695 27.6445 27.2695C27.0195 27.2695 26.5352 27.3672 26.1914 27.5625C25.8555 27.7578 25.5742 27.9805 25.3477 28.2305Z" fill="#0E183E" />
                            </svg>
                            <p className='normal__text font-bold' >
                                Construction
                            </p>
                        </div>
                    </AnchorLink>
                </div>
                <div className='hidden lg:flex w-fit flex-row justify-between gap-3 
             items-center' >
                    <AnchorLink route="/" >
                        <Button
                            style={`tetiary hover:text-white ${activeNav === "home" ? 'active__btn' : null}`}
                            click={() => handleNav("home")}
                        >
                            Home
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/about" >
                        <Button
                            style={`tetiary hover:text-white ${activeNav === "about" ? 'active__btn' : null}`}
                            click={() => handleNav("about")}
                        >
                            About
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/services" >
                        <Button
                            style={`tetiary hover:text-white ${activeNav === "services" ? 'active__btn' : null}`}
                            click={() => handleNav("services")} >
                            Service
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/projects" >
                        <Button
                            style={`tetiary hover:text-white ${activeNav === "projects" ? 'active__btn' : null}`}
                            click={() => handleNav("projects")} >
                            Project
                        </Button>
                    </AnchorLink>
                </div>
                <div className='flex' >
                    <AnchorLink route="/contact" >
                        <Button
                            style="secondary"
                            click={() => {
                                setShowNav(false)
                                handleNav("contact")
                            }}
                        >
                            Contact
                        </Button>
                    </AnchorLink>
                </div>
                <div className=' lg:hidden flex w-8 h-8 bg-transparent flex-col justify-evenly items-center relative overflow-hidden cursor-pointer ' onClick={() => setShowNav(!showNav)} >
                    <div className={`w-full h-1 bg-main-white transition ease-in-out ${showNav ? "-rotate-45 translate-y-2.5" : null} `} />
                    <div className={`w-full h-1 bg-main-white ${showNav ? 'translate-x-full' : null} transition ease-in-out `} />
                    <div className={`w-full h-1 bg-main-white transition ease-in-out ${showNav ? "rotate-45 -translate-y-2" : null} `} />
                </div>
            </motion.nav>
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
            >
                <motion.nav
                    className={`fixed top-20 lg:hidden right-0 left-0 bottom-0 w-full bg-main-bg  gap-10 z-10 flex flex-col justify-center items-center`}
                    animate={sideNavAnimate}
                    onClick={() => setShowNav(!showNav)}
                >
                    <AnchorLink route="/" >
                        <Button
                            style={`tetiary hover:text-white text-4xl ${activeNav === "home" ? 'active__btn' : null}`}
                            click={() => {
                                handleNav("home")
                                setShowNav(!showNav)
                            }}
                        >
                            Home
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/about" >
                        <Button
                            style={`tetiary hover:text-white text-4xl ${activeNav === "about" ? 'active__btn' : null}`}
                            click={() => {
                                handleNav("about")
                                setShowNav(!showNav)
                            }}
                        >
                            About
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/services" >
                        <Button
                            style={`tetiary hover:text-white text-4xl ${activeNav === "services" ? 'active__btn' : null}`}
                            click={() => {
                                handleNav("services")
                                setShowNav(!showNav)
                            }} >
                            Service
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/projects" >
                        <Button
                            style={`tetiary hover:text-white text-4xl ${activeNav === "projects" ? 'active__btn' : null}`}
                            click={() => {
                                handleNav("projects")
                                setShowNav(!showNav)
                            }} >
                            Project
                        </Button>
                    </AnchorLink>
                </motion.nav>
            </AnimatePresence>
        </>
    )
}

export default Navigation