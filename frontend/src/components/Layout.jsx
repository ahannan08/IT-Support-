import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import GetStarted from './sections/GetStarted'
import getStarted from '../content/get-started.json'

export default function Layout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="site-main">
        <Outlet />
        <GetStarted section={getStarted} />
      </main>
      <Footer />
    </div>
  )
}
