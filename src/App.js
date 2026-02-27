import './App.css';
import theme from './theme';
import Footer from './components/Footer';
import HeaderHome from './components/Header/HeaderHome.jsx';
import Main from './components/Main';
import Nav from './components/Nav/Nav.jsx';
import { ThemeProvider } from '@emotion/react';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav/>
        <HeaderHome/>
        <Main/>
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
