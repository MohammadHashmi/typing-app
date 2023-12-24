import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Test from './pages/Test.js'
import Navbar, { SignOut } from './navbar';


function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />
        </Routes>
    </>
    
  );
}


export function HomePage() {
  return (
    <SignOut />
  )
}

export default App;
