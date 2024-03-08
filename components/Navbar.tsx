import React from 'react'
import Image from 'next/image'
import { NavLinks } from '@/constants'
import Link from 'next/link'

const Navbar = () => {
  return (
    
    <nav className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>   
            <Image
              src= "/logo.png"
              width={50}
              height={43}
              alt='logo'
            />
            {/* impresion de componente contante desde index.ts */}
            <ul className='xl:flex hidden text-small gab-9'>
              {NavLinks.map((link) => (
                <Link href={link.href} key={link.key} className='mx-4'>
                  {link.text}
                </Link>          
              ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar