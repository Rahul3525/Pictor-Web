import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './Component/Navbar';
import Sol from './Component/Pages/solution';
import Pro from './Component/Pages/product';
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Footer from './Component/Pages/Footer'
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />

        <Route
          path="/solution"
          element={<Sol />}
        />
        <Route path='/product' element={<Pro/>}/>
      
       <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;