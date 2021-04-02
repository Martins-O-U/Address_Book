import {Route} from "react-router-dom"
import HomePage from './Components/Home';
import AddContact from "./Components/AddContact";
import Navbar from "./Components/Navbar"
import './App.css';

function App() {
  return (
    <div className="App" id="gradient">
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route path ="/addcontact" component={AddContact} />
    </div>
  );
}

export default App;
