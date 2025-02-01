import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginFrom from './components/LoginForm'
import UserDashboard from './components/UserDashboard'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginFrom />} />
          <Route path="/" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
