import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';



const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <div className='header'><Header /></div>
        <div className='nav'><Navbar /></div>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<Dialogs/>} />
            <Route path='/profile' element={<Profile/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}


export default App;
