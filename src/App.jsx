import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import ProtectRoute from './components/style/auth/ProtectRoute'
const Home = lazy(() => import('./pages/home'))
const Login = lazy(() => import('./pages/login'))
const Chat = lazy(() => import('./pages/Chat'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Groups = lazy(() => import('./pages/Groups'))
import { LayoutLoader } from './components/style/Layout/Loader';


let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route path="/" element={<ProtectRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/groups" element={<Groups />} />
          </Route>
          <Route path="/login"
            element={
              <ProtectRoute user={!user} redirect='/'>
                <Login />
              </ProtectRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>


      </Suspense>

    </BrowserRouter>
  )
}

export default App