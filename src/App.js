import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter} from 'react-router-dom'
import Header from './Header';
import Product from './Product';
import Catalog from './Catalog';
import BestSell from './BestSell';
import Footer from './Footer';
function App() {
  return (
    <div className='App'>
     <Navbar/>
     <Header/>
     <Product/>
     <Catalog/>
     <BestSell/>
     <Footer/>
    </div>
    
    
  );
}

export default App;
