import Header from './Components/Header';
import Home from './Routes/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App