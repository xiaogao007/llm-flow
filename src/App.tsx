import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout.tsx'
import Home from './pages/Home.tsx'
import Chat from './pages/Chat.tsx'
import Flow from './pages/Flow.tsx'
import Datasets from './pages/Datasets.tsx'
import Files from './pages/Files.tsx'
import Knowledge from './pages/Knowledge.tsx'
import Agents from './pages/Agents.tsx'
import Search from './pages/Search.tsx'
import Settings from './pages/Settings.tsx'
import Profile from './pages/Profile.tsx'
import Api from './pages/Api.tsx'
import NotFound from './pages/NotFound.tsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="chat" element={<Chat />} />
          <Route path="flow" element={<Flow />} />
          <Route path="datasets" element={<Datasets />} />
          <Route path="files" element={<Files />} />
          <Route path="knowledge" element={<Knowledge />} />
          <Route path="agents" element={<Agents />} />
          <Route path="search" element={<Search />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="api" element={<Api />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}