import logo from './logo.svg';
import './App.css';
import NavBar from './Routes/NavBar';
import Allroutes from './Routes/AllRoutes';
import Search from './Pages/search';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
      <Search/>
      <NavBar/>
      <Allroutes/>
      <Footer/>
     
    </div>
  );
}

export default App;
