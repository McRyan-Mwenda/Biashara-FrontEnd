import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';

import Home from './pages/site/Home.jsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <div className='App'>
        <Navbar />
      </div>
    </>
  )
}

export default App;
