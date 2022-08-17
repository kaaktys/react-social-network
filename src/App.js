import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';



const App = () => {
  return (
    <div className='app-wrapper'>
      <div className='header'><Header /></div>
      <div className='nav'><Navbar /></div>
      <div className='profile'><Profile /></div>
    </div>
  )
}


export default App;
