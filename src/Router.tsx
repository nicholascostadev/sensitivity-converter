import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from './components/NotFound'
import { DefaultLayout } from './Layouts/DefaultLayout'
import { Home } from './pages/Home'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
