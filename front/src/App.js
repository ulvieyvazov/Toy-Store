import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Pages/Client/Home';
import AddProducts from './components/Pages/Admin/AddProducts';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<AddProducts/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;