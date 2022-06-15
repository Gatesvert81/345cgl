import React, { useContext, useState, useEffect } from 'react'
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import AnchorLink from './AnchorLink'
import Button from './Button'
import { NavContext } from './Context'
import Image from 'next/image'
import logo from '../../public/345logo.png'

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
                            <div className="w-8 h-8 relative bg-logo bg-no-repeat bg-center bg-contain" >
                            </div>
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