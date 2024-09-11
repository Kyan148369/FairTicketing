'use client'

import { useState, useEffect } from 'react'

import Header from "@/app/components/header";
import Grid from "@/app/components/grid";
import Footer from "@/components/ui/footer";


import Menu from "@/app/header";
import Dashboard from "@/app/dashboard";
import SessionWrapper from "@/app/provider";

export function AppPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [active, setActive] = useState('home');
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const tickets = [
    { id: 1, name: 'Concert A', date: '2023-07-15', price: '0.5 SOL' },
    { id: 2, name: 'Festival B', date: '2023-08-20', price: '1.2 SOL' },
    { id: 3, name: 'Theater Show C', date: '2023-09-05', price: '0.8 SOL' },
    { id: 4, name: 'Sports Event D', date: '2023-10-10', price: '2.0 SOL' },
  ]

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
        <SessionWrapper>
        <Menu/>
        </SessionWrapper>
      <Dashboard/>
      <Header/>
      <Grid/>


     <Footer/>
    </div>
  )
}