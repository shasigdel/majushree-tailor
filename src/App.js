import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      
      <Header />
      <main>
      <Home />
      <Contact />
      </main>
      <Footer />
      
    </div>
  );
}

export default App;
