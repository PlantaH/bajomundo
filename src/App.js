import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar"
import Bajos from "./pages/bajos"
import Equipos from "./pages/equipos"
import Accesorios from "./pages/accesorios"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/bajos' exact component={Bajos} />
        <Route path='/equipos' component={Equipos} />
        <Route path='/accesorios' component={Accesorios} />        
      </Switch>
    </Router>
  
  );
}

export default App;   
