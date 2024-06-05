import { Route, Routes } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Error from './pages/Error'
import Home from './pages/Home'
import Lodgement from './pages/Lodgement'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="about" />
        <Route element={<Lodgement />} path="lodgement/:id" />
        <Route element={<Error />} path="*" />
      </Routes>
      <Footer />
    </>
  )
}

export default App
