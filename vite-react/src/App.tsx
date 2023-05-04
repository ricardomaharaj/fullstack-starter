import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '~/components/home'

export function App() {
  return (
    <>
      <BrowserRouter>
        <div className='container mx-auto'>
          <div className='col'>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}
