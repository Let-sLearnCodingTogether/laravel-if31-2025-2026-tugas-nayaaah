import React from 'react'
import { NavLink } from 'react-router'
import Contact from '../components/contact.jsx'

export default function () {
  return (
    <div>
        <NavLink to="/ListContact">Lihat Contact</NavLink>
        <Contact />
    </div>
  )
}