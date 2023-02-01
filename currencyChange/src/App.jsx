import './App.css';

import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Header from './components/Header';
import ConvertForm from './components/ConvertForm';
import News from './components/News';
import Help from './components/Help';
import Contact from './components/Contact';
import LoginForm from './components/LoginForm';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ConvertForm />} />
          <Route path='news' element={<News />} />
          <Route path='help' element={<Help />} />
          <Route path='contact' element={<Contact />} />
          <Route path='loginForm' element={<LoginForm />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
