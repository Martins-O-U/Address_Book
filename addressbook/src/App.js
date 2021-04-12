import {Route} from "react-router-dom"
import {ToastContainer} from "react-toastify";
import HomePage from './Components/Home';
import AddContact from "./Components/AddContact";
import Navbar from "./Components/Navbar"
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import ContactList from "./Components/ContactList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route path ="/addcontact" component={AddContact} />
      <Route path ="/contactlist" component={ContactList} />
      <ToastContainer />
    </div>
  );
}

export default App;
