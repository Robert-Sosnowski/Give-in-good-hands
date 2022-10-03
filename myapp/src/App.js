import Home from './components/homepage/Home';
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Login from './routes/Login';
import Logout from './routes/Logout';
import Register from './routes/Register';

function App() {
  return (
    <ThemeProvider
			breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
			minBreakpoint="xxs"
		>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
