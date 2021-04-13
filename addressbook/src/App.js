import {Route} from "react-router-dom"
import {ToastContainer} from "react-toastify";
import HomePage from './Components/Home';
import Navbar from "./Components/Navbar"
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import ContactList from "./Components/ContactList";
import MobileNav from "./Components/MobileNav";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MobileNav />
      <Route exact path="/" component={HomePage} />
      <Route path ="/contactlist" component={ContactList} />
      <ToastContainer />
    </div>
  );
}

export default App;
