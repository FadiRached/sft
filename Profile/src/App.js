import './App.css';
import React from 'react';
import{ReactComponent as PeaceIcon}from './icons/peace.svg';

function Navbar(props){
  return (
    <nav className="navbar">
      <ul className = "navbar-nav">{ props.children}</ul>
    </nav>
  );
}
function App() {
  return (
    <Navbar>
      <NavItem icon ={<PeaceIcon/>}/>
    </Navbar>
  );
}
function NavItem(props){
  return(
<li className= "nav-item">
  <a href="#" className ="icon-button">
    {props.icon}
  </a>

</li>
  );
}

export default App;
