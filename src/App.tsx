import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from './routes/PrivateRoutes';
import { PublicRoutes } from './routes/PublicRoutes';

const isAuthenticated = true;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          (isAuthenticated)
            ? <Route path="/*" element={<PrivateRoutes />} />
            : <Route path="/*" element={<PublicRoutes />} />
        }
      </Routes>
    </BrowserRouter>
  )
}
export default App