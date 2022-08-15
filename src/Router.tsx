import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './Layouts/DefaultLayout'
import { Home } from './pages/Home'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<div>Not found: 404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
