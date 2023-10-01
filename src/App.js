import { Routes, Route } from 'react-router-dom';
import './App.css';
import Reference from './pages/docs/Reference';
import Home from './pages/home/Home';
import Page404 from './pages/404/Page404';
import Room from './components/dbManage/rooms/Room';
import SignUp from './pages/signinsignup/SignUp';
import SignIn from './pages/signinsignup/SignIn';
import UserName from './pages/signinsignup/UserName';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/reference' element={<Reference />} />
        <Route path='/room' element={<Room />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/username' element={<UserName />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
