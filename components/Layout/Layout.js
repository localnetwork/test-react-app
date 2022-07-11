import Head from 'next/head'
import React from 'react'
import { HeaderNavbar } from '../Navbar/HeaderNavbar'

export const Layout = ({ children }) => {
  return (
    <>
        <HeaderNavbar>
        </HeaderNavbar>

        <div className='main-wrapper'>{children}</div>
    </>
  )
}
