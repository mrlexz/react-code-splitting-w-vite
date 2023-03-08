import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import React from "react"

const Profile = React.lazy(() => import('../pages/Profile'))
const About = React.lazy(() => import('../pages/About'))
const Contact = React.lazy(() => import('../pages/Contact'))
const FAQs = React.lazy(() => import('../pages/FAQs'))

export const PrivateRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='profile' element={ <Profile /> } />
        <Route path='about'   element={ <About />   } />
        <Route path='contact' element={ <Contact /> } />
        <Route path='faqs'    element={ <FAQs />    } />

        <Route path='/*'      element={<Navigate to='/profile' replace />} />
      </Routes>
    </>
  )
}