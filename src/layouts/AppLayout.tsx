import Navbar from '../components/Navbar'
import LeftSidebar from '../components/LeftSidebar'
import Main from '../components/Main'

export default function AppLayout() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <LeftSidebar />
        <Main />
      </main>
    </div>
  )
} 