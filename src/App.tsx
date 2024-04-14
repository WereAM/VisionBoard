import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing';
import ThemeManager from './themes/Theme';

function App() {
  return (
    <ThemeManager>
      <Landing />
    </ThemeManager>
  );
}

export default App;
