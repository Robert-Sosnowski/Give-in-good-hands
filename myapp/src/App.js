import Home from './components/homepage/Home';
import './App.css';
import { Routes, Route, } from "react-router-dom";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import MainPage from './routes/MainPage';
import Login from './routes/Login';
import Loguotn from './routes/Loguotn';
import Register from './routes/Register';
function App() {
  return (
    <ThemeProvider
			breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
			minBreakpoint="xxs"
		>
    <Home/>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<Loguotn/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </ThemeProvider>
  );
}

export default App;
