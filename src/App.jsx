import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PageRouter from './PageRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <PageRouter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
