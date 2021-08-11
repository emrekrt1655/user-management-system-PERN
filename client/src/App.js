import "./app.scss";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CustomerAdd from "./components/CustomerAdd/CustomerAdd";
import CustomerEdit from "./components/CustomerEdit/CustomerEdit";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";

function App() {
  // to control menu
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  return (
    <Router>
      <Navbar
        hamburgerMenu={hamburgerMenu}
        setHamburgerMenu={setHamburgerMenu}
      />
      <Menu 
        hamburgerMenu={hamburgerMenu} 
        setHamburgerMenu={setHamburgerMenu} 
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={CustomerAdd} />
        <Route path="/edit/:id" component={CustomerEdit} />
      </Switch>
    </Router>
  );
}

export default App;
