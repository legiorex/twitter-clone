import { Routes, Route } from 'react-router-dom'
import StartPage from './pages/StartPage'
import Home from './pages/Home'

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/signin" element={<StartPage />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App
