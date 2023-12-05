'use client'

import React, { HTMLProps } from 'react'
import { Navbar, Collapse, Typography, IconButton } from '@material-tailwind/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

function NavList() {
  return (
    <ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Link href='/' target='_top'>
        <Typography
          as='li'
          className='font-roboto flex items-center p-1 text-sm font-normal tracking-widest text-white transition-colors hover:text-white/90'
        >
          Menu
        </Typography>
      </Link>
    </ul>
  )
}

const Nav = (props: {
  children: React.ReactNode
  className?: HTMLProps<HTMLElement>['className']
}) => {
  const [openNav, setOpenNav] = React.useState(false)

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false)

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <React.Fragment>
      <Navbar
        variant='filled'
        color='transparent'
        className='sticky inset-0 z-10 min-w-full rounded-none border-none bg-black px-2 py-3 shadow-sm shadow-gray-900 md:px-8'
      >
        <div className='text-blue-gray-900 flex items-center justify-between'>
          <Link
            href='/'
            target='_top'
            className='flex flex-row items-center justify-center space-x-2 hover:cursor-pointer'
          >
            <Image
              src='/img/logo.png'
              alt='header-logo'
              placeholder='empty'
              blurDataURL='/img/logo.png'
              height={0}
              width={0}
              sizes='100vw'
              style={{
                objectFit: 'contain',
                filter: 'brightness(180%)',
              }}
              className='h-14 w-14'
            />
            <span className='text-primariy-main font-roboto text-lg font-normal uppercase -tracking-tighter'>
              Black Owl
            </span>
          </Link>
          <React.Fragment>
            <div className='hidden'>
              <NavList />
            </div>
            <IconButton
              variant='text'
              className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent'
              ripple={false}
              // onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className='h-6 w-6 text-white' strokeWidth={2} />
              ) : (
                <Bars3Icon className='h-6 w-6 text-white' strokeWidth={2} />
              )}
            </IconButton>
          </React.Fragment>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
      <div className={`mx-auto min-h-screen bg-none ${props.className}`}> {props.children}</div>
    </React.Fragment>
  )
}

export default Nav
