'use client'

import { BookOpen, Menu, Plus, UserIcon, X } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Separator } from './ui/separator'
import { UserButton } from '@clerk/nextjs'
import React, { useState } from 'react'

const navLinks = [
  {
    label: 'Create',
    href: '/create',
    icon: <Plus className='size-4' />,
  },
  {
    label: 'Explore',
    href: '/explore',
    icon: <BookOpen className='size-4' />,
  },
  {
    label: 'Results',
    href: '/results',
    icon: <UserIcon className='size-4' />,
  },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='relative'>
      <nav className='sticky p-4 pr-8 flex justify-between items-center bg-white top-0 w-full h-16 z-50 border-b'>
        <div className='flex items-center gap-2'>
          <h1 className='text-xl tracking-widest'>
            Qui<span className='text-blue-600 font-bold'>zz</span>er
          </h1>
        </div>

        {/* Mobile menu button */}
        <div className='md:hidden'>
          <Button variant='outline' size='icon' onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className='absolute top-16 right-4 w-48 bg-white rounded-lg shadow-lg border py-2 z-50'>
            <div className='flex flex-col'>
              {navLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.label}
                  className='flex items-center gap-2 px-4 py-2 hover:bg-gray-100'
                >
                  <span className='text-blue-600'>{link.icon}</span>
                  <span className='text-sm'>{link.label}</span>
                </Link>
              ))}
              <div className='px-2 py-1'>
                <Separator className='my-2' />
              </div>
              <div className='flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100'>
                <UserButton />
              </div>
            </div>
          </div>
        )}

        {/* Desktop menu */}
        <div className='hidden md:flex items-center gap-4'>
          {navLinks.map((link) => (
            <React.Fragment key={link.label}>
              <Link
                href={link.href}
                className='flex items-center gap-2 hover:text-blue-600'
              >
                <span className='text-blue-600'>{link.icon}</span>
                <span className='text-sm'>{link.label}</span>
              </Link>
              <Separator orientation='vertical' className='h-6' />
            </React.Fragment>
          ))}
          <div className='flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100'>
            <UserButton />
          </div>
        </div>
      </nav>
    </div>
  )
}
