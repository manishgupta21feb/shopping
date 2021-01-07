import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/scss/index.scss";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Header from "./elements/Header";
import Footer from "./elements/Footer";

function App() {
  return (
    <div>
      <Header />
      {/* <Login /> */}
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
