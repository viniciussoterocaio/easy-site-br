import './App.css';
import Header from './Header.js'
import InitialPage from './pages/InitialPage';
import Footer from './Footer';

function App() {
  return (
    <div id = 'site-body'>
      <Header/>
      <InitialPage/>
      <Footer/>
    </div>
  );
}

export default App;