'use client'
import Image from 'next/image'
import Link from 'next/link'
import profilePic from '@/../public/images/my-pict.jpg'
import Button from '@/components/Button'
import { useRef } from 'react'

import projectList from '@/../data/projects.json'

const Home = () => {
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <section className=" bg-white dark:bg-dark-900">
        <div className="container mx-auto h-screen grid grid-cols-1 gap-4 px-10 overflow-hidden md:py-32 md:grid-cols-3 md:px-12 md:gap-x-8 lg:px-20">
          <div className="flex flex-col col-span-2 justify-center items-center text-center md:items-start md:text-left">
            <div className="block mt-10 mb-6 md:hidden">
              <Image
                src={profilePic}
                priority={true}
                width={172}
                height={172}
                className="rounded-full w-auto h-auto object-center"
                alt="Profile Picture"
              />
            </div>
            <h1 className="text-xl text-light-700 font-medium mb-3 uppercase lg:text-2xl md:mb-5 dark:text-dark-100">
              Andiko Yoga Wardhana
            </h1>
            <h1 className="text-3xl font-bold mb-4 md:text-6xl md:mb-6 lg:text-7xl 2xl:text-8xl">
              Full Stack Developer
            </h1>
            <p className="text-xs tracking-wider leading-[1.7rem] md:text-sm lg:text-lg">
              A junior fullstack developer who currently focused on Web
              Development. Other than that, I also interested in Mobile
              Development. I love to learn new things and always open to new
              opportunities.
            </p>
            <div className="flex gap-3 text-xs mt-4 md:text-sm md:mt-10">
              <Button variation="primary" className="px-7 py-3">
                Download CV
              </Button>
              <Button
                variation="secondary"
                className="px-7 py-3"
                onClick={scrollToContact}
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="hidden justify-end items-center col-span-1 md:flex">
            <Image
              src={profilePic}
              priority={true}
              width={288}
              height={350}
              className="rounded-full w-auto h-auto object-center"
              alt="Profile Picture"
            />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-dark-900">
        <div className="container mx-auto px-10 pt-20 md:px-12 lg:px-20">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold uppercase lg:text-2xl">
              My Projects
            </h1>
            <Link href="/projects">
              <Button variation="secondary" className="px-3 py-2 text-xs">
                All Project
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {projectList.map((item, index) => (
              <div
                key={index}
                className="relative w-full shadow-md transition-transform ease-in-out duration-[0.5s] hover:scale-105"
              >
                <Image
                  src={item.image}
                  width={620}
                  height={323.81}
                  className="rounded-lg"
                  alt="bionev-liquid"
                />
                <div className="absolute top-3 left-2">
                  <span className="bg-[#F76969] text-black px-3 py-2 rounded-full text-xs">
                    {item.stack}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-dark-900" ref={contactRef}>
        <div className="container mx-auto px-10 py-20 md:px-12 lg:px-20">
          <h1 className="text-xl font-bold uppercase mb-4 lg:text-2xl">
            Contact Me
          </h1>
          <div className="flex flex-col gap-3 md:flex-row md:justify-between">
            <p className="font-medium">Ready to start project with me?</p>
            <div>
              <p className="dark:text-dark-400">React me out at</p>
              <div className="relative group w-fit">
                <Link
                  href="mailto:rizuna30@gmail.com"
                  className="text-3xl select-none text-light-700 md:text-4xl lg:text-6xl dark:text-dark-300"
                >
                  rizuna30@gmail.com
                </Link>
                <div className="absolute w-full left-0 -bottom-4 h-[1px] bg-light-600"></div>
                <div className="absolute left-0 -bottom-4 h-[2px] bg-light-700 dark:bg-white w-0 lg:group-hover:w-full origin-left transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
