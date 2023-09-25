import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navebar_web004 from './components/navebar/Navebar_web004';
import Reference from './pages/docs/Reference';
import Home from './pages/home/Home';
import Page404 from './pages/404/Page404';
import Room from './components/dbManage/rooms/Room';

function App() {
  return (
    <div className="App">
      <Navebar_web004 />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/reference' element={<Reference />} />
        <Route path='/room' element={<Room />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
