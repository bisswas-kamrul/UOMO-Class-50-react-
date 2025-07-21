import React from 'react'
import Header from './layout/Header'
import { Outlet } from 'react-router'
import Futtor from './layout/Futtor'

const Rootlayout = () => {
  return (
   <>
   <Header/>
   <Outlet/>
   <Futtor/>
   </>
  )
}

export default Rootlayout