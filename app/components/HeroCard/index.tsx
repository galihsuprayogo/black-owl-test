'use client'

import { useState, createElement } from 'react'
import { HeroCardItemProps } from '@/interfaces'
import { Card, CardBody } from '@material-tailwind/react'
import { MapPinIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

const HeroCard = () => {
  const [locations, setLocations] = useState<HeroCardItemProps[]>([
    { location: 'Pantai Indah Kapuk', url: '/img/location_1.png' },
    { location: 'Kelapa Gading', url: '/img/location_2.png' },
    { location: 'Gading Serpong', url: '/img/location_3.png' },
  ])

  return (
    <Card>
      <Card className='flex h-fit w-full items-center justify-center bg-white shadow-md md:w-[35rem]'>
        <CardBody className='flex w-full flex-col items-center justify-center space-y-6'>
          <div className='flex w-full flex-col space-y-4'>
            <div className='flex w-full flex-row items-start justify-between'>
              <div className='flex flex-col space-y-2'>
                <span className='font-poppins text-netral-900 text-3xl font-extrabold'>
                  Choose Your
                </span>
                <span className='font-poppins text-primariy-main text-3xl font-extrabold'>
                  Place
                </span>
              </div>
              {createElement(MapPinIcon, {
                strokeWidth: 2,
                className: 'h-10 w-10',
                color: '#757575',
              })}
            </div>
            <span className='font-poppins text-netral-900 text-base font-normal'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna
            </span>
          </div>
          <div className='flex w-full flex-col space-y-3'>
            {locations.map((item, index) => (
              <Link key={index} href='#' target='_top' className='hover:cursor-pointer'>
                <Image
                  src={`${item.url}`}
                  alt={`${item.location}`}
                  placeholder='empty'
                  blurDataURL={`${item.url}`}
                  height={0}
                  width={0}
                  sizes='100vw'
                  className='h-40 w-full bg-none'
                />
              </Link>
            ))}
          </div>
        </CardBody>
      </Card>
    </Card>
  )
}

export default HeroCard
