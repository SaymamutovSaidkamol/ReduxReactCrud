import React, { lazy } from 'react'
import Footer from "./components/footer/Footer"
import Header from './components/header/Header'
import { useRoutes } from 'react-router-dom'

const Home = lazy(() => import("./pages/Home/Home"))
const Create = lazy(() => import("./pages/Create/Create"))


function App() {

  return (
    <>
      <Header />
      {
        useRoutes([
          { path: "/", element: <Home /> },
          { path: "/create", element: <Create /> }
        ])
      }
      <Footer />
    </>
  )
}


export default React.memo(App)