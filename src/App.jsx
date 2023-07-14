import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import PageRouter from './PageRouter';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <PageRouter />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
