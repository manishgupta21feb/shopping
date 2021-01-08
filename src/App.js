import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/scss/index.scss';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Login from '../src/components/Login';
import Signup from '../src/components/Signup';
import Home from '../src/components/Home';

function App() {
  return (
    <div>
      <Header/>
      {/* <Login/> */}
      {/* <Signup/> */}
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
