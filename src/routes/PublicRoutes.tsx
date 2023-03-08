import React, { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

const Login = React.lazy(() => import('../pages/Login'));


export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='login' element={ <Suspense fallback={<>Loading App.....</>}><Login /></Suspense> } />

      <Route path='/*' element={<Navigate to='/login' replace />} />
    </Routes>
  )
}