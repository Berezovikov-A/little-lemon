import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header>
        <Nav></Nav>
      </Header>
      <Home />
      <Footer></Footer>
    </>
  );
}

export default App;
